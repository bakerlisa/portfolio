import React from 'react'

const Banner = (props) => {
    return(
        <div className="banner" style={`backgroundImage:url(${props.img})`}>
            <h1 className="title"></h1>
            
        </div>
    )
}

export default Banner;