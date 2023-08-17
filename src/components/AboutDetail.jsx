import { useState, useEffect } from "react";
import Contact from "./Contact.jsx";

export default function AboutDetail(){
   const [myName,setMyname] =useState([]); 
   const [longIntro, setLongIntro] = useState([]);
   const [photo, setPhoto] = useState([]);
   const [resumeLink, setResumeLink] =useState([]);
   const [languages, setLanguages] = useState([]);

   useEffect( () => {
    const getLanguages = async()=>{
        let response = await fetch (
            "languages.json",
            {
                method:"get"
            }
        );
        let data = await response.json();
        setLanguages(data);
    };

    const getInfo = async()=>{
        let inforesponse = await fetch(
            "about.json",
            {
                method:"get"
            }
        );
        let infodata = await inforesponse.json();
        setMyname(infodata.myName);
        setLongIntro(infodata.longIntro);
        setPhoto(infodata.photo);
        setResumeLink(infodata.resumeLink);
    };
    getLanguages();
    getInfo();
   }, []);

   return(
    <>
        <h1>{myName}</h1>
        <img src={photo} width="400"></img>
        <p>{longIntro}</p>
        
        <h2>Skills</h2>
        <div>
            {languages.map((lang)=>(
            <div key={lang.id}>
                <p>{lang.name}</p>
            </div>
            ))}
        </div>
        <Contact/>
    </>
   )
}