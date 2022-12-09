import React, { useRef, useState } from 'react'
import '../FreeResources/FreeResources.css'
import physics11 from '../Homepage/data/dpps/physics11.json'
import maths11 from '../Homepage/data/dpps/maths11.json'
import physical11 from '../Homepage/data/dpps/physical11.json'
import organic11 from '../Homepage/data/dpps/organic11.json'
import inorganic11 from '../Homepage/data/dpps/inorganic11.json'

import Embedpdf from './Embedpdf'

function Dpp11() {
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
        <div className='freeresource-container'>

            <h1 style={{ fontFamily: "Manrope", fontSize: "30px", width: "75%", margin: "auto" }}>Find Below the Dpps of class 11 </h1>
            <p style={{ fontFamily: "Manrope", fontSize: "15px", width: "75%", margin: "auto" }}>
                We at MIND put the student first. Their needs, their resources take priority over money for us. It
                is their success that is the real profit for us. Their success is our success.
                As such, anyone can download notes, sample papers and other resources free-of-cost. It's free
                as in 'free beer' and free as in 'freedom'. There's nothing more tragic than gatekeeping
                knowledge.
                This is not all though; our YouTube channel provides video format lessons. From the comfort of
                your home, at your pace. It's your journey, you decide how fast to go through it
            </p>
            <div className='subs-container'>
                <div className="subjects">
                    <span>Physics</span>
                    <p>Give momentum to your Physicspreparationwith our Daily Practice papers.</p>
                    <button onClick={() => {handlesubject("physics"); scroll();}}>show preview</button>
                </div>
                <div className="subjects">
                    <span>Chemistry</span>
                    <p>Chemistry will come to you organically, with our Daily Practice papers</p>
                    <button onClick={() =>{handlesubject("chemistry"); scroll(); }}>show preview</button>
                </div>
                <div className="subjects">
                    <span>Mathematics</span>
                    <p>Add-on to your Maths preparation, with our Daily Practice papers.</p>
                    <button onClick={() => {handlesubject("mathematics"); scroll();} }>show preview</button>
                </div>
            </div>

            {subject === "chemistry" ? <>
                <div className="topics-container" id={id}>
                    <div className="subs" onClick={() => { handlechem("organic"); scroll() }}>Organic chemistry </div>
                    <div className="subs" onClick={() => {handlechem("physical"); scroll()}}>Physical chemistry </div>
                    <div className="subs" onClick={() => {handlechem("inorganic"); scroll()}}>Inorganic chemistry </div>

                </div>

                {chem === "physical" ?
                <>
                    <h1 style={{ fontFamily: "Manrope", margin: "auto", width: "75%", fontSize: "34px", borderBottom: "1px solid black", marginTop: "30px" }} id={id}>Physical Chemistry Dpp</h1>

                    <div className="dpp-pdfs">

                        {physical11.map((maths) => {
                            return <>


                                <Embedpdf pyqembed={maths.file_link} pyqname={maths.file_name.charAt(0).toUpperCase() + maths.file_name.replace("-", " ").replace("-", " ").replace("-", " ").replace("_", " ").slice(1, -4)} />

                            </>

                        })}

                    </div>
                </> : null} {chem === "organic" ?
                    <>
                    <h1 style={{ fontFamily: "Manrope", margin: "auto", width: "75%", fontSize: "34px", borderBottom: "1px solid black", marginTop: "30px" }}  id={id} >Organic Chemistry Dpp</h1>

                    <div className="dpp-pdfs">


                        {organic11.map((maths) => {
                            return <>


                                <Embedpdf pyqembed={maths.file_link} pyqname={maths.file_name.charAt(0).toUpperCase() + maths.file_name.replace("-", " ").replace("-", " ").replace("-", " ").replace("_", " ").slice(1, -4)} />

                            </>

                        })}
                    </div>

                    </> : null} {chem === "inorganic" ?
                        <>
                    <h1 style={{ fontFamily: "Manrope", margin: "auto", width: "75%", fontSize: "34px", borderBottom: "1px solid black", marginTop: "30px" }}  id={id} >Inorganic Chemistry Dpp</h1>

                        <div className="dpp-pdfs">


                            {inorganic11.map((maths) => {
                                return <>


                                    <Embedpdf pyqembed={maths.file_link} pyqname={maths.file_name.charAt(0).toUpperCase() + maths.file_name.replace("-", " ").replace("-", " ").replace("-", " ").replace("_", " ").slice(1, -4)} />

                                </>

                            })}
                        </div>

                        </> : null}


            </> : null}

            {subject === "physics" ?
                <>
                    <h1 style={{ fontFamily: "Manrope", margin: "auto", width: "75%", fontSize: "34px", borderBottom: "1px solid black", marginTop: "30px" }} id={id} >Physics Dpp</h1>
                    <div className="dpp-pdfs">

                        {physics11.map((maths) => {
                            return <>


                                <Embedpdf pyqembed={maths.file_link} pyqname={maths.file_name.charAt(0).toUpperCase() + maths.file_name.replace("-", " ").replace("-", " ").replace("-", " ").replace("_", " ").slice(1, -4)} />

                            </>

                        })}
                    </div>

                </> : null}

            {subject === "mathematics" ?
                <>
                    <h1 style={{ fontFamily: "Manrope", margin: "auto", width: "75%", fontSize: "34px", borderBottom: "1px solid black", marginTop: "30px" }} id={id}>Mathematics Dpp</h1>
                    <div className="dpp-pdfs">

                    {maths11.map((maths) => {
                        return <>


                            <Embedpdf pyqembed={maths.file_link} pyqname={maths.file_name.charAt(0).toUpperCase() + maths.file_name.replace("-", " ").replace("-", " ").replace("-", " ").replace("_", " ").slice(1, -4)} />

                        </>

                    })}
                    </div>

                </> : null}

           




        </div>

    )
}

export default Dpp11



