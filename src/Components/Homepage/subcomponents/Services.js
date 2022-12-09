import React from 'react'

function Services({image,heading,desc}) {
    return (
        <div>
            <div className="st_wtfy_c">
                <img src={image} alt="not found" />
                <div className="st_wtfy_c_desc">
                    <h3>{heading}</h3>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Services