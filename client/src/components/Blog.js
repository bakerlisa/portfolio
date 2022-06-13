import React, { useEffect, useState } from 'react';
import lisa from '../img/lisa_broadhead.jpeg'
import styled from '../css/Blog.module.scss'
import axios from 'axios';

const Blog = (props) => {
    const [cats, setCats] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5001/tags')
        .then(response => {
            setCats(response.data)
            console.log(cats)
        })
    }, [])

    return(
        <>
            <div className={styled.banner}>
                <div className={styled.txtwrp}>
                    <h1>Blog</h1>
                    <p className={styled.subtitle}>"I am still learning." <span className={styled.author}>- Michelangelo</span></p>
                </div>
            </div>
            
            <div className={styled.container}>
                <main>
                    <div className='mostRecten'>
                        {/* Most recent list of blog posts */}
                    </div>
                </main>

                <aside className='flex'>

                        <div className={styled.imgWrp}> 
                            <img src={lisa} alt="Lisa Broadhead - Software Engineer | Data Scientist Machine Learnering Engineer" />
                        </div>
                        <div className="txt">
                            <h3>Author: <span>Lisa Broadhead</span></h3>

                        </div>

                        <p className="paragraph">I'm always learning and therfore always failing (it sucks, but everything has a price). I began this project as a way to keep track of my htoughts and notes. I use to use Google Docs, which worked great, but it wasn't visuale or interactive enought for me.</p>
                        <div className='socialWrp'>

                        </div>

                        <ul className='categories'>
                            <h3>Categories</h3>
                            <ul>

                                        {
                                            cats.length > 0 ? "Yes" : "Not"
                                        }

                            </ul>
                            {/* Cageories from the database */}
                        </ul>

                </aside>
                
            </div>

        </>
    )
}

export default Blog;

// Document what you've learned
// Document your interviews : what you did wrong and what you're going to work on next
// What you do to prepare 