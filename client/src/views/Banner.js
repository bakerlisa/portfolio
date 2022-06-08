import React from 'react'




const Banner = (props) => {
    return(
        
        <div className="banner" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/${props.img})`}} >
            <div className="txt-wrp">
                <h1 className="title">{props.title}</h1>
                <h4>{props.subtitle}</h4>
            </div>
            </div>

    )
}

export default Banner;