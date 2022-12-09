import React, { useEffect } from 'react'
import errorimg from './errorimage.jpg'
import { useNavigate } from 'react-router-dom';


function Nopage() {
    useEffect(()=>{
        document.querySelector('.socials').style.display = "none" 
    },[])
    const navigate = useNavigate();
  return (
    <div style={{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      <img src={errorimg} style={{width:"85vh",height:"85vh"}}/>
      <h1 onClick={()=>navigate('/')} style={{cursor:"pointer"}}>Back to homepage</h1>
    </div>
  )
}

export default Nopage