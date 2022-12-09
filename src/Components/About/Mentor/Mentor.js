import React from 'react'
import './Mentor.css'

function Mentor({image,mentor_name,college}) {
  return (
    <div className='Mentor' style={{paddingBottom:"15px"}}>
        <img src={image} alt="" />
        <span style={{fontWeight:"bold"}}>{mentor_name}</span>
        <span >{college}</span>
    </div>
  )
}

export default Mentor