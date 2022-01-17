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
  

    <Swiper speed={50}  direction={'vertical'} slidesPerView={1} spaceBetween={0} mousewheel={{sensitivity:1}}  centeredSlides={true} pagination={{

  "clickable": true,
}} breakpoints={{
  "640": {
    "slidesPerView": 1,
    "spaceBetween": 20
  },
  "768": {
    "slidesPerView": 1,
    "spaceBetween": 40
  },
  "1024": {
    "slidesPerView": 1,
    "spaceBetween": 50
  }
}}
 className="mySwiper">
<SwiperSlide className="flex-col ">          <div className='space-x-60  justify-center items-center '>
            <span className='n1 text-8xl'>J</span>
            <span className='n1 text-8xl'>A</span>
            <span className='n1 text-8xl'>B</span>
            <span className='n1 text-8xl'>B</span>
            <span className='n1 text-8xl'>O</span>
            <span className='n1 text-8xl'>U</span>
            <span className='n1 text-8xl'>R</span>
          </div>
          <div className=' space-x-32 justify-center items-center '>
            <span className='n1 text-8xl'>M</span>
            <span className='n1 text-8xl'>E</span>
            <span className='n1 text-8xl'>H</span>
            <span className='n1 text-8xl'>D</span>
            <span className='n1 text-8xl'>I</span>

          </div></SwiperSlide><SwiperSlide><img className="filter grayscale hover:grayscale-0"src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide><SwiperSlide><img className="filter grayscale hover:grayscale-0"src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide><SwiperSlide><img className="filter grayscale hover:grayscale-0"src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide><SwiperSlide><img className="filter grayscale hover:grayscale-0"src="https://swiperjs.com/demos/images/nature-5.jpg" /></SwiperSlide><SwiperSlide><img className="filter grayscale hover:grayscale-0"src="https://swiperjs.com/demos/images/nature-6.jpg" /></SwiperSlide><SwiperSlide><img className="filter grayscale hover:grayscale-0"src="https://swiperjs.com/demos/images/nature-7.jpg" /></SwiperSlide><SwiperSlide><img className="filter grayscale hover:grayscale-0"src="https://swiperjs.com/demos/images/nature-8.jpg" /></SwiperSlide><SwiperSlide><img className="filter grayscale hover:grayscale-0"src="https://swiperjs.com/demos/images/nature-9.jpg" /></SwiperSlide>
  </Swiper></Layout>
    </>
  )
}