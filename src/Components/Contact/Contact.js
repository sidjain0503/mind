import React, { useEffect } from 'react'
import './Contact.css'
import iitbhu from './iitbhu.png'
import call from './call.png'
import address from './address.png'
import msg from './msg.png'
// import Map from './Map/Map.js'
import { addDoc, collection} from "firebase/firestore"; 
import { toast } from 'react-toastify'
import { db } from '../../firebase'
import { useState } from 'react'

function Contact() {
    useEffect(()=>{
        document.querySelector('.header').style.position = 'sticky';
      
      })


      const [contactdata, setcontactdata] = useState()

      const handleChange = (e)=>{
          const name = e.target.name;
          const value = e.target.value;
          setcontactdata({...contactdata,[name]:value})
      }
  
      const contact=async(e)=>{
          e.preventDefault();
          const docRef = await addDoc(collection(db, "WebsiteContact"), {
              ...contactdata
             });
  
             setcontactdata()
             toast.success("Data recorder successfully , Thanks for connecting! ")
      }

  return (
    <div className='Contact'>
        {/* Heading  */}
                
        <h1>Love To Hear From You, Get In Touch 😍</h1>

        {/* form  */}

        <div className="Contact-form">
            <form onSubmit={contact}>
                <div className="input-feild">

                    <div className="input">
                    <label htmlFor="name">Hey, my name is </label>
                    <input type="text" id='name' placeholder='your name' name='name' onChange={handleChange} />
                    </div>
                    <div className="input">
                    <label htmlFor="email">Your email</label>
                    <input type="text" id='email' placeholder='your email' name='email' onChange={handleChange}/>
                    </div>
                    <div className="input">
                    <label htmlFor="m_type">You want personal mentor for</label>
                    <select id="m_type"  name='preparing_for' onChange={handleChange} >
                        <option value="Jee">Jee</option>
                        <option value="neet">Neet</option>
                    </select>
                       
                    </div>
                    
                </div>
                <div className="input-area">
                    <label htmlFor="about">Let us know about us little bit!</label>
                    <textarea name="message" onChange={handleChange} id="about" cols="50" rows="10" placeholder='Write something that makes you special :)'></textarea>
                </div>
                    <button type='submit'>
                    We are here with you ↗
                    </button>
            </form>
        </div>

       <div className="map">

                <a href="https://goo.gl/maps/T9eJNus23eeRgGvX9" target="_blank" rel="noopener noreferrer">
                    <img src={iitbhu} alt="" />
                </a>

                <div className="contacts">
                    <h3>Chat to our friendly team</h3>
                    <div>
                        <div>
                            <img src={call} alt="" />
                            <img src={msg} alt="" />
                        </div>
                            <strong>phone No. </strong><span>+91 9125999708</span><br />
                            <strong>Email </strong><span>support@boosturmind.com</span>
                        </div>
                    <div>
                        <div><img src={address} alt="" /></div>
                        <strong>Address:</strong><span> IIT BHU, Varanasi , UP 221005</span>
                    </div>
                </div>

       </div>

    </div>
  )
}

export default Contact