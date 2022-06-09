import React from 'react'
import bkg1 from '../img/space7.jpeg'

const Banner = (props) => {
    return(
        
        <div className="banner" style={{backgroundImage: `url(${bkg1})`}} >
            <div className="txt-wrp">
                <h1 className="title">{props.title}</h1>
                <h4>{props.subtitle}</h4>
            </div>
            </div>

    )
}

export default Banner;