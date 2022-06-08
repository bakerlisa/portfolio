import React from 'react'
import Banner from '../views/Banner';
import { Document, Page } from 'react-pdf';

import resume from '../pdf/Resume-Lisa_Broadhead.pdf';

const Index = (proprs) =>{
    return(
        <>
            <Banner img="space7.jpeg" title="Lisa Broadhead" subtitle="Into the Great Unkown!" />
            <main className="about">
                <ul className="nav">
                    <li className="about">About</li>
                    <li className="skills">Skills</li>
                    <li className="projects">Projects</li>
                    <li><a className="resume" target="_blank" href="">Resume</a>
                    </li>
                </ul>
                <object data={resume} type="application/pdf" width="100%" height="100%">
      <p>Alternative text - include a link <a href={resume}>to the PDF!</a></p>
  </object>

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