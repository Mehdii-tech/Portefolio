import { useEffect, useState } from "react"
import Image from "next/image";
import { Transition } from "@headlessui/react";

export default function Content({setState, text, index, photo, demo}:any){
    
    const [active, setActive] = useState(false);
      

    useEffect(()=>{ 
    switch (index) {
        case 1:{
            setState({text:'#53bc48',bg:'#65635e', photo:"school.jpg", demo:"demo.gif"})
        }
        break;
        case 2:{
            setState({text:'#2d60a8',bg:'#c38b71', photo:"help.jpg", demo:"demo2.gif"}) 
        }
        break;
    }
    },[setState])
    console.log( text, index,'text')
    return(
        <>
           
            
            <div className=" relative w-max  h-max ">
                

                
                <Transition
                                      enter="transform transition duration-[400ms]"
                                      enterFrom="opacity-0 scale-0 "
                                      enterTo="opacity-100 rotate-0 scale-125 "
                                      leave="transform  transition ease-in-out"
                                      leaveFrom="opacity-100 rotate-0 scale-100 "
                                      leaveTo="opacity-0 scale-95 "
                                      show={!active}
                >
                 <Image         
                    src={`/assets/img/1/${photo}`}
                    alt="loginpage"
                    width={800}
                    height={500}
                    className=" filter object-cover rounded-lg  cursor-pointer "
                    priority={true}
                />
                </Transition>
                <Transition
                                      enter="transform transition duration-[400ms]"
                                      enterFrom="opacity-0 scale-0 "
                                      enterTo="opacity-100 rotate-0 scale-125 "
                                      leave="transform  transition ease-in-out"
                                      leaveFrom="opacity-100 rotate-0 scale-100 "
                                      leaveTo="opacity-0 scale-95 "
                                      show={active}
                >
                                 
                    <Image         
                    src={`/assets/img/1/${demo}`}
                    alt="loginpage"
                    width={800}
                    height={500}
                    className=" filter object-cover rounded-lg"
                    // onMouseOut={()=>setActive(false)}
                    priority={true}
                /> 
                </Transition>
                
                {/* <img className="  filter w-[800px] h-[500px]  " src="/assets/img/1/angular.jpg" /> */}
                {!active ? 
                <div className={` text-[${text}] flex-col absolute text-center inset-0 z-10 justify-start items-start`}>
                    {index===1 &&
                    <><div className=' space-x-48 justify-center items-center mb-36 '>
                                <span className='n1 text-8xl'>S</span>
                                <span className='n1 text-8xl'>C</span>
                                <span className='n1 text-8xl'>H</span>
                                <span className='n1 text-8xl'>O</span>
                                <span className='n1 text-8xl'>O</span>
                                <span className='n1 text-8xl'>L</span>
                            </div><div className=' space-x-32 justify-center items-center '>
                                    <span className='n1 text-8xl'>W</span>
                                    <span className='n1 text-8xl'>O</span>
                                    <span className='n1 text-8xl'>R</span>
                                    <span className='n1 text-8xl'>K</span>

                                </div>
                    </>
                    }
                    {index===2 &&
                        <><div className=' space-x-52 justify-center items-center '>
                                <span className='n1 text-8xl'>H</span>
                                <span className='n1 text-8xl'>E</span>
                                <span className='n1 text-8xl'>L</span>
                                <span className='n1 text-8xl'>P</span>
                            </div><div className=' space-x-20 justify-center items-center '>
                                    <span className='n1 text-8xl'>Y</span>
                                    <span className='n1 text-8xl'>O</span>
                                    <span className='n1 text-8xl'>U</span>
                                    <span className='n1 text-8xl'>R</span>
                                </div><div className=' space-x-20 justify-center items-center '>
                                    <span className='n1 text-7xl'>N</span>
                                    <span className='n1 text-7xl'>E</span>
                                    <span className='n1 text-7xl'>I</span>
                                    <span className='n1 text-7xl'>G</span>
                                    <span className='n1 text-7xl'>H</span>
                                    <span className='n1 text-7xl'>B</span>
                                    <span className='n1 text-7xl'>O</span>
                                    <span className='n1 text-7xl'>R</span>

                        </div>
                    </> 
                    }
                <a onClick={()=>setActive(true)} className=" justify-center mx-auto -m-3 p-3 w-40 flex cursor-pointer items-center rounded-md text-base font-medium text-gray-900 ">
                    <svg className={` flex-shrink-0 h-6 w-6 text-[${text}] ` } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-3 ">Watch Demo</span>
                </a>
                </div> :        
                <a onClick={()=>setActive(false)} className=" justify-center mx-auto mt-5 -m-3 p-3 w-40 flex cursor-pointer items-center rounded-lg text-base font-medium text-gray-900 ">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" fill="#00000" viewBox="0 0 56 56" className="flex-shrink-0 h-6 w-6  " >
                                <path d="M54.424,28.382c0.101-0.244,0.101-0.519,0-0.764c-0.051-0.123-0.125-0.234-0.217-0.327L42.208,15.293
                                    c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L51.087,27H20.501c-0.552,0-1,0.447-1,1s0.448,1,1,1h30.586L40.794,39.293
                                    c-0.391,0.391-0.391,1.023,0,1.414C40.989,40.902,41.245,41,41.501,41s0.512-0.098,0.707-0.293l11.999-11.999
                                    C54.299,28.616,54.373,28.505,54.424,28.382z"/>
                                <path d="M36.501,33c-0.552,0-1,0.447-1,1v20h-32V2h32v20c0,0.553,0.448,1,1,1s1-0.447,1-1V1c0-0.553-0.448-1-1-1h-34
                                    c-0.552,0-1,0.447-1,1v54c0,0.553,0.448,1,1,1h34c0.552,0,1-0.447,1-1V34C37.501,33.447,37.053,33,36.501,33z"/>
                    </svg>
                    <span className="ml-3 ">Leave</span>
                </a>
                }
 
                
            </div>

        </>   
        
    )
}