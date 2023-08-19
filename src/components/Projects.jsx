import { useState, useEffect } from "react";
import {NavLink} from "react-router-dom";
import newtabIcon from "../../public/icon/newtab.svg";
import githubIcon from "../../public/icon/github.svg";

export default function Projects(){
    const [projects, setProjects] = useState([]);

    useEffect( () => {
        const getProjects = async() => {
            let response = await fetch(
                "projects.json",
                {
                    method: "get"
                }
            );
            let data = await response.json();
            setProjects(data);
        };
        getProjects();
    }, []);

    return(
        <div id="projectpage">
            {projects.map((project)=>(
                <div key={project.id} class="projectpage__project">
                    <h3 class="projectpage__project_h3"><a href={project.route}>{project.title}</a></h3>
                    <p>{project.blurb}</p>
                    <div class="projectpage__project_detail">
                        <a href={project.route} target="_blank"><img src={project.image} width="400"/></a>
                        <div>
                            <a href={project.deployingUrl} target="_blank"><img src={newtabIcon} width="60"></img></a>
                            <a href={project.githubUrl} target="_blank"><img src={githubIcon} width="60"></img></a>
                        </div>
                    </div>
                    <div class="projectpage__project_lang">
                        {project.languages.map((lang) => (
                            <div key={lang.id}>
                                <img src={lang.icon} alt={lang.alt} width="40"></img>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}