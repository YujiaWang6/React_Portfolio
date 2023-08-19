import React, {useState,useEffect} from "react";
import emailIcon from "../../public/icon/email.svg";
import githubIcon from "../../public/icon/github.svg";
import linkedinIcon from "../../public/icon/linkedin.svg";


export default function Contact(){
    const [email, setEmail] = useState("");
    const [githubLink, setGithubLink] = useState("");
    const [linkedin, setLinkedin] = useState("");

    useEffect( () => {
        const getContact = async()=>{
            let response = await fetch(
                "about.json",
                {
                    method: "get"
                }
            );
            let data = await response.json();
            //console.log(data);
            setEmail(data.email);
            setGithubLink(data.githubLink);
            setLinkedin(data.linkedin);
        }
        getContact();
    }, []);


    return(

            <div className="contactContainer">
                <a href={email} target="_blank"><img src={emailIcon} width="60"></img></a>
                <a href={githubLink} target="_blank"><img src={githubIcon} width="60"></img></a>
                <a href={linkedin} target="_blank"><img src={linkedinIcon} width="60"></img></a>
            </div>

    )


}