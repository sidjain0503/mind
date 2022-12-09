import React from 'react'
import './Value.css'

function Value({title,number,values}) {
  return (
        <div className="value_head">
            <span>{title}<span>(Value No.{number})</span></span>
            <p>{values}</p>
        </div>
  )
}

export default Value