import React from 'react'
import { useState } from 'react'
import previousyearquestions from '../Homepage/data/pyquestions.json'
import Embedpdf from './Embedpdf'
import '../FreeResources/FreeResources.css'

function Pyq() {
    return (
        <div className='topics freeresource-container'>
            <div className="topics-top">

            </div>
            <h1 style={{ fontFamily: "Manrope", fontSize: "30px", width: "75%", margin: "auto" }}>Find Below the PDF of Previous Year Questions </h1>
            <p style={{ fontFamily: "Manrope", fontSize: "15px", width: "75%", margin: "auto" }}>
                We at MIND put the student first. Their needs, their resources take priority over money for us. It
                is their success that is the real profit for us. Their success is our success.
                As such, anyone can download notes, sample papers and other resources free-of-cost. It's free
                as in 'free beer' and free as in 'freedom'. There's nothing more tragic than gatekeeping
                knowledge.
                This is not all though; our YouTube channel provides video format lessons. From the comfort of
                your home, at your pace. It's your journey, you decide how fast to go through it
            </p>
            <h2 class="heading">Past Question Papers [JEE (Advanced)]</h2>

            <div  className='jee-advance-container' style={{display:"flex",flexWrap:"wrap",width:"75%",margin:"auto"}}>

                <div>
                    <h3 class="heading-7">2007</h3>
                    <div class="div-block-7">
                        <div class="paper1">
                            <a href="https://jeeadv.ac.in/past_qps/2007_1.pdf" target="_blank" class="button-2 w-button">2007 Paper 1</a>
                        </div>
                        <div class="paper2">
                            <a href="https://jeeadv.ac.in/past_qps/2007_2.pdf" target="_blank" class="button-2 w-button">2007 Paper 2</a>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="heading-7">2008</h3>
                    <div class="div-block-7">
                        <div class="paper1">
                            <a href="https://jeeadv.ac.in/past_qps/2008_1.pdf" target="_blank" class="button-2 w-button">2008 Paper 1</a>
                        </div>
                        <div class="paper2">
                            <a href="https://jeeadv.ac.in/past_qps/2008_2.pdf" target="_blank" class="button-2 w-button">2008 Paper 2</a>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="heading-7">2009</h3>
                    <div class="div-block-7">
                        <div class="paper1">
                            <a href="https://jeeadv.ac.in/past_qps/2009_1.pdf" target="_blank" class="button-2 w-button">2009 Paper 1</a>
                        </div>
                        <div class="paper2">
                            <a href="https://jeeadv.ac.in/past_qps/2009_2.pdf" target="_blank" class="button-2 w-button">2009 Paper 2</a>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="heading-7">2010</h3>
                    <div class="div-block-7">
                        <div class="paper1">
                            <a href="https://jeeadv.ac.in/past_qps/2010_1.pdf" target="_blank" class="button-2 w-button">2010 Paper 1</a>
                        </div>
                        <div class="paper2">
                            <a href="https://jeeadv.ac.in/past_qps/2010_2.pdf" target="_blank" class="button-2 w-button">2010 Paper 2</a>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="heading-7">2011</h3>
                    <div class="div-block-7">
                        <div class="paper1">
                            <a href="https://jeeadv.ac.in/past_qps/2011_1.pdf" target="_blank" class="button-2 w-button">2011 Paper 1</a>
                        </div>
                        <div class="paper2">
                            <a href="https://jeeadv.ac.in/past_qps/2011_2.pdf" target="_blank" class="button-2 w-button">2011 Paper 2</a>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="heading-7">2012</h3>
                    <div class="div-block-7">
                        <div class="paper1">
                            <a href="https://jeeadv.ac.in/past_qps/2012_1.pdf" target="_blank" class="button-2 w-button">2012 Paper 1</a>
                        </div>
                        <div class="paper2">
                            <a href="https://jeeadv.ac.in/past_qps/2012_2.pdf" target="_blank" class="button-2 w-button">2012 Paper 2</a>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="heading-7">2013</h3>
                    <div class="div-block-7">
                        <div class="paper1">
                            <a href="https://jeeadv.ac.in/past_qps/2013_1.pdf" target="_blank" class="button-2 w-button">2013 Paper 1</a>
                        </div>
                        <div class="paper2">
                            <a href="https://jeeadv.ac.in/past_qps/2013_2.pdf" target="_blank" class="button-2 w-button">2013 Paper 2</a>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="heading-7">2014</h3>
                    <div class="div-block-7">
                        <div class="paper1">
                            <a href="https://jeeadv.ac.in/past_qps/2014_1.pdf" target="_blank" class="button-2 w-button">2014 Paper 1</a>
                        </div>
                        <div class="paper2">
                            <a href="https://jeeadv.ac.in/past_qps/2014_2.pdf" target="_blank" class="button-2 w-button">2014 Paper 2</a>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="heading-7">2015</h3>
                    <div class="div-block-7">
                        <div class="paper1">
                            <a href="https://jeeadv.ac.in/past_qps/2015_1.pdf" target="_blank" class="button-2 w-button">2015 Paper 1</a>
                        </div>
                        <div class="paper2">
                            <a href="https://jeeadv.ac.in/past_qps/2015_2.pdf" target="_blank" class="button-2 w-button">2015 Paper 2</a>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="heading-7">2016</h3>
                    <div class="div-block-7">
                        <div class="paper1">
                            <a href="https://jeeadv.ac.in/past_qps/2016_1.pdf" target="_blank" class="button-2 w-button">2017 Paper 1</a>
                        </div>
                        <div class="paper2">
                            <a href="https://jeeadv.ac.in/past_qps/2016_2.pdf" target="_blank" class="button-2 w-button">2016 Paper 2</a>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="heading-7">2017</h3>
                    <div class="div-block-7">
                        <div class="paper1">
                            <a href="https://jeeadv.ac.in/past_qps/2017_1.pdf" target="_blank" class="button-2 w-button">2017 Paper18</a>
                        </div>
                        <div class="paper2">
                            <a href="https://jeeadv.ac.in/past_qps/2017_2.pdf" target="_blank" class="button-2 w-button">2017 Paper 2</a>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="heading-7">2018</h3>
                    <div class="div-block-7">
                        <div class="paper1">
                            <a href="https://jeeadv.ac.in/past_qps/2018_1.pdf" target="_blank" class="button-2 w-button">2018 Paper 1</a>
                        </div>
                        <div class="paper2">
                            <a href="https://jeeadv.ac.in/past_qps/2018_2.pdf" target="_blank" class="button-2 w-button">2018 Paper 2</a>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="heading-7">2019 (English)</h3>
                    <div class="div-block-7">
                        <div class="paper1">
                            <a href="https://jeeadv.ac.in/past_qps/2019_1_English.pdf" target="_blank" class="button-2 w-button">2019 Paper19</a>
                        </div>
                        <div class="paper2">
                            <a href="https://jeeadv.ac.in/past_qps/2019_2_English.pdf" target="_blank" class="button-2 w-button">2019 Paper 2</a>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="heading-7">2019 (Hindi)</h3>
                    <div class="div-block-7">
                        <div class="paper1">
                            <a href="https://jeeadv.ac.in/past_qps/2019_2_Hindi.pdf" target="_blank" class="button-2 w-button">2019 Paper20</a>
                        </div>
                        <div class="paper2">
                            <a href="https://jeeadv.ac.in/past_qps/2019_2_Hindi.pdf" target="_blank" class="button-2 w-button">2019 Paper 2</a>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="heading-7">2020 (English)</h3>
                    <div class="div-block-7">
                        <div class="paper1">
                            <a href="https://jeeadv.ac.in/past_qps/2020_1_English.pdf" target="_blank" class="button-2 w-button">2020 Pape201</a>
                        </div>
                        <div class="paper2">
                            <a href="https://jeeadv.ac.in/past_qps/2020_2_English.pdf" target="_blank" class="button-2 w-button">2020 Paper 2</a>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="heading-7">2020 (Hindi)</h3>
                    <div class="div-block-7">
                        <div class="paper1">
                            <a href="https://jeeadv.ac.in/past_qps/2020_1_Hindi.pdf" target="_blank" class="button-2 w-button">2020 Paper 1</a>
                        </div>
                        <div class="paper2">
                            <a href="https://jeeadv.ac.in/past_qps/2020_2_Hindi.pdf" target="_blank" class="button-2 w-button">2020 Paper 2</a>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="heading-7">2021 (English)</h3>
                    <div class="div-block-7">
                        <div class="paper1">
                            <a href="https://jeeadv.ac.in/past_qps/2021_1_English.pdf" target="_blank" class="button-2 w-button">2021 Paper 1</a>
                        </div>
                        <div class="paper2">
                            <a href="https://jeeadv.ac.in/past_qps/2021_2_English.pdf" target="_blank" class="button-2 w-button">2021 Paper 2</a>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="heading-7">2021 (Hindi)</h3>
                    <div class="div-block-7">
                        <div class="paper1">
                            <a href="https://jeeadv.ac.in/past_qps/2021_1_Hindi.pdf" target="_blank" class="button-2 w-button">2008 Paper 2</a>
                        </div>
                        <div class="paper2">
                            <a href="https://jeeadv.ac.in/past_qps/2021_2_Hindi.pdf" target="_blank" class="button-2 w-button">2008 Paper 2</a>
                        </div>
                    </div>
                </div>
            </div>

            <h2 class="heading">Past Question Papers [JEE (Mains)]</h2>

            <h1 style={{ fontFamily: "Manrope", margin: "auto", width: "75%", fontSize: "34px", borderBottom: "1px solid black", marginTop: "30px" }}>2021</h1>
            <div className="topic-list">

                {previousyearquestions.map((pyq) => {
                    return <>
                        {pyq.file_name.includes(2021) ? <>

                            <Embedpdf pyqembed={pyq.embed_link} pyqname={pyq.file_name.slice(0, -4)} />

                        </> : null}
                    </>
                })}
            </div>
            <h2 style={{ fontFamily: "Manrope", margin: "auto", width: "75%", fontSize: "34px", borderBottom: "1px solid black", marginTop: "30px" }}>2020</h2>
            <div className="topic-list">

                {previousyearquestions.map((pyq) => {
                    return <>
                        {pyq.file_name.includes(2020) ? <>

                            <Embedpdf pyqembed={pyq.embed_link} pyqname={pyq.file_name.slice(0, -4)} />

                        </> : null}
                    </>
                })}
            </div>

            <h2 style={{ fontFamily: "Manrope", margin: "auto", width: "75%", fontSize: "34px", borderBottom: "1px solid black", marginTop: "30px" }}>2019</h2>
            <div className="topic-list">

                {previousyearquestions.map((pyq) => {
                    return <>
                        {pyq.file_name.includes(2019) ? <>

                            <Embedpdf pyqembed={pyq.embed_link} pyqname={pyq.file_name.slice(0, -4)} />

                        </> : null}
                    </>
                })}
            </div>

            <h2 style={{ fontFamily: "Manrope", margin: "auto", width: "75%", fontSize: "34px", borderBottom: "1px solid black", marginTop: "30px" }}>2018</h2>
            <div className="topic-list">

                {previousyearquestions.map((pyq) => {
                    return <>
                        {pyq.file_name.includes(2018) ? <>

                            <Embedpdf pyqembed={pyq.embed_link} pyqname={pyq.file_name.slice(0, -4)} />

                        </> : null}
                    </>
                })}
            </div>

            <h2 style={{ fontFamily: "Manrope", margin: "auto", width: "75%", fontSize: "34px", borderBottom: "1px solid black", marginTop: "30px" }}>2017</h2>
            <div className="topic-list">

                {previousyearquestions.map((pyq) => {
                    return <>
                        {pyq.file_name.includes(2017) ? <>

                            <Embedpdf pyqembed={pyq.embed_link} pyqname={pyq.file_name.slice(0, -4)} />

                        </> : null}
                    </>
                })}
            </div>




        </div>
    )
}

export default Pyq