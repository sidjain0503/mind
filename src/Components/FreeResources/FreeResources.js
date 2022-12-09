import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './FreeResources.css'
import down from '../Header/Header/img/close.png'

function FreeResources({ style, resref, device }) {


    const [classes, setclass] = useState(false);
    const showclass = () => {
        setclass(!classes)
    }

    const navigate = useNavigate();
    // const [,setStyle] = useState("");

    // const hide=()=>{
    // setStyle("hide")
    // }

    const navigateto = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <>

            {device === "desktop" ? <>
                <div className={'freeResources ' + style} ref={resref}>

                    <div className="classes">
                        <div className="class11">
                            <h1 style={{ fontWeight: "bold" }}> JEE MAINS AND ADVANCE</h1>
                            <h1 onClick={() => navigateto("/freeresources/jee/notes")}>  NOTES </h1>
                            <h1 onClick={showclass} style={{ display: "flex" }}>
                                <span> DPP</span>{classes == true ? <img src={down} alt="" style={{ width: "20px" }} /> : null}</h1>
                            {classes == true ? <>
                                <span onClick={() => navigateto("/freeresources/jee/dpp/class11")}>class11</span>
                                <span onClick={() => navigateto("/freeresources/jee/dpp/class12")}>class 12</span></> : null}
                            <h1 onClick={()=>navigate("/freeresources/Jee/mindmaps")}>MIND MAPS</h1>
                            <h1 onClick={() => navigateto("/freeresources/jee/pyq")} > PREVIOUS YEAR QUESTIONS </h1>
                        </div>
                        <div className="class12">
                            <h1 style={{ fontWeight: "bold" }}>NEET (COMING SOON*)</h1>
                            <h1 onClick={() => navigateto("/freeresources/jee/notes")}>  NOTES </h1>
                            <h1 > DPP </h1>
                            <h1>MIND MAPS<br />(Coming soon *)</h1>
                            <h1 onClick={() => navigateto("/freeresources/jee/pyq")} > PREVIOUS YEAR QUESTIONS </h1>
                        </div>

                    </div>
                </div>
            </> : null}


        </>
    )

}

export default FreeResources


