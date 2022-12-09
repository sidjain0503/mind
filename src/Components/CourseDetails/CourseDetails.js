import React, { useEffect } from 'react'
import RCarousel from '../Carousel/RCarousel'
import Testimonials from '../Homepage/Testimonials/Testimonials'
import './CourseDetails.css'
import Course from './Courses/Course'
import trustimg from "./Courses/img/Trustedby.png"

function CourseDetails() {
  useEffect(()=>{
    document.querySelector('.header').style.position = 'sticky';
  
  })
  return (
    <div className='course_details'>
            <h1>Choose A Plan That’s Right For Your Future</h1>   
            <div className="courses">
                <Course title="JEE/BITSAT & other Engineering Entrance" id='colored_course' plan_type={"Jee"}/>    
                <Course title="NEET & other Medical &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Entrance" id="colored_course"  plan_type={"Neet"}/>    
                <Course title="College Counseeling for Engineering & Medical" plan_type={"Counselling"}/>    
            </div>      

            <div className="Trustedby">
              <h1>Trusted by thousands of students.<img src={trustimg} alt="" /></h1>
              <p>We have given more than 5k students a platform to make it into their dream institutions. Even in our infancy we have ensured what many can’t do in years – concrete results. And in doing that we have ensured that our students trust us – because we trust them. A mentorship is also a partnership, and as partners in this quest for achieving our dreams trust is the bedrock, the foundation.</p>
            </div>

            <RCarousel/>
    </div>
  )
}

export default CourseDetails