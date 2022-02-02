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

                        
                          <Content index={index} setStateWork={setStateWork} setState={setState} text={text}  />
                          
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
                            
                            placeholder="blur"
                            quality={100}
                            priority={true}
                          />        
                          <Yes isShown={isShown} />
                        </> 
                        }
                        {clicked &&
                          <>
                                 <div className=' inline-flex justify-start   '>
                          <Description index={index} setStateWork={setStateWork} completed={completed} type={type} role={role} client={client} subject={subject}/>

                        
                          <Content index={index} setStateWork={setStateWork} setState={setState} text={text}  />
                          </div>
                          </>
                        }
                      </SwiperSlide>
                      <SwiperSlide className='flex-col  '>
                      <span className='n0 text-2xl  '>It was my biggest works</span>
                      <div className='inline-flex space-x-4 n0 text-2xl ' ><span className=' '>Want to see<Link href='/contact'><span className='n0 text-2xl hover:underline '> More </span></Link>?</span></div>
                      <p className='n1 text-5xl mt-16 '>OR</p>
                      </SwiperSlide>
        </Swiper>
  </Layout>
    </>
  )
}
    
export default Home




