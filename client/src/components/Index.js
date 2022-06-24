import React, { useEffect, useState, useRef } from 'react'
import bkg1 from '../img/space7.jpeg'
import styled from '../css/Index.module.scss'


import {TweenMax, Power3} from 'gsap';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Nav from '../views/Nav';

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
                <Nav />
                
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