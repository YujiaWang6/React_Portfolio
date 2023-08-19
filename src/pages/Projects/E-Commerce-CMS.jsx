import { useState, useEffect} from 'react';
import newtabIcon from "../../../public/icon/newtab.svg";
import githubIcon from "../../../public/icon/github.svg";


export default function CMS(){
    const [project, setProject] = useState([]);

    useEffect( ()=>{
        const getProject = async() => {
            let response = await fetch(
                "../projects.json",
                {
                    method: "get"
                }
            );
            let data = await response.json();
            setProject(data[1]);

        }
        getProject();
    },[])


    return(
        <div className="main">
            <div className="eachProject">
                <a href="/project" className="eachProject__a">Go back to all the Projects</a>
                <h1><a href={project.deployingUrl} className="eachProject__h1">{project.title}</a></h1>
                <a href={project.deployingUrl} target="_blank"><img src={project.imageForDetail} alt={project.title} width="800"></img></a>
                <h2>Overview</h2>
                <p>{project.detailDescription}</p>
                <h2>Functions</h2>
                <h3>{project.function1Heading}</h3>
                <p>{project.function1}</p>
                <h3>{project.function2Heading}</h3>
                <p>{project.function2}</p>
                <h3>{project.function3Heading}</h3>
                <p>{project.function3}</p>
                <a href={project.deployingUrl} target="_blank"><img src={newtabIcon} alt="new tab window icon" width="60"></img></a>
                <a href={project.githubUrl} target="_blank"><img src={githubIcon} alt="github icon" width="60"></img></a>
            </div>
        </div>
    )
}