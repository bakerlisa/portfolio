import React from 'react'
import StyleBanner from '../css/StyleBanner.js';

const Banner = (props) => {
    return(
        
        <StyleBanner img={props.img}>
            <div className="txt-wrp">
                <h1 className="title">{props.title}</h1>
                <h4>{props.subtitle}</h4>
            </div>
        </StyleBanner>
    )
}

export default Banner;