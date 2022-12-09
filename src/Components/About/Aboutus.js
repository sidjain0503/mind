import React, { useEffect, useState } from 'react'
import './About.css'
import about_main from './img/about_main.png'
import our_message from './img/our_message.png'
import mentor1 from './img/mentor1.png'
import Mentor from './Mentor/Mentor'
import Value from './Value/Value'
import Contactformdetails from './data/Contact Information (Responses) - Form responses 1.json'
import Footer from '../Footer/Footer'


function Aboutus() {

  const [expand,setExpand] = useState(false);
  useEffect(()=>{
    document.querySelector('.header').style.position = 'sticky';
  
  })

  return (
    <div>

    <div >
        {/* about main  */}

        

        <div className="about_main">
            <div>
            <h2 style={{fontSize:"25px",marginBottom:"50px"}}>"Mentoring is a brain to pick, an ear to listen, and a push in the right direction" - Jonh C. Crosby</h2>

            <p>You make commitments to start things, but without consistency, you never reach the finishing line; though you may be on the last step, but you quit. We at MIND never let you quit and help you at every step to maintain consistency to achieve your goal and get to your dream college.</p>
            </div>
            <img src={about_main} alt="not found" />
        </div>

        {/* something about us  */}
        <div className="s_about_us">
            <h1>Something About Us</h1>
            <p>Flooded with resources? Enrolled in top coaching institutes? Tried out all possible strategies? Still unable to ace competitive exams? Then the only thing you lack is MIND (Mentorship in new direction).IIT-JEE, NEET, AIIMS, etc., are not just examinations. Instead, they are roads to glory, and to achieve what only the top 1% can get; one needs something more than just hard work and dedication, i.e., MIND (Mentorship in new direction).
            MIND is an IIT-BHU-based mentorship start-up whose goal is to help students who aspire to become IITians or Doctors by providing them with the proper guidance 
            and study plans.We, at MIND, have a well-established team of over 200 mentors who themselves are from top-notch IITs, AIIMS, and NEET colleges and are willing to spare their precious time to help all the students who crave to get into these institutes and put the right step in the direction of a great and prosperous future.
            At MIND, each aspirant is assigned a personal mentor who, as an elder brother/sister,will be helping the student at every stage of their preparation. The mentors even provide them with daily tasks and resources and, most importantly, share their experiences of cracking these entrance exams.
            We are proud to announce that we have mentored over 5k students to get into their dream institutions through our mentorship program and are looking forward to 
            helping more and more students daily.</p>

            

        </div>

        {/* Founder */}
        <div className="founder">
        <div className="founder_left">
            <h3 id="f_name" style={{fontWeight:"800"}}>TUSHAR</h3>
            <div style={{fontSize:"18px"}}>FOUNDER AND CEO</div>
            <p>Coming from JNV School, Fatehpur, our founder, is one of the super 30 students. As his preparations to crack one of the toughest exams began, he realized that it is imperative to have proper guidance during jee preparations. As our founder belongs to a lower-middle-class family, he faced lots of struggles to get adequate guidance which made him understand how lack of direction leads to unachieved aims and demotivation. So he started Edtech, which ensures every aspirant can get proper guidance through a team of experts comprising of IITians as well as NEET and AIIMS students at a very minimal cost. His vision is to help every aspirant get into their dream college.Hence, MIND ensures that lack of money should not be the reason for lack of guidance.
            </p>

            <h3>A message for all the aspirants from our founder’s desk:</h3>
            <p>Hello guys! Look we all know how frightening it is to compete with a huge mass and come out victorious… but the most important part is to have determination and willpower… at MIND your goal is our dream. So, we are there to guide you, nurture you and help you to achieve your goals and live your dreams. We all will face difficulties together and work hard to achieve our dreams. So let’s connect and start from today, the road to your success.</p>
            </div>
        <div className="founder_right">
          <img src={Contactformdetails[0].founder} alt="not found" />
        </div>
        </div>
       
        {/* mentors */}
        <div className="our_mentors">
            <div className="o_mentors">
              <div className="o_mentors_team">
                <h1>120+</h1>
                <div>
                  <h3>Team of Best Minds</h3>
                  <span>We identify opportunities you uniquely own and try to make them even more <br /> strong so that you can be ready getting close to your dream.</span>
                </div>
              </div>
              <h1>Our Mentor’s</h1>
            </div>

            <div className="o_mentor_p">
              
            {window.innerWidth <1500 ?<>
            
              {expand == false ?
            <>
            {Contactformdetails.slice(1,13).map((cdetails) => {
                            return (
                                <div>   
                                    <Mentor image={cdetails.mentor_img} mentor_name={cdetails.Name} college={cdetails.college} />
                                </div>
                            );
                })}

                  <div id="img_expand" onClick={()=>setExpand(true)}>See more</div>
                </>
                :
                <>
                {Contactformdetails.slice(1).map((cdetails) => {
                  return (
                      <div>   
                          <Mentor image={cdetails.mentor_img} mentor_name={cdetails.Name} college={cdetails.college} />
                      </div>
                  );
      })}
      </>
                
                }
            </>:<>
            
            {Contactformdetails.map((cdetails) => {
                            return (
                                <div>   
                                    <Mentor image={cdetails.mentor_img} mentor_name={cdetails.Name} college={cdetails.college} />
                                </div>
                            );
                })}
            </>}
              
                
            </div>
        </div>
            
         {/*Our values*/}
         <div className="our_values">
          <h1>For Us, Our Value Are More Than Just <br /> Words.  They Are Ways Of Living, Creating <br /> And Doing.</h1>
            <div className="values">
                  <div className='value_head'>
                      <h3>Our Family Values</h3>
                  </div>
                  <hr />  
                  <Value title="Trust" number={1} values={"Building trust between a mentor and student is the most important thing when it comes to our programmes. We value your time and our integrity. Trust between the mentors, with the management and most important of all the trust between the mentor and the student is what our programmes are and will continue to be based on."}/>
                  <Value title="Love What We Do" number={2} values={"During the time that other students are partying, playing video games, going on trips, here's a bunch of students that want to improve the future of hundreds of thousands of students. And the only reason for that is - love for what we do. Passion. We toil for hours because in the end this is our calling, this is the reason we wake up in the morning and the only thing that makes us genuinely happy."} />
                  <Value title="Open Communication" number={3} values={"This world revolves around interactions. Between friends, students, mentors, it all comes down to how we communicate. Openly communicating our thoughts and ideas is what made this start-up happen, and it will remain the guiding principle of everything we do. The only way to make a change happen is to communicate without fear, and with trust."}/>
                  <Value title="Honesty" number={4} values={"We have gone through the journey ourselves. We know how other institutes and programmes are designed to rip you off, to scam you, so that they can make a quick buck. But not us. We are transparent and honest about everything that goes on within us. No veils on our working, no dishonesty in our words."}/>
                  <div className='value_head'></div>
                  
            </div>

          
         </div>

         <div className="our_message">
              <h1>We Believe Supporting Personal Development Creates A Positive Culture And Environment For Everyone.</h1>
              <img src={our_message} alt="not found" />
            </div>
            
    </div>

    </div>
  )
}

export default Aboutus