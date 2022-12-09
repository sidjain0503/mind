import React, { useState } from 'react'
import './FAQ.css'
import maximise from './img/maximize.png'
import minimize from './img/minimize.png'



function FAQ({question,answer}) {





    const [style , setStyle] = useState("hide");
    const [style1 , setStyle1] = useState("");
    const [style2 , setStyle2] = useState("hide");



    const showAns =()=>{
            setStyle("show")
            setStyle1("hide")
            setStyle2("show")
    }

    const hideAns =()=>{
        setStyle("hide")
        setStyle1("show")
        setStyle2("hide")

    }
    

  return (
    <>
    <div className='faq'>
        <div className="faq_content">
        <h2>{question}</h2>
        <p className={style} >{answer}  </p>
        </div>
        <div className="faq_btn">
            <img src={maximise} alt="" onClick={showAns}  className={style1}/>
            <img src={minimize} alt="" onClick={hideAns} className={style2} />
        </div>
        
        {/* <h2>{question}</h2>         */}
        {/* <p>{answer}</p> */}
    </div>
    
    </>
  )
}

export default FAQ