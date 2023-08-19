import About from "../components/About.jsx"
import Contact from "../components/Contact.jsx"
import Projects from "../components/Projects.jsx"

export default function HomePage(){
    return(
        <div className="main">
            <About/>
            <h2 className="main__h2">Projects</h2>
            <Projects/>
            <h2 className="main__h2">Contact Me</h2>
            <Contact/>
        </div>
    )
}