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
  Pagination,
} from 'swiper';

import Layout from "../core/layouts/MainLayout";
import Yes from '../core/components/YesOrNo';
import Content from '../core/components/Content';
import Description from '../core/components/Description';
import Image from 'next/image';
import Link from 'next/link';
import school from '../../public/assets/img/1/school.jpg'
import help from '../../public/assets/img/1/help.jpg'

// install Swiper modules
SwiperCore.use([Pagination, Mousewheel]);



const Home: NextPage = () => {
  const [isShown, setIsShown] = useState(false);
  const [clicked, setIsClicked] = useState(false);
  const [index, setIndex]=useState(Number)
  const [hide, setHide]=useState(false)
  const [mobile, setMobile] = useState(Boolean)

  useEffect(() => {
    const updateMobile = () => {
      if (typeof window === 'undefined') setMobile(false)
      setMobile(window.innerWidth < 640 ? true : false)
    }

    updateMobile()
    window.addEventListener('resize', updateMobile)
    return () => {
      window.removeEventListener('resize', updateMobile)
    }
  }, [])


  const initialState = {
    text: '#c5cec3',
    bg:'#141414',
  };
  const [{ text, bg }, setState ] = useState(initialState);

  const initialWorkState ={
    completed:'',
    type:'',
    role:'',
    client:'',
    subject:''
  }

  const [{completed, type, role, client, subject}, setStateWork]=useState(initialWorkState)
 

  function slideChange(activeIndex:number){
    setIndex(activeIndex)
    setState({...initialState})
    setIsShown(true)
    setIsClicked(false)
    
  }

  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();
  const handleExternalChangeSlide = (newSlideIndexToShow:number) => {
    swiperInstance.slideTo(newSlideIndexToShow);
 }

  
  return (
<Layout index={index} text={text} bg={bg} clicked={clicked} swiped={handleExternalChangeSlide}  >
    <Swiper speed={50}  direction={'vertical'} slidesPerView={1} spaceBetween={0} mousewheel={{sensitivity:1}}  centeredSlides={true} pagination={true}
            onSlideChange={(swiper) => slideChange(swiper.activeIndex)} className="mySwiper"  onSwiper={setSwiperInstance} >                   
            <SwiperSlide className="  flex-col waviy " >  
                      <div className=' n1 xs:text-7xl lg:text-8xl lg:space-x-36 text-6xl space-x-8 xs:space-x-11 justify-center items-center '>
                        <span>W</span>
                        <span>E</span>
                        <span >L</span>
                        <span >C</span>
                        <span >O</span>
                        <span >M</span>
                        <span >E</span>
                      </div>
                      <div className=' n1 xs:text-7xl lg:text-8xl lg:space-x-36 text-6xl space-x-8 xs:space-x-11 justify-center items-center '>
                        <span >T</span>
                        <span >O</span>
                        <span ></span>
                        <span >M</span>
                        <span >Y</span>

                      </div>
                      <div className=' n1 lg:text-5xl text-4xl space-x-6  justify-center items-center '>
                      <span >P</span>
                        <span >O</span>
                        <span >R</span>
                        <span >T</span>
                        <span >F</span>
                        <span >O</span>
                        <span >L</span>
                        <span >I</span>
                        <span >O</span>
                      </div>
                      		
                      </SwiperSlide>
                      <SwiperSlide  className='flex-col '>
                        {!clicked && 
                        <>      
                          <Image         
                            src={school}
                            alt="loginpagemini"
                            width={200}
                            height={200}
                            className="  block   rounded-lg"
                            onClick={()=>setIsClicked(true)}
                            quality={100}
                            placeholder='blur'
                            objectFit='cover'
                            layout='fixed'
                            priority={true}
                          />      
                          {!mobile && <Yes isShown={isShown} />}
                        </> 
                        }
                        {clicked &&
                          <>
                          <div 
                            className={` sm:inline-flex  sm:items-center sm:justify-start justify-center    `}
                          >
                          {mobile ?
                          <>
                          {hide &&
                            <Description index={index} setStateWork={setStateWork} completed={completed} type={type} role={role} client={client} subject={subject}/> 
                          }
    

                          {!hide &&
                            <Content index={index} setStateWork={setStateWork} setState={setState} text={text}  />
                          }
                          </>
                          :
                          <>
                          <Description index={index} setStateWork={setStateWork} completed={completed} type={type} role={role} client={client} subject={subject}/> 
                          <Content index={index} setStateWork={setStateWork} setState={setState} text={text}  />
                          </>
                          }
                          
                          
                          <a  className=" sm:hidden justify-center mx-auto mt-6  p-3 w-40 flex cursor-pointer items-center rounded-md text-base font-medium text-gray-900 ">
                              {!hide ?
                              <>
                              <svg className={` flex-shrink-0 h-6 w-6 text-[${text}] ` } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span onClick={()=>setHide(true)} className="ml-3 underline ">See descriptions</span>
                              </>
                              : <span onClick={()=>setHide(false)} className="ml-3 underline ">Return</span>
                            }
                          </a>
                          </div>
                          

                          </>
                        }

                      </SwiperSlide>
                      <SwiperSlide className='flex-col '>
                      {!clicked && 
                        <>      
                            <Image         
                            src={help}
                            alt="help"
                            width={200}
                            height={200}
                            className="  block   rounded-lg"
                            onClick={()=>setIsClicked(true)}
                            objectFit='cover'
                            layout='fixed'
                            placeholder="blur"
                            quality={100}
                            priority={true}
                          />        
                          {!mobile && <Yes isShown={isShown} />}
                        </> 
                        }
                        {clicked &&
                          <>
                          <div 
                            className={` sm:inline-flex  sm:items-center sm:justify-start justify-center    `}
                          >
                          {mobile ?
                          <>
                          {hide &&
                            <Description index={index} setStateWork={setStateWork} completed={completed} type={type} role={role} client={client} subject={subject}/> 
                          }
    

                          {!hide &&
                            <Content index={index} setStateWork={setStateWork} setState={setState} text={text}  />
                          }
                          </>
                          :
                          <>
                          <Description index={index} setStateWork={setStateWork} completed={completed} type={type} role={role} client={client} subject={subject}/> 
                          <Content index={index} setStateWork={setStateWork} setState={setState} text={text}  />
                          </>
                          }
                          
                          
                          <a  className=" sm:hidden justify-center mx-auto mt-6  p-3 w-40 flex cursor-pointer items-center rounded-md text-base font-medium text-gray-900 ">
                              {!hide ?
                              <>
                              <svg className={` flex-shrink-0 h-6 w-6 text-[${text}] ` } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span onClick={()=>setHide(true)} className="ml-3 underline ">See descriptions</span>
                              </>
                              : <span onClick={()=>setHide(false)} className="ml-3 underline ">Return</span>
                            }
                          </a>
                          </div>
                          </>
                        }
                      </SwiperSlide>
                      <SwiperSlide className='flex-col  '>
                      <span className='n0 text-2xl  '>It was my biggest works</span>
                      <div className='inline-flex space-x-4 n0 text-2xl ' ><span className=' '>Want to see<Link href="https://github.com/Mehdii-tech"><a target="_blank" className='n0 text-2xl hover:underline '> More </a></Link>?</span></div>
                      <p className='n1 text-5xl mt-16 '>OR</p>
                      </SwiperSlide>
        </Swiper>
  </Layout>
    
  )
}
    
export default Home




