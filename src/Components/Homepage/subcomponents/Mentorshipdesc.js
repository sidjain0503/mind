import React from 'react'

function Mentorshipdesc({image,heading,desc}) {
  return (
    <div className="H_men_w_desc">
    <img src={image} alt="Not found" />
    <div style={{textAlign:"left"}}>
    <span>{heading}</span>
    <p>{desc}</p>
    </div>
    </div>
  )
}

export default Mentorshipdesc