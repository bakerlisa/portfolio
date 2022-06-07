import React from 'react';
import lisa from '../img/lisa_broadhead.jpeg'

const Blog = (props) => {
    return(
        <>
            <div class="banner">
            <h1>Blog</h1>
            <p className="subtitle">"I am still learning." <span className='author'>- Michelangelo</span></p>
            </div>
            
            <div className="container">
                <main>
                    <div className='mostRecten'>
                        {/* Most recent list of blog posts */}
                    </div>
                </main>

                <aside>
                    <img src={lisa} alt="Lisa Broadhead - Software Engineer | Data Scientist Machine Learnering Engineer" />
                    
                    <p className="paragraph">I'm always learning and therfore always failing (it sucks, but everything has a price). I began this project as a way to keep track of my htoughts and notes. I use to use Google Docs, which worked great, but it wasn't visuale or interactive enought for me.</p>
                    <div className='socialWrp'>

                    </div>

                    <ul className='categories'>
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