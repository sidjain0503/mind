import React, { useRef, useState } from 'react'
import '../FreeResources/FreeResources.css'
import chemistry from '../Homepage/data/mindmaps/chemistry.json'
import physics from '../Homepage/data/mindmaps/physics.json'
import maths from '../Homepage/data/mindmaps/maths.json'

import Embedpdf from './Embedpdf'

function Mm12() {
    const [subject, setsubject] = useState('')
    const handlesubject = (sub) => {
        setsubject(sub)
        setid("pdfs")

        //   console.log(physics11);
    }

    const [chem, setchem] = useState('')
    const handlechem = (sub) => {
        setchem(sub)
        setid("pdfs")

        
        //   console.log(physics11);
    }

    const [id, setid] = useState("")

   const scroll =()=>{
    console.log("pdfs")
    const titleElement = document.getElementById('pdfs')
    console.log(id)
    console.log(titleElement)
    titleElement.scrollIntoView({ behavior: 'smooth' })
   }


  

    return (
        < div className=''>

            <h1 style={{ fontFamily: "Manrope", fontSize: "30px", width: "75%", margin: "30px auto" }}>Find Below the Dpps of class 11 </h1>
           
            <div className='subs-container'>
                <div className="subjects">
                    <span>Physics</span>
                    <p>Have a quick recap of your studied topics by mindmaps provided by MIND</p>
                    <button onClick={() => {handlesubject("physics"); scroll();}}>show preview</button>
                </div>
                <div className="subjects">
                    <span>Chemistry</span>
                    <p>Have a quick recap of your studied topics by mindmaps provided by MIND</p>
                    <button onClick={() =>{handlesubject("chemistry"); scroll(); }}>show preview</button>
                </div>
                <div className="subjects">
                    <span>Mathematics</span>
                    <p>Have a quick recap of your studied topics by mindmaps provided by MIND</p>
                    <button onClick={() => {handlesubject("mathematics"); scroll();} }>show preview</button>
                </div>
            </div>


            {subject === "chemistry" ?
                <>
                    <h1 style={{ fontFamily: "Manrope", margin: "auto", width: "75%", fontSize: "34px", borderBottom: "1px solid black", marginTop: "30px" }} id={id} >Chemistry Mind maps</h1>
                    <div className="dpp-pdfs">

                        {chemistry.map((maths) => {
                            return <>


                                <Embedpdf pyqembed={maths.file_link} pyqname={maths.file_name.charAt(0).toUpperCase() + maths.file_name.replace("-", " ").replace("-", " ").replace("-", " ").replace("_", " ").replace(".pdf","").slice(1)} />

                            </>

                        })}
                    </div>

                </> : null}
          

            {subject === "physics" ?
                <>
                    <h1 style={{ fontFamily: "Manrope", margin: "auto", width: "75%", fontSize: "34px", borderBottom: "1px solid black", marginTop: "30px" }} id={id} >Physics Mind maps</h1>
                    <div className="dpp-pdfs">

                        {physics.map((maths) => {
                            return <>


                                <Embedpdf pyqembed={maths.file_link} pyqname={maths.file_name.charAt(0).toUpperCase() + maths.file_name.replace("-", " ").replace("-", " ").replace("-", " ").replace("_", " ").slice(1)} />

                            </>

                        })}
                    </div>

                </> : null}

            {subject === "mathematics" ?
                <>
                    <h1 style={{ fontFamily: "Manrope", margin: "auto", width: "75%", fontSize: "34px", borderBottom: "1px solid black", marginTop: "30px" }} id={id}>Mathematics mind maps</h1>
                    <div className="dpp-pdfs">

                    {maths.map((maths) => {
                        return <>


                            <Embedpdf pyqembed={maths.file_link} pyqname={maths.file_name.charAt(0).toUpperCase() + maths.file_name.replace("-", " ").replace("-", " ").replace("-", " ").replace("_", " ").replace(".pdf","").slice(1)} />

                        </>

                    })}
                    </div>

                </> : null}

           




        </div>

    )
}

export default Mm12



