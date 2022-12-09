import React, { useEffect, useRef, useState } from 'react'
import "./Header.css"
import { Link,  useLocation,  useNavigate } from "react-router-dom"
import FreeResources from '../../FreeResources/FreeResources';
import down from './img/close.png'
import mindlogo from './img/MIND-logo.png'

function Header() {
    // header
  const [style, setStyle] = useState("close_sidenav");
  const [style2, setStyle2] = useState("none");
  const [style3, setStyle3] = useState("display");
    //   free resource
  const [Resource, setResource] = useState("hide");

    let resourceref = useRef();
  

useEffect(()=>{
    document.addEventListener("mousedown",(e)=>{
        if(!resourceref.current.contains(e.target)){
            setResource("hide")
            // console.log(e.target)
        };

    })


})




    // header

    const opensidenav=()=>{
        setStyle("long_head");
        setStyle2("display");
        setStyle3("none");

            console.log('style open')
    }
    const closesidenav=()=>{
        setStyle("close_sidenav");
        setStyle2("none");
        setStyle3("display");
    }


        // free resources

        const showResource=()=>{
            setResource("show")
            // setStyle4("show")

        }
        const hideResource=()=>{
            setResource("hide")
        }
        // const hideme =()=>{
        //     setStyle4("hide")

        // }

        const navigate = useNavigate();

            const [resource, setsource] = useState(false)

            const source = ()=>{
                setsource(!resource)
            }


            const [classes, setclass] = useState(false);
            const showclass =()=>{
                setclass(!classes)
            }
        
            const location = useLocation();

            //destructuring pathname from location
            const { pathname } = location;
        
            //Javascript split method to get the name of the path in array
            const splitLocation = pathname.split("/");

            const scrolltotop =()=>{
                window.scrollTo({top: 0, behavior: 'smooth'});
            }

    return (
        <>


        <div className={"header "+ style} >

           <div className="new">
           <div onClick={()=>{navigate("/"); scrolltotop(); closesidenav();}} style={{cursor:"pointer"}}> <img src={mindlogo} alt=""  style={{width:"80px"}} /></div>
           <div className="pages">
                <Link to="/about" onClick={()=>{scrolltotop();}} className={splitLocation[1] === "about" ? "link active" : "link"} > About Us</Link>
                <div className={splitLocation[1] === "freeresources" ? "link active res" : "link res"}>
                    <span onMouseEnter={showResource}   >Free Resources </span>
                    <span onMouseEnter={hideResource}
                           
                   > </span>
                </div>

                <Link  onClick={()=>{scrolltotop();}} to="/courses" className={splitLocation[1] === "courses" ? " link active" : "link"}> Plans & Pricing</Link>
                <Link onClick={()=>{scrolltotop();}} to="/contact" className={splitLocation[1] === "contact" ? " link active" : "link"}>Contact Us </Link>
                <a href="https://app.boosturmind.com/" className="link btn_sp"  id='h_lt'   target="_blank"> Login✌️</a>
           </div>
           

            <span id='b_menu' className={style3} onClick={opensidenav}>☰ </span>
            <span id='cross' className={style2} onClick={closesidenav}>✖</span>
           </div>
    
           
             <div className={"h_links "+style2}>
             <div  onClick={()=>{navigate("/about"); closesidenav(); scrolltotop();}}> About Us</div>
                <div onClick={source}> Free Resources</div>
                {resource === true ?<> 
                    <div className='free-dropdown'>
            <h1>Jee mains & advance</h1>
                <span onClick={()=>{navigate("/freeresources/jee/notes"); closesidenav(); scrolltotop();}}>  Notes </span>
                <span onClick={showclass}> Dpp    </span>
                {classes == true ?<><span onClick={()=>navigate("/freeresources/jee/dpp/class11")}>class11</span> <span onClick={()=>navigate("/freeresources/jee/dpp/class12")}>class 12</span></>:null}
                <span onClick={()=>navigate("/freeresources/Jee/mindmaps")}> Mind maps</span>
                <span onClick={()=>{navigate("/freeresources/jee/pyq"); closesidenav(); }} > Previous year questions </span>
            </div>        
            <div className='free-dropdown'>
                <h1>Neet (Coming soon*)</h1>
                <span >  Notes </span>
                <span  >  Dpp </span>
                <span >  Mind Maps  </span>
                <span> Previous year questions </span>
        </div>  
                
                </> :null}
                <div  onClick={()=>{navigate("/courses"); closesidenav(); scrolltotop();}}>  Plans & Pricing</div>
                <div   onClick={()=>{navigate("/contact"); closesidenav(); scrolltotop();}}> Contact</div>
                <div  ><a href="https://app.boosturmind.com/" target="_blank">Login</a> </div>
            </div> 

        </div>

        <FreeResources style={Resource}  resref={resourceref} device="desktop" />


        </>
        
    )
}

export default Header
