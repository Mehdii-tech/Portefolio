import type { NextPage } from 'next'
import React, { useCallback, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"



// import Swiper core and required modules
import SwiperCore, {
  Mousewheel,
  Pagination
} from 'swiper';

import Layout from "../core/layouts/MainLayout";
import Yes from '../core/components/YesOrNo';
import Content from '../core/components/Content';
import Description from '../core/components/Description';
import { Transition } from '@headlessui/react';
import Image from 'next/image';


// install Swiper modules
SwiperCore.use([Pagination, Mousewheel]);



const Home: NextPage = () => {
  const [isShown, setIsShown] = useState(false);
  const [clicked, setIsClicked] = useState(false);
  const [index, setIndex]=useState(Number)


  const initialState = {
    text: '#c5cec3',
    bg:'#141414',
    photo:"",
    demo:"",
  };
  const [{ text, bg, photo, demo }, setState ] = useState(initialState);

  const initialWorkState ={
    completed:'',
    type:'',
    role:'',
    client:'',
    subject:''
  }

  const [{completed, type, role, client, subject}, setStateWork]=useState(initialWorkState)
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
<Layout index={index} text={text} bg={bg} clicked={clicked}  >
    <Swiper speed={50}  direction={'vertical'} slidesPerView={1} spaceBetween={0} mousewheel={{sensitivity:1}}  centeredSlides={true} pagination={true}
            onSlideChange={(swiper) => slideChange(swiper.activeIndex)}   className="mySwiper"  >                   
            <SwiperSlide className=" flex-col waviy " >  
                      <div className='  space-x-36 justify-center items-center '>
                        <span className='n1 text-8xl'>W</span>
                        <span className='n1 text-8xl'>E</span>
                        <span className='n1 text-8xl'>L</span>
                        <span className='n1 text-8xl'>C</span>
                        <span className='n1 text-8xl'>O</span>
                        <span className='n1 text-8xl'>M</span>
                        <span className='n1 text-8xl'>E</span>
                      </div>
                      <div className=' space-x-32 justify-center items-center '>
                        <span className='n1 text-8xl'>T</span>
                        <span className='n1 text-8xl'>O</span>
                        <span className='n1 text-8xl'></span>
                        <span className='n1 text-8xl'>M</span>
                        <span className='n1 text-8xl'>Y</span>

                      </div>
                      <div className='space-x-6  justify-center items-center '>
                      <span className='n1 text-5xl'>P</span>
                        <span className='n1 text-5xl'>O</span>
                        <span className='n1 text-5xl'>R</span>
                        <span className='n1 text-5xl'>T</span>
                        <span className='n1 text-5xl'>F</span>
                        <span className='n1 text-5xl'>O</span>
                        <span className='n1 text-5xl'>L</span>
                        <span className='n1 text-5xl'>I</span>
                        <span className='n1 text-5xl'>O</span>
                      </div>
                      		
                      </SwiperSlide>
                      <SwiperSlide  className='flex-col '>
                        {!clicked && 
                        <>      
                          <Image         
                            src="/assets/img/1/school.jpg"
                            alt="loginpagemini"
                            width={200}
                            height={200}
                            className=" filter grayscale hover:grayscale-0 block  object-cover rounded-lg"
                            onClick={()=>setIsClicked(true)}
                            priority={true}
                          />      
                          <Yes isShown={isShown} />
                        </> 
                        }
                        {clicked &&
                          <>
                          <div 
                            className=" inline-flex justify-start   "
                          >
                          
                          <Description index={index} setStateWork={setStateWork} completed={completed} type={type} role={role} client={client} subject={subject}/>

                        
                          <Content index={index} setStateWork={setStateWork} setState={setState} text={text} photo={photo} demo={demo}  />
                          
                          </div>

                          </>
                        }

                      </SwiperSlide>
                      <SwiperSlide className='flex-col '>
                      {!clicked && 
                        <>      
                            <Image         
                            src="/assets/img/1/help.jpg"
                            alt="help"
                            width={200}
                            height={200}
                            className=" filter grayscale hover:grayscale-0 block  object-cover rounded-lg"
                            onClick={()=>setIsClicked(true)}
                            priority={true}
                          />        
                          <Yes isShown={isShown} />
                        </> 
                        }
                        {clicked &&
                          <>
                                 <div className=' inline-flex justify-start   '>
                          <Description index={index} setStateWork={setStateWork} completed={completed} type={type} role={role} client={client} subject={subject}/>

                        
                          <Content index={index} setStateWork={setStateWork} setState={setState} text={text} photo={photo} demo={demo} />
                          </div>
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




