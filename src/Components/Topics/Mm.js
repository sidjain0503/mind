import React, { useState } from 'react'
import '../FreeResources/FreeResources.css'
import Mm11 from './Mm11'
import Mm12 from './Mm12'
function Mm() {

        const [subjetct, setsubjetct] = useState()

        const showsubjects=(sub)=>{
            setsubjetct(sub)
        }

       

  return (
    <div className='freeresource-container'>
        
        <h1 style={{ fontFamily: "Manrope",fontSize:"30px",width:"75%",margin:"auto" }}>Find Below the Mind maps by choosing your class </h1>

        <div className='dpp-class'>
            <div className="subjects">
            <button onClick={()=>{showsubjects("class12")}}>Class 11 </button>
            </div>

            <div className="subjects">
            <button onClick={()=>showsubjects("class11")}>Class 12 </button>

            </div>
    </div>

    {subjetct === "class11"?<><Mm11 /></>:null }
    {subjetct === "class12"?<><Mm12/></>:null }




    </div>
  )
}

export default Mm