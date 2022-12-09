import React from 'react'
import './Mentor.css'
import quotes from './img/quote.png'

function Mentor({name,img,desc,quote}) {
  return (
    <div className="m_y_mentors_desc">

                            <div className="m_y_mentors_d">
                            <img src={quotes} id="q_img"/>
                                <p>{quote}</p>
                               <div>
                                <div id='mentor_name'>-{name}</div>
                                <span>{desc}</span>
                                </div>
                            </div>
                            <img src={img} alt="not found" />
      </div>
  )
}

export default Mentor