import type { NextPage } from 'next'
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
import Yes from '../core/components/YesOrNo';


// install Swiper modules
SwiperCore.use([Pagination, Mousewheel]);



const Home: NextPage = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <>
<Layout>
  

    <Swiper speed={50}  direction={'vertical'} slidesPerView={1} spaceBetween={0} mousewheel={{sensitivity:1}}  centeredSlides={true} 
    onSlideChange={() => setIsShown(true)} 
//     pagination={{
      
//   "clickable": true,
// }} breakpoints={{
//   "640": {
//     "slidesPerView": 1,
//     "spaceBetween": 20
//   },
//   "768": {
//     "slidesPerView": 1,
//     "spaceBetween": 40
//   },
//   "1024": {
//     "slidesPerView": 1,
//     "spaceBetween": 50
//   }
// }}
 className="mySwiper">
<SwiperSlide className="flex-col " >  
  
{/* <Image className="w-full h-screen object-cover -mt-1 opacity-[.5] text-gray-200 " src={require('../../public/Black-gif-background-3-GIF-Images-Download.gif')} /> */}
          <div className=' space-x-72 justify-center items-center '>
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

          </div>
          <div className='space-x-6  justify-center items-center '>
          <span className='n1 text-5xl'>w</span>
            <span className='n1 text-5xl'>e</span>
            <span className='n1 text-5xl'>b</span>
          </div>
          </SwiperSlide>
          <SwiperSlide  className='flex-col '>
            <img className="filter grayscale hover:grayscale-0 cursor-pointer " src="https://swiperjs.com/demos/images/nature-2.jpg" />
            <Yes isShown={isShown} />
          </SwiperSlide>
          <SwiperSlide className='flex-col '>
            <img className="filter grayscale hover:grayscale-0"src="https://swiperjs.com/demos/images/nature-3.jpg" />
            <Yes isShown={isShown} />
          </SwiperSlide>
          <SwiperSlide className='flex-col '>
            <img className="filter grayscale hover:grayscale-0"src="https://swiperjs.com/demos/images/nature-4.jpg" />
            <Yes isShown={isShown} />
          </SwiperSlide><SwiperSlide className='flex-col '>
            <img className="filter grayscale hover:grayscale-0"src="https://swiperjs.com/demos/images/nature-5.jpg" />
            <Yes isShown={isShown} />
          </SwiperSlide>
          <SwiperSlide className='flex-col '>
            <img className="filter grayscale hover:grayscale-0"src="https://swiperjs.com/demos/images/nature-6.jpg" />
            <Yes isShown={isShown} />
          </SwiperSlide>
          <SwiperSlide className='flex-col '>
            <img className="filter grayscale hover:grayscale-0"src="https://swiperjs.com/demos/images/nature-7.jpg" />
            <Yes isShown={isShown} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="filter grayscale hover:grayscale-0"src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="filter grayscale hover:grayscale-0"src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide>
  </Swiper>
  </Layout>
    </>
  )
}
    
export default Home




