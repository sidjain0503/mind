import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Footer.css'
import footer from './footer/footer-bg.png'
import instagram from './footer/img/instagram.png'
import telegram from './footer/img/telegram.png'
import whatsapp from './footer/img/whatsapp.png'
import youtube from './footer/img/youtube.png'
import gmail from './footer/img/gmail.png'
import arrow from './footer/img/arrow-right (1).png'
import logo from './MIND-logo.png'

function Footer({screen}) {

   

    const navigate = useNavigate();
    const navigateto=(path)=>{
        console.log("clicked")
        navigate(path)
        window.scrollTo({top: 0, behavior: 'smooth'});

    }
    const scrolltotop = ()=>{
      
    }
  return (
    <>

    <div className='footer' style={{position:"relative",top:"-10%"}}>
        <img src={footer} alt="" />
        <div className="footer_msg">
            <h2>If You Cannot See Where You Are Going, Ask Someone Who Has <br /> Been There Before.</h2>
            <button id="enroll" onClick={()=>navigateto("/courses")}><span>Enroll now </span><img src={arrow} alt="" /></button>
            <button id='talk'><a href="tel:+919125999708" style={{color:"white"}} >Talk with your Mentor</a></button>

        </div>
     {screen =="homepage"?
        <div id='footer-back' style={{background:"black",height:"150px",width:"100%",zIndex:"-1",position:"relative",top:"-90%"}}></div>
     :
     <div id='footerback' style={{background:"black",height:"250px",width:"100%",zIndex:"-1",position:"relative",top:"-90%"}}></div>
     
     }
        
   </div>
        <div className='footer_box' id={screen} >
            <div className="footer_top">
                <div className="f_smicon">
                        <img src={logo} alt="" style={{width:"100px",height:'100px'}}/>
                        <a href="tel:+919125999708" style={{color:"white",display:"block"}}> Ph: +919125999708 </a>
                        <a href="mailto:support@boosturmind.com" style={{color:"white",display:"block",width:"max-content"}}>
                      Email: support@boosturmind.com

                        </a> 

                </div>
                <div className="footer_mid">
               
               <div className="f_company">


                <div style={{display:"flex"}} >
                    <span onClick={()=>{navigateto("/courses"); scrolltotop(); }}>Plans</span>
                    <span onClick={()=>{navigateto("/contact"); scrolltotop();}}>Contact</span>
                    <span onClick={()=>{navigateto("/privacyPolicy"); scrolltotop();}}>Privacy & Refund Policy</span>
                    <span onClick={()=>{navigateto("/terms&conditions"); scrolltotop();}}>Terms & Conditions</span>
                    
                </div>
                </div>



                </div>

                <div className="f_lconn">
                    <h3>Join Our Program</h3>
                    <div >
                       <div className="f_input" id="f_mail">
                       <input type="text" placeholder='Your email address' name="" id='subs_mail' />
                        <label for="subs_mail" >Subscribe</label>
                       </div>
                        <div id='subs_msg'>* Will send you weekly updates for you better understanding and process.</div>
                        {/* <img src={send_icon} alt="nothing" /> */}
                    </div>
                </div>



            </div>

            <div className="footer_btm">
                <h2>Copyright &copy; 2022 All Rights Reserved. Designed and developed by urbandeck.in  </h2>
            </div>

        </div>
   

    </>
  )
}

export default Footer