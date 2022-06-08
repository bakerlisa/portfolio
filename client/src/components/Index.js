import React from 'react'
import Banner from '../views/Banner';

const Index = (proprs) =>{
    return(
        <>
            <Banner img="space7.jpeg"/>
            <main class="about">
                <div class="txt-wrp">
                    <h1>Lisa <span>Broadhead</span></h1>
                    <p>Into the Great Unkown!</p>
                </div>
                <ul class="nav">
                    <li class="about" onclick="tab('about')">About</li>
                    <li class="skills" onclick="tab('skills')">Skills</li>
                    <li class="projects" onclick="tab('projects')">Projects</li>
                    <li><a class="resume" target="_blank" href="pdf/Resume.pdf">Resume</a>
                    </li>
                </ul>

                <ul class="social-links">
                    <li><a href="https://github.com/lisabroadhead" target="_blank"><i class="fab fa-github-square"></i></a></li>
                    <li><a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                    <li><a href="" class="el" data-el1="lb.bradohead" data-el2="gmail"><i class="fas fa-envelope"></i></a></li>
                </ul>
                
            </main>
        </>
    )
} 

export default Index;