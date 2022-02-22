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
import { RoughNotationGroup } from 'react-rough-notation';
import { RainbowHighlight } from '../core/components/RainbowHighlight';

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
  const colors = ["#65635e", "#c38b71", "#374151"];

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
<Layout mobile={mobile} index={index} text={text} bg={bg} clicked={clicked} swiped={handleExternalChangeSlide}  >
    <Swiper speed={2500}  direction={'vertical'} slidesPerView={1} spaceBetween={0} mousewheel={{sensitivity:1}}  centeredSlides={true} pagination={true}
            onSlideChange={(swiper) => slideChange(swiper.activeIndex)} className="mySwiper "  onSwiper={setSwiperInstance} >                   
            <SwiperSlide className=" flex-col waviy  " >  
                    <div className=" xl:max-w-6xl minscreen  max-w-3xl xs:max-w-4xl lg:max-w-5xl mx-auto ">
                    <RoughNotationGroup show={true} >
                      <RainbowHighlight color={colors[0]}>
                      <h1 onMouseEnter={()=>setState({ text:initialState.text, bg: colors[0] })} onMouseLeave={()=>setState(initialState)} className=" minscreen text-5xl xs:text-6xl md:text-75xl lg:tracking-moyen font-bold   ">
                        WELCOME
                      </h1>
                      </RainbowHighlight>
                    </RoughNotationGroup>
                    </div>
                    <div className=" xl:max-w-6xl minscreen  max-w-3xl xs:max-w-4xl lg:max-w-5xl mx-auto ">
                    <RoughNotationGroup show={true}>
                      <RainbowHighlight color={colors[1]}>
                      <h1 onMouseEnter={()=>setState({ text:initialState.text, bg: colors[1] })} onMouseLeave={()=>setState(initialState)} className=" minscreen text-5xl xs:text-6xl md:text-75xl lg:tracking-moyen font-bold   ">
                        TO MY
                      </h1>
                      </RainbowHighlight></RoughNotationGroup>
                    </div>
                    <div className=" xl:max-w-6xl max-w-3xl minscreen  xs:max-w-4xl lg:max-w-5xl mx-auto ">
                    <RoughNotationGroup show={true}>
                      <RainbowHighlight color={colors[2]}>
                      <h1 onMouseEnter={()=>setState({ text:initialState.text, bg: colors[2] })} onMouseLeave={()=>setState(initialState)} className=" minscreen text-5xl xs:text-6xl md:text-75xl lg:tracking-moyen font-bold   ">
                        Portefolio
                      </h1></RainbowHighlight></RoughNotationGroup>
                    </div>
                      		
                      </SwiperSlide>
                      <SwiperSlide  className='flex-col '>
                        {!clicked && 
                        <>      
                          <Image         
                            src={school}
                            alt="loginpagemini"
                            width={260}
                            height={230}
                            className="  block   rounded-lg"
                            onClick={()=>setIsClicked(true)}
                            quality={100}
                            placeholder='blur'
                            objectFit='cover'
                            layout='fixed'
                            priority={true}
                          />
                          {mobile &&
                                                    <div className='wrapper pb-2 '>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className='inline-block w-20 h-20 ' viewBox="0 0 200 200">
                                                    <circle fill={text} className="tap-1" cx="89.43" cy="64.48" r="19.46"/>
                                                    <path fill={text} className="hand-tap" d="M139.93,102.68,98.81,95.75V65.2A9.25,9.25,0,0,0,89.56,56h0a9.25,9.25,0,0,0-9.25,9.25v57.36L71,111.77c-3.61-3.61-8.44-3.89-13.08,0,0,0-7.24,5.84-3.83,9.25l34,34h42.63a9.25,9.25,0,0,0,9.07-7.43l6.82-34.09A9.28,9.28,0,0,0,139.93,102.68Z"/>
                                                    </svg>      
                                                  </div>
                            }
                      
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
                            width={260}
                            height={230}
                            className="  block   rounded-lg"
                            onClick={()=>setIsClicked(true)}
                            objectFit='cover'
                            layout='fixed'
                            placeholder="blur"
                            quality={100}
                            priority={true}
                          />
                            {mobile &&
                                                    <div className='wrapper pb-2 '>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className='inline-block w-20 h-20 ' viewBox="0 0 200 200">
                                                    <circle fill={text} className="tap-1" cx="89.43" cy="64.48" r="19.46"/>
                                                    <path fill={text} className="hand-tap" d="M139.93,102.68,98.81,95.75V65.2A9.25,9.25,0,0,0,89.56,56h0a9.25,9.25,0,0,0-9.25,9.25v57.36L71,111.77c-3.61-3.61-8.44-3.89-13.08,0,0,0-7.24,5.84-3.83,9.25l34,34h42.63a9.25,9.25,0,0,0,9.07-7.43l6.82-34.09A9.28,9.28,0,0,0,139.93,102.68Z"/>
                                                    </svg>      
                                                  </div>
                            }        
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
                      <p className='n1 text-5xl cache2 mt-16 '>OR</p>
                      </SwiperSlide>
        </Swiper>
  </Layout>
    
  )
}
    
export default Home




