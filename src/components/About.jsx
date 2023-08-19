import React, {useState, useEffect} from "react";
import Contact from "./Contact.jsx";

export default function About(){
    const[name, setName] = useState("");
    const[role, setRole] = useState("");
    const[photo, setPhoto] = useState("");
    const[resume, setResume] = useState("");
    const[shortIntro, setShortIntro] = useState("");
    const [longIntro1, setLongIntro1] = useState("");
    const [longIntro2, setLongIntro2] = useState("");
    const [languages, setLanguages] = useState([]);
    const [checkpath, setCheckpath] = useState(false); 
    const currentPath = window.location.pathname.toLowerCase();

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
            setShortIntro(data.shortIntro);
            setLongIntro1(data.longIntro1);
            setLongIntro2(data.longIntro2);
            if(currentPath==="/about"){
                setCheckpath(true);
            }else{
                setCheckpath(false);
            }
        };

        const getLanguages = async()=>{
            let response = await fetch (
                "languages.json",
                {
                    method:"get"
                }
            );
            let languages = await response.json();
            setLanguages(languages);
        };

        getAbout();
        getLanguages();
    },[]);

    return(
        <div class="about">
            <div class="about__Container">
                <div class="about__Container_intro">
                    <h1>Hi, I'm {name}</h1>
                    {checkpath?(
                        <></>
                    ):(
                        <>
                        <h2>{shortIntro}</h2>
                        </>
                    )}
                    <a href={resume} target="_blank" class="about__Container_intro_btn">Resume</a>
                </div>
                <img src={photo} width="400" class="about__Container_img"></img>
            </div>

            {checkpath?(
                <div class="about__Longintro">
                    <p>{longIntro1}</p>
                    <p>{longIntro2}</p>
                    <h2>Skills</h2>
                    <div class="languages">
                        {languages.map((lang)=>(
                        <div key={lang.id}>
                            <img src={lang.icon} width="40"></img>
                            <p>{lang.name}</p>
                        </div>
                        ))}
                    </div>
                    <div class="about__Contact">
                        <h2>Contact Me</h2>
                        <Contact/>
                    </div>
                </div>
            ):(
                <></>
            )}
        </div>

    )
}