import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Buy.css'
import Pay from './PayNowModal/Pay';
// import { AmountContext } from '../../Context/AmountContext';
import planimg from './plan_page.png'
import Plans from '../Homepage/data/Plans.json'

function Buy({ }) {

  const navigate = useNavigate();

  useEffect(() => {

    if (window.plan) {
      
      navigate("/courses/buy")

    } else {
      navigate("/courses")
    }
  }, [])


  return (<>

    <div className='Buy_course'>
      {/* <h1>Lets make this your best investment</h1> */}
      <h1>Buy Courses For {window.plan} Mentoring</h1>
      <div className="plans">
        <div className="plans_left">
          <img src={planimg} />
        </div>
        <div className="plans_right">
          
          {Plans.map((plan)=>{
            return <>
             <div className="plan">
            <span>  {plan.amount}/<span>{plan.duration} </span> <br/> <span style={{position:"relative",top:"-15px",left:"10%",fontSize:"12px",color:"red"}}> <span style={{textDecoration:"line-through"}}>{plan.amount + Math.round(plan.amount*0.1)}</span> /- 10% off</span> </span>
            <Pay amount={plan.amount} plan_duration={plan.duration} subscription_days={plan.subscription_days}  />
          </div>
            </>
          })}

        </div>
      </div>
      <div className="buy_course_msg">
        <h1>What Ever You Choose We Are With You</h1>
        <p>
          Things have to change, to adapt, to embrace and invent new approaches and ideas. Stagnant
          water smells.
          Someone that doesn't adapt and improve goes extinct in this fast-changing world.
          So why not us? We embrace change and improvement. New plans, new approaches, new
          courses and mentors.
          New formats. But what will NOT change is our core philosophy. What will not change is
          that you, the student, will be at the center of it all. What will not change is our philosophy. We'll
          always be the MIND you trust and love.
        </p>
      </div>

    </div>
  </>
  )
}

export default Buy