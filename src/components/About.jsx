import React, {useState, useEffect} from "react";

export default function About(){
    const[name, setName] = useState("");
    const[role, setRole] = useState("");
    const[photo, setPhoto] = useState("");
    const[resume, setResume] = useState("");

    useEffect(()=>{
        const getAbout = async() =>{
            let response = await fetch(
                "about.json",
                {
                    method: "get"
                }
            );
            let data = await response.json();
            //console.log(data);
            setName(data.myName);
            setRole(data.role);
            setPhoto(data.photo);
            setResume(data.resumeLink);
        };
        getAbout();
    },[]);

    return(
        <div>
            <h1>{name}</h1>
            <h2>{role}</h2>
            <img src={photo} width="400"></img>
            <a href={resume} target="_blank">Resume</a>
        </div>
    )
}