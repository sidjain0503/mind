import React, { useEffect } from 'react'
import './homepage.css'
import illImg from '../img/ill_img.png';
import Services from './subcomponents/Services';
import Testimonials from './Testimonials/Testimonials';
import FAQ from './FAQ/FAQ';
import Mentor from './Mentor/Mentor';
import Footer from '../Footer/Footer';
import Mentordetails from './data/Mentors.json'
import Servicedetails from './data/Services.json'
import Mentorshipdetails from './data/Mentorshipdetails.json'
import faq from './data/Faq.json'
import arrow from  './arrow-right.png'
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import Mentorshipdesc from './subcomponents/Mentorshipdesc';
import Carousel from '../Carousel/RCarousel';
import RCarousel from '../Carousel/RCarousel';
import MCarousel from '../Carousel/MCarousel';
import { useNavigate } from 'react-router-dom';
import user from './users.png'
import star from './stars.png'
import Typewriter from 'typewriter-effect';


function Homepage() {

    useEffect(()=>{
        document.querySelector('.header').style.position = 'sticky';
      
      })

    const navigate = useNavigate();

    return (
        <>
            <div className='homepage'>

                {/* home animation */}

                <div className="l_illus">
                    <div className="l_illus_left">
                        <h1>1-to-1 live <span>Personal  <br /> Mentorship</span> 
                        <div style={{display:"flex"}}> <span>By &nbsp;</span>
                            
                            <Typewriter 
                                options={{
                                    strings: ['IITians','AIIMSonians' ,'Medicos','Rankers'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            /></div>
                        </h1>
                        <p>Looking for a mentor who can guide you through your goals of getting into IIT' or AIIMS...???
Fortunately you Landed up at a right spot. Not only a mentor, we try our best efforts to provide you an elder brother or sister who have been into your shoes once, qualified JEE or AIIMS, got into dream colleges and fulfilled their goals. They help you personally on daily basis and put their best efforts to assist you at each steps of ladder of your goals.</p> <br />
                        <button className="btn_sp" id='h_ge' onClick={() => navigate("/courses")} > <span>Get Enrolled </span>  <span><img src={arrow} alt="" /></span> </button>
                    </div>
                    <div className="l_illus_right">
                        <img src={illImg} alt="not found" />
                    </div>
                </div>
                {/* home animation */}

                <div className="v_desc" >
                    
                
                    <iframe src="https://www.youtube.com/embed/Iaetkes7B2k?rel=0&amp;autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                    </iframe>

                    <div className="v_desc_t">
                        <div className="v_desc_t_left">
                            <h1>We Love Teaching New Way To <br /> Make You Understand!</h1>
                        </div>
                        <div className="v_desc_t_right">
                            <p>We are here to help the students who are preparing for JEE/NEET through our mentorship program. We believe that every student who is willing can make their way to IIT/AIIMS they just need proper guidance. Our mentors are going to share all the important techniques and study packs to study smartly that will maximise your output and boost your score in a very short interval of time.</p>
                        </div>
                    </div>
                </div>
                {/* website's video description */}

                {/* Things we take care for you  */}
                <div className="st_wtfy">
                    <h1>Something's We Take Care For You </h1><br /><br /><br />
                    <div className="st_wtfy_ct">
                        <div className="st_wtfy_ct_left">


                            {/* <Services image={} heading="Notes & Study Material" desc="Prescribe notes based on NCERT syllabus(Mentors will provide their own short notes if needed)"/> */}

                            {Servicedetails.slice(0, 3).map((sdetails, index) => {
                                return (
                                    <div>

                                        <Services
                                            heading={sdetails.heading}
                                            desc={sdetails.desc}
                                            image={sdetails.img}
                                        />
                                    </div>
                                );
                            })}

                        </div>
                        <div className="st_wtfy_ct_right">

                            {/* <Services image={pencil}/> */}
                            {Servicedetails.slice(3, 6).map((sdetails, index) => {
                                return (
                                    <div>

                                        <Services
                                            heading={sdetails.heading}
                                            desc={sdetails.desc}
                                            image={sdetails.img}
                                        />
                                    </div>
                                );
                            })}

                        </div>
                    </div>

                    {/* Things we take care for you  */}

                    {/* our reviews */}

                    <div className="o_reviews">
                        <div className="o_reviews_bx" id='o_rev_stmt'>
                            We Speak With <br /> Our Full Statistics
                        </div>
                        <div className="o_reviews_bx">
                            <h1>
                                <VisibilitySensor>
                                    {({ isVisible }) =>
                                        <div>{isVisible ? <CountUp end={2} /> : '0'}M+</div>
                                    }
                                </VisibilitySensor>
                            </h1>
                            <p> <img src={user} alt="not" style={{marginRight:"5px"}} />Total Views</p>

                        </div>
                        <div className="o_reviews_bx">
                            <h1>
                                <VisibilitySensor>
                                    {({ isVisible }) =>
                                        <div>{isVisible ? <CountUp end={20} decimals={0} /> : '0'}k+</div>
                                    }
                                </VisibilitySensor>
                            </h1>
                            <p> <img src={star} alt="not" style={{marginRight:"5px"}} />Subscribers</p>
                        </div>
                        <div className="o_reviews_bx">
                            <h1>
                                <VisibilitySensor>
                                    {({ isVisible }) =>
                                        <div>{isVisible ? <CountUp end={200} /> : '0'}+</div>
                                    }
                                </VisibilitySensor>
                            </h1>
                            <p> <img src={star} alt="not"  style={{marginRight:"5px"}}/>Mentors</p>

                        </div>
                        <div className="o_reviews_bx">
                            <h1>
                                <VisibilitySensor>
                                    {({ isVisible }) =>
                                        <div>{isVisible ? <CountUp end={7.5} decimals={1} /> : '0'}k+</div>
                                    }
                                </VisibilitySensor>
                            </h1>
                            <p> <img src={star} alt="not" /> Mentees Guided</p>

                        </div>
                    </div>
                    <br /><br /><br />
                    <br /><br /><br />
                    {/* our reviews */}

                    {/* how mentorship works   */}


                    <div className="H_men_w">
                        <div className="H_men_w_container">
                            <h1 >How Mentorship Works</h1>
                            <br /><br />
                            <div className="H_men_w_content">

                                {Mentorshipdetails.map((m_details, index) => {
                                    return (
                                        <div>

                                            <Mentorshipdesc
                                                heading={m_details.heading}
                                                desc={m_details.desc}
                                                image={m_details.img}
                                            />
                                            {/* {pdetail.sno}. I am  my hobby is {pdetail.hobby} */}
                                        </div>
                                    );
                                })}
                            </div>
                            <br /><br /><br />
                        </div>
                    </div>
                    {/* how mentorship works   */}


                    {/* Mentor details */}

                    <div className="m_y_mentors">
                        <h1>Meet Your Mentors</h1>
                        <p>We have the best team of mentors from IIT/AIIMS that will make you reach your dream college!</p>
                    </div>
                    <MCarousel carouselinput={"mentors"} />

                    {/* {Mentordetails.map((mdata)=>{
                                return <>
                                <Mentor name={mdata.name} img={mdata.img} desc={mdata.desc} quote={mdata.quote} />
                                </>
                              })}   */}

                    {/* Mentor details */}

                    {/* mentee testimonials */}
                    {window.innerHeight >= 900? <h1 style={{marginTop:"50px",marginBottom:"50px"}}>See What Our Mentees Say </h1>: <h1 style={{marginTop:"10px",marginBottom:"40px"}}>See what our mentees say </h1>}

                    <RCarousel carouselinput={"mentee_review"} />



                    {/* mentee testimonials */}

                    {/*  FAQ's*/}
                    <h1 style={{marginTop:"50px",marginBottom:"50px"}}>FAQ’s That Our Mentees Ask</h1>
                    <div className="faq_container">

                        {faq.map((data) => {
                            return <>
                                <FAQ question={data.question} answer={data.answer} />

                            </>
                        })}



                    </div>

                    <br /><br /><br />
                    {/*  FAQ's*/}

                    <Footer screen={"homepage"} />


                </div>

                {/* homepage */}


            </div>
        </>
    )
}

export default Homepage