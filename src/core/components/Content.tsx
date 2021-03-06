import { useEffect, useState } from "react"
import Image from "next/image";
import { Transition } from "@headlessui/react";
import school from '../../../public/assets/img/1/school.jpg'
import help from '../../../public/assets/img/1/help.jpg'
import demo1 from '../../../public/assets/img/1/demo1.gif'
import demo2 from '../../../public/assets/img/1/demo2.gif'
export default function Content({ setState, text, index }: any) {

    const [active, setActive] = useState(false);


    useEffect(() => {
        switch (index) {
            case 1: {
                setState({ text: '#53bc48', bg: '#5e7091' })
            }
                break;
            case 2: {
                setState({ text: '#2d60a8', bg: '#c38b71' })
            }
                break;
        }
    }, [setState])
    return (
        <>


            <div className=" relative w-max h-max ">
                <Transition
                    enter="transform transition duration-[400ms]"
                    enterFrom="opacity-0 scale-0 "
                    enterTo="opacity-100 rotate-0 scale-125 "
                    leave="transform  transition ease-in-out"
                    leaveFrom="opacity-100 rotate-0 scale-100 "
                    leaveTo="opacity-0 scale-95 "
                    show={!active}
                    className={" xxl:w-[1000px] xl:w-[850px] lg:w-[630px] md:w-[470px] sm:w-[400px] xs:w-[330px] xxs:w-[230px] "}
                >
                        {index === 1 &&
                            <Image
                                src={school}
                                alt="loginpage"
                                width={1000}
                                height={500}
                                className="  filter  rounded-lg  cursor-pointer "
                                priority={true}
                                layout="responsive"
                                placeholder='blur'
                                objectFit="cover"
                                quality={100}
                            />}
             {index===2 &&                 
                <Image         
                    src={help}
                    alt="loginpage"
                    width={800}
                    height={500}
                    className="  filter  rounded-lg  cursor-pointer "
                    priority={true}
                    placeholder='blur'
                    objectFit="cover"
                    quality={100}
                    layout="responsive"
                />
                
                } 
                    
                </Transition>
                <Transition
                    enter="transform transition duration-[400ms]"
                    enterFrom="opacity-0 scale-0 "
                    enterTo="opacity-100 rotate-0 scale-125 "
                    leave="transform  transition ease-in-out"
                    leaveFrom="opacity-100 rotate-0 scale-100 "
                    leaveTo="opacity-0 scale-95 "
                    show={active}
                    className={" xxl:w-[1000px] xl:w-[850px] lg:w-[630px] md:w-[470px] sm:w-[400px] xs:w-[330px] xxs:w-[230px] "}
                >
                    {index === 1 &&
                        <Image
                            src={demo1}
                            alt="loginpage"
                            width={800}
                            height={500}
                            className=" filter  rounded-lg"
                            priority={true}
                            objectFit="cover"
                            layout="responsive"
                            quality={100}
                        />
                    }
                    {index === 2 &&
                        <Image
                            src={demo2}
                            alt="loginpage"
                            width={800}
                            height={500}
                            className=" filter  rounded-lg"
                            priority={true}
                            objectFit="cover"
                            layout="responsive"
                            quality={100}
                        />
                    }

                </Transition>
                {!active ? 
                <div className={` text-[${text}] flex-col absolute text-center inset-0 z-10 justify-start items-start`}>
                    {index===1 &&
                    <>
                     <div className=' lg:space-x-24 md:space-x-20 sm:space-x-14 xs:space-x-10 xs:text-6xl space-x-5 text-45xl n1 sm:text-7xl md:text-75xl xl:text-8xl xl:space-x-36 justify-center  items-center md:-mb-5 lg:mb-16  '>
                                <span >S</span>
                                <span >C</span>
                                <span >H</span>
                                <span >O</span>
                                <span >O</span>
                                <span >L</span>
                            </div><div className=' n1 md:text-75xl sm:space-x-7 xs:space-x-6 xs:text-6xl space-x-3 text-45xl sm:text-7xl xl:text-8xl md:space-x-8 lg:space-x-14 xl:space-x-24 justify-center items-center '>
                                    <span >W</span>
                                    <span >O</span>
                                    <span >R</span>
                                    <span >K</span>

                                </div> 
                    </>
                    }
                    {index===2 &&
                        <><div className=' n1 xl:text-8xl xxs:text-5xl xxs:space-x-14  xs:text-6xl xs:space-x-24 sm:text-7xl lg:text-75xl xl:space-x-52 lg:space-x-44 sm:space-x-32 md:space-x-36 justify-center items-center xl:mb-0 md:mb-5 xxs:-mb-5   '>
                                <span >H</span>
                                <span >E</span>
                                <span >L</span>
                                <span >P</span>
                            </div><div className=' n1 xl:text-8xl xxs:text-5xl xs:text-6xl sm:text-7xl lg:text-75xl xxs:space-x-9 xs:space-x-20  justify-center items-center '>
                                    <span >Y</span>
                                    <span >O</span>
                                    <span >U</span>
                                    <span >R</span>
                                </div><div className=' n1 xs:text-5xl xxs:text-4xl xxs:space-x-6 sm:text-6xl sm:space-x-10 lg:text-7xl xl:space-x-20 xs:space-x-9 md:space-x-14 justify-center items-center '>
                                    <span >N</span>
                                    <span >E</span>
                                    <span >I</span>
                                    <span >G</span>
                                    <span >H</span>
                                    <span >B</span>
                                    <span >O</span>
                                    <span >R</span>

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