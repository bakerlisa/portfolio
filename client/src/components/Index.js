import React from 'react'
import { Link} from 'react-router-dom';
import Banner from '../views/Banner';


const Index = (proprs) =>{
    return(
        <>
            <Banner img="space7.jpeg" title="Lisa Broadhead" subtitle="Into the Great Unkown!" />
            <main className="about">
                <ul className="nav">
                    <li className="about">About</li>
                    <li className="skills">Skills</li>
                    <li className="projects">Projects</li>
                    <li><Link to="/resume">Resume</Link></li>
                </ul>

                

                <ul className="social-links">
                    <li><a href="https://github.com/lisabroadhead" target="_blank"><i className="fab fa-github-square"></i></a></li>
                    <li><a href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="" className="el" data-el1="lb.bradohead" data-el2="gmail"><i className="fas fa-envelope"></i></a></li>
                </ul>
                
            </main>
        </>
    )
} 

export default Index;