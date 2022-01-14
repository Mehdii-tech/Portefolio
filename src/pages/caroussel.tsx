import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"



// import Swiper core and required modules
import SwiperCore, {
  Mousewheel,
  Pagination
} from 'swiper';

import Layout from "../core/components/Layout";


// install Swiper modules
SwiperCore.use([Pagination, Mousewheel]);


export default function Caroussel() {
  
  
  
  return (
    <>
<Layout>
  
</Layout>
    {/* <Swiper speed={400}  direction={'horizontal'} slidesPerView={1} spaceBetween={0} mousewheel={{sensitivity:1}}  centeredSlides={true} pagination={{

  "clickable": true,
}} breakpoints={{
  "640": {
    "slidesPerView": 2,
    "spaceBetween": 20
  },
  "768": {
    "slidesPerView": 4,
    "spaceBetween": 40
  },
  "1024": {
    "slidesPerView": 9,
    "spaceBetween": 50
  }
}}
 className="mySwiper">
<SwiperSlide><img className="filter grayscale hover:grayscale-0"src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide><SwiperSlide><img className="filter grayscale hover:grayscale-0"src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide><SwiperSlide><img className="filter grayscale hover:grayscale-0"src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide><SwiperSlide><img className="filter grayscale hover:grayscale-0"src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide><SwiperSlide><img className="filter grayscale hover:grayscale-0"src="https://swiperjs.com/demos/images/nature-5.jpg" /></SwiperSlide><SwiperSlide><img className="filter grayscale hover:grayscale-0"src="https://swiperjs.com/demos/images/nature-6.jpg" /></SwiperSlide><SwiperSlide><img className="filter grayscale hover:grayscale-0"src="https://swiperjs.com/demos/images/nature-7.jpg" /></SwiperSlide><SwiperSlide><img className="filter grayscale hover:grayscale-0"src="https://swiperjs.com/demos/images/nature-8.jpg" /></SwiperSlide><SwiperSlide><img className="filter grayscale hover:grayscale-0"src="https://swiperjs.com/demos/images/nature-9.jpg" /></SwiperSlide>
  </Swiper> */}
    </>
  )
}