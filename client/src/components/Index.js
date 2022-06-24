import React, { useEffect, useState, useRef } from 'react'
import { Link} from 'react-router-dom';
import bkg1 from '../img/space7.jpeg'
import styled from '../css/Index.module.scss'

import {TweenMax, Power3} from 'gsap';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Index = (proprs) =>{
    const [eml,setEmail] = useState('')

    let logoItem = useRef(null)

    useEffect(() => {
        // create the email link
        setEmail("mailto:lb.broadhead@gmail.com");
    },[])

    return(
        <div className={styled.wrp}  style={{backgroundImage: `url(${bkg1})`}}>
            <div className={styled.txtWrp}>
                <h1 className="title">Web Developer</h1>
                <h4>Lisa Broadhead</h4>
            </div>
            <main className={styled.about}>
                <ul className={styled.nav}>
                    <li className="about"><Link to="/about">About</Link></li>
                    <li className="skills"><Link to="/skills">Skills</Link></li>
                    <li className="projects"><Link to="/projects">Projects</Link></li>
                    <li className="blog"><Link to="/blog">Blog</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                </ul>

                <ul className={styled.socialLinks}>
                    <li><a href="https://github.com/lisabroadhead" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href="https://www.linkedin.com/in/lisa-broadhead/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href={eml}><FontAwesomeIcon icon={faEnvelope} /></a></li>
                </ul>
                
            </main>
        </div>
    )
} 

export default Index;


// animations for home pagew