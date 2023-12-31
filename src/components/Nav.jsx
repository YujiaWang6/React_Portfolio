import {NavLink} from "react-router-dom";
export default function Nav(){
    return(
        <nav id="header__nav">
            <ul id="header__nav_ul">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/project">Project</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    )
}