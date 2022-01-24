import type { NextPage } from 'next'
import React, { useCallback, useEffect, useRef, useState } from "react";
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
import Content from '../core/components/Content';


// install Swiper modules
SwiperCore.use([Pagination, Mousewheel]);



const Home: NextPage = () => {
  const [isShown, setIsShown] = useState(false);
  const [clicked, setIsClicked] = useState(false);
  const [index, setIndex]=useState(Number)


  const initialState = {
    text: '#c5cec3',
    bg:'#141414'
  };
  const [{ text, bg }, setState ] = useState(initialState);
  // const [text, setText]=useState(initialtext)
  // const [bg, setBg]=useState(initialbg)

  function slideChange(activeIndex:number){
    console.log(text,bg)
    setIndex(activeIndex)
    setState({...initialState})
    console.log(text,bg)
    setIsShown(true)
    setIsClicked(false)
    
  }


  
  return (
    <>
<Layout text={text} bg={bg} clicked={clicked} >
    <Swiper speed={50}  direction={'vertical'} slidesPerView={1} spaceBetween={0} mousewheel={{sensitivity:1}}  centeredSlides={true} 
            onSlideChange={(swiper) => slideChange(swiper.activeIndex)}  className="mySwiper">                   
            <SwiperSlide className="flex-col " >  
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
                        {!clicked && 
                        <>           
                          <img className=" filter grayscale hover:grayscale-0 block w-[200px] h-[200px] object-cover rounded-lg " onClick={()=>setIsClicked(true)} src="https://swiperjs.com/demos/images/nature-2.jpg" />
                          <Yes isShown={isShown} />
                        </> 
                        }
                        {clicked &&
                          <>
                          <Content index={index} setState={setState} text={text}  />
                          </>
                        }

                      </SwiperSlide>
                      <SwiperSlide className='flex-col '>
                      {!clicked && 
                        <>           
                          <img className=" filter grayscale hover:grayscale-0 block w-[200px] h-[200px] object-cover rounded-lg " onClick={()=>setIsClicked(true)} src="https://swiperjs.com/demos/images/nature-3.jpg" />
                          <Yes isShown={isShown} />
                        </> 
                        }
                        {clicked &&
                          <>
                          <Content index={index} setState={setState} text={text}  />
                          </>
                        }
                      </SwiperSlide>
                      <SwiperSlide className='flex-col '>
                        <img className="filter grayscale hover:grayscale-0 block w-[200px] h-[200px] object-cover rounded-lg "  src="https://swiperjs.com/demos/images/nature-4.jpg" />
                        <Yes isShown={isShown} />
                      </SwiperSlide>
        </Swiper>
  </Layout>
    </>
  )
}
    
export default Home




