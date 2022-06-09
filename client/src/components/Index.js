import React from 'react'
import { Link} from 'react-router-dom';
import bkg1 from '../img/space7.jpeg'
import styled from '../css/Index.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF,faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Index = (proprs) =>{
    return(
        <div className={styled.wrp}  style={{backgroundImage: `url(${bkg1})`}}>
            <div className={styled.txtWrp}>
                <h1 className="title">Lisa Broadhead</h1>
                <h4>Into the Great Unkown!</h4>
            </div>
            <main className="about">
                <ul className={styled.nav}>
                    <li className="about">About</li>
                    <li className="skills">Skills</li>
                    <li className="projects">Projects</li>
                    <li><Link to="/resume">Resume</Link></li>
                </ul>

                

                <ul className={styled.socialLinks}>
                    <li><a href="https://github.com/lisabroadhead" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href="https://www.linkedin.com/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="" className="el" data-el1="lb.bradohead" data-el2="gmail"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                </ul>
                
            </main>
        </div>
    )
} 

export default Index;