import React from 'react'




const Banner = (props) => {
    return(
        
        <div className="banner" style={{backgroundImage: `url(http://localhost:3000/client/src//img/${props.img})`}} >
            <div className="txt-wrp">
                <h1 className="title">{props.title}</h1>
                <h4>{props.subtitle}</h4>
            </div>
            </div>

    )
}

export default Banner;