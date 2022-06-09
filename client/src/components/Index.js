import React from 'react'
import { Link} from 'react-router-dom';
import bkg1 from '../img/space7.jpeg'
import styled from '../css/Index.module.scss'


const Index = (proprs) =>{
    return(
        <div className={styled.wrp}  style={{backgroundImage: `url(${bkg1})`}}>
            <div className={styled.txtWrp}>
                <h1 className="title">Lisa Broadhead</h1>
                <h4>Into the Great Unkown!</h4>
            </div>
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
        </div>
    )
} 

export default Index;