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
import router from "next/router";

// install Swiper modules
SwiperCore.use([Pagination, Mousewheel]);


export default function Caroussel() {
  
  
  
  return (
    <>
      <div className="text-white   top-0 bg-gradient-to-b from-black w-full z-50 xxs:space-x-3">
        <div className="px-10 flex flex-wrap p-5  flex-col xl:flex-row md:flex-row sm:flex-row xs:flex-row xxs:flex-row  items-center">
          <div className="ml-auto flex flex-row space-x-6 xxl:w-10/12 xl:w-11/12 lg:w-10/12 md:w-10/12 sm:w-3/4 xs:w-3/4 xxs:w-9/12  xxl:text-lg xl:text-sm lg:text-sm md:text-sm xs:text-sm xxs:text-xs font-light">

            <a href="#" className="hover:text-gray-400 cursor-pointer underline">Projects</a>
            <a href="#" onClick={()=>router.push('/about')} className="hover:text-gray-400 ">About</a>
            <a href="#" onClick={()=>router.push('/caroussel')} className="hover:text-gray-400 ">Caroussel</a>
          </div>
          <div className="pr-12 fixed h-full w-full flex items-center justify-center animate-pulse" >
              <h1 className="text-4xl space-y-2 tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="inline ">J</span>
                <span className="inline text-gray-700 ">M</span>
              </h1>
            </div>

        <nav className="mr-auto flex flex-wrap pb-1 xxs:pt-2 items-center text-base justify-center font-semibold space-x-10">

       
        </nav>
      </div>
    </div>
    <Swiper speed={400}  direction={'horizontal'} slidesPerView={1} spaceBetween={0} mousewheel={{sensitivity:1}}  centeredSlides={true} pagination={{

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
  </Swiper>
    </>
  )
}