import React from 'react'
import './Testimonials.css'
// import helpinghand from '

function Testimonials({name,review,video_link,batch}) {


  return (
    
    <div className="s_w_o_men_s">
                    <div className="s_w_o_men_s_c">
                        <div className="s_w_o_men_s_c_left">
                            <p>{review}</p>
                            <div className="st_det">
                                <div className="s_det_desc">
                                    <span id='st_name' style={{fontWeight:"bold"}}>{name}</span>
                                    <span id='batch' style={{fontSize:"14px",color:"rgb(0,0,0,0.8)"}}>{batch}</span>
                                </div>
                            </div>
                        </div>
                        <div className="s_w_o_men_s_c_right" >
                        <iframe  src={video_link} frameBorder="0" className='iframe_mentee'   />
                        

                        </div>
                    </div>

                </div>
                
  )
}

export default Testimonials