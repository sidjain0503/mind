import React, { useState } from "react";
import Testimonials from "../Homepage/Testimonials/Testimonials";
import Mentorsdata from '../Homepage/data/Mentors.json'
import './style.css'
import Mentor from "../Homepage/Mentor/Mentor";
const delay = 3000;

function MCarousel() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
        resetTimeout();
  
    if(window.innerWidth >=900){
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === Mentorsdata.length - 3 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {
        resetTimeout();
      };
    }else{
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === Mentorsdata.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {
        resetTimeout();
      };
    }
   
    
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {Mentorsdata.map((mdata, index) => (
          <div
            className="slide"
            key={index}
          >
                    <Mentor name={mdata.name} img={mdata.img} desc={mdata.desc} quote={mdata.quote} />


          </div>
        ))}
      </div>

      <div className="slideshowDots">
      
      <>
      {window.innerWidth >=900? 
      <>
      {Mentorsdata.slice(2).map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </>
      :
      <>
      {Mentorsdata.slice(2).map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </>
      }
      
      </>

        
      </div>
    </div>
  );
}

export default MCarousel
// ReactDOM.render(<Slideshow />, document.getElementById("App"));
