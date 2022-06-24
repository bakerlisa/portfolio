import React from 'react'
import { Link} from 'react-router-dom';

const Nav = () => {
    return(
        <>
            <ul className="nav">
                <li className="about"><Link to="/about">About</Link></li>
                <li className="skills"><Link to="/skills">Skills</Link></li>
                <li className="projects"><Link to="/projects">Projects</Link></li>
                <li className="blog"><Link to="/blog">Blog</Link></li>
                <li><Link to="/resume">Resume</Link></li>
            </ul>
        </>
    )
}

export default Nav;