import Rect from 'react'
import styled from '../css/Projects.module.scss'
import Nav from '../views/Nav';

const Projects = () =>{
    return(
        <>
            <Nav/>
            
            <div className={styled.projectbanner}>
                <div className={styled.txtwrp}>
                    <h1>Projects</h1>
                </div>
            </div>
        </>
    )
}

export default Projects;