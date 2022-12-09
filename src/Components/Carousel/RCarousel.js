import React, { useState } from "react";
import Testimonials from "../Homepage/Testimonials/Testimonials";
import Testimonialsdata from '../Homepage/data/Testimonials.json'
import './style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useEffect } from "react";
import { useRef } from "react";

function RCarousel() {
    const [autoplay, setautoPlay] = useState(true)

    const carref = useRef();
    useEffect(() => {
        document.addEventListener("mousedown", (e) => {
            if (!carref.current.contains(e.target)) {
                setautoPlay(true)
                // console.log(e.target)
            };

        })


    })




    return (
        <div>

            <Carousel autoPlay={autoplay} infiniteLoop interval={3000} transitionTime={1000} autoFocus >

                {Testimonialsdata.map((data, index) => (
                    <div

                        ref={carref}
                        key={index}
                        onClick={() => { setautoPlay(false) }}
                    >
                        <Testimonials name={data.name} video_link={data.video_link} review={data.review} />
                    </div>
                ))}

            </Carousel>

        </div>
    );
}

export default RCarousel
// ReactDOM.render(<Slideshow />, document.getElementById("App"));
