import Link from 'next/link'
import { Menu, Transition } from "@headlessui/react";
import { useRouter  } from "next/router";
import userData from '../constants/personaldata';
import useSound from 'use-sound';
import music from '../../../public/assets/sounds/sound.mp3';

export default function Layout(props:any){
    
    const router = useRouter()

    const [play] = useSound(music);

    const swipe = (number:number) =>{
      play()
      props.swiped(number)
    }
    
    return(
          
         <div className=" top-0  w-full h-full  xxs:space-x-3" >
               <style jsx global>{`
      body {
        background-color: ${props.bg ? props.bg : '#141414'};
        color: ${props.text ? props.text : '#c5cec3'};
      }
    `}</style>
         
<div className={(router.pathname === '/' ? ' xs:pb-0 pb-32 ':'')+"relative"}>
  <div className="z-50">
    <div className="flex justify-between lg:ml-10 lg:mr-10 z-50 pl-12 pr-12 items-center  py-8 md:justify-start md:space-x-10">
    <nav className=" inline-flex  space-x-6 justify-start md:w-0 md:flex-1 ">
    <Link  href="/"><a onClick={()=>swipe(0)} className=" cursor-pointer font-medium n2 sm:text-5xl text-4xl ">JABBOUR</a></Link>
    
   
    <div className="relative pt-4 sm:pt-6">
      <div className=" hidden xs:inline-flex sm:hidden  space-x-6 ">
        <Link  href="/">
        <a onClick={play} className="  group text-tiny sm:text-base  hover:text-gray-400 cursor-pointer  rounded-md  items-center  focus:outline-none font-bold  xs:font-normal xxs:font-light " aria-expanded="false" >
          Works
        </a></Link>
        <Link  href="/about">
        <a onClick={play} className="  group text-tiny sm:text-base   hover:text-gray-400 cursor-pointer  rounded-md  items-center  focus:outline-none font-bold  xs:font-normal xxs:font-light " aria-expanded="false" >
          ABOUT ME
        </a></Link>
      </div>
        <Menu>
        <Menu.Button as="a" onClick={play} className=" hidden  sm:inline-flex group text-tiny sm:text-base   hover:text-gray-400 cursor-pointer underline rounded-md  items-center  focus:outline-none font-bold  xs:font-normal xxs:font-light " aria-expanded="false" >
                         Works

            <svg className=" ml-2 h-5 w-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            </Menu.Button>
            <Transition
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
            >
            <Menu.Items as="div">
          <div className="absolute z-10 -ml-4 mt-3 transform px-2  sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="relative  grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                 
                  <svg className="flex-shrink-0 h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">
                      Analytics
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Get a better understanding of where your traffic is coming from.
                    </p>
                  </div>
                </a>

                <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  
                  <svg className="flex-shrink-0 h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">
                      Engagement
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Speak directly to your customers in a more meaningful way.
                    </p>
                  </div>
                </a>

                <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                 
                  <svg className="flex-shrink-0 h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">
                      Security
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Your customers&#039; data will be safe and secure.
                    </p>
                  </div>
                </a>

                <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                 
                  <svg className="flex-shrink-0 h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">
                      Integrations
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Connect with third-party tools that you&#039;re already using.
                    </p>
                  </div>
                </a>

                <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                 
                  <svg className="flex-shrink-0 h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">
                      Automations
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Build strategic funnels that will drive your customers to convert
                    </p>
                  </div>
                </a>
              </div>
              <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                <div className="flow-root">
                  <Link href="/">
                  <a onClick={()=>swipe(1)} className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                    <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-3">Watch Demos</span>
                  </a></Link>
                </div>

                <div className="flow-root">
                  <Link href="/contact">
                  <a onClick={play} className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                  
                    <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="ml-3">Contact Me</span>
                  </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
            </Menu.Items>
            </Transition>
          
        </Menu>

        </div>
        {router.pathname!='/about' &&
        <Link href="/about"  ><a onClick={play} className=" sm:inline-flex hidden hover:text-gray-400 font-medium pt-2 sm:pt-6 text-tiny sm:text-base  ">ABOUT ME</a></Link>
        }
        {router.pathname!="/contact" && 
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <Link href='/contact'>
                  <a onClick={play} className=" flex items-center rounded-md text-base font-medium ">
                  
                    <svg className="flex-shrink-0 xl:h-6 lg:w-6 md:h-5 md:w-5 h-4 w-4 animate-wiggle " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="ml-2 hover:animate-bounce ">CONTACT ME</span>
                  </a>
          </Link>
          </div>}



      </nav>
 
      <div className=" -mr-2 -my-2  md:hidden hidden xs:block justify-end ">
      <Link href='/contact'>
        <a onClick={play} className="inline-flex items-center justify-center p-2 rounded-md   focus:outline-none  " aria-expanded="false">
        <span className="sr-only">Open menu</span>
        
        <svg className="flex-shrink-0 xl:h-6 lg:w-6 md:h-5 md:w-5 h-4 w-4 animate-wiggle  " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        </a>
      </Link>
      </div>
      <div className="-mr-2 -my-2 xs:hidden ">
        <Menu>
        <Menu.Button as="a" onClick={play} className={` rounded-md p-2 inline-flex items-center justify-center text-[${props.text}] outline-none focus:outline-none `} aria-expanded="false" > 
          <span className="sr-only">Open menu</span>
        
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        
        </Menu.Button>
        <Menu.Items as="div">
        <div className="absolute outline-none focus:outline-none right-0 z-5 -ml-4 mt-3 transform px-2  sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="relative  grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                <Link  href="/">
                  <a onClick={()=>swipe(1)} className="-m-3 p-3 flex items-start rounded-lg text-base font-medium text-gray-900 hover:bg-gray-100">
                    <svg className="flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="ml-2">
                    <span className="text-base font-medium">Watch Demos</span>
                    </div>
                  </a>
                </Link>
                <Link href="/about">
                <a onClick={play}  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 text-gray-900 ">
                 
                <svg className="flex-shrink-0 h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                 <div className="ml-2">
                   <span className="text-base font-medium ">
                     About me
                   </span>
                 </div>
               </a>
               </Link>
               <Link href="/contact">
                <a onClick={play}  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 text-gray-900 ">
                 
                <svg className=" flex-shrink-0  h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  <div className="ml-2">
                    <span className="text-base font-medium ">
                      Contact me
                    </span>
                  </div>
                </a>
                </Link>
              </div>
            </div>
          </div>

        </Menu.Items>

        </Menu>

      </div> 

    </div>
  </div>
  
  

   
</div>


<div >{props.children}

</div>

















      
      
        <footer className=" absolute w-full bottom-0  mb-15  ">
        
        <Transition
        enter="transform transition duration-[400ms]"
        enterFrom="opacity-0 scale-0 "
        enterTo="opacity-100 rotate-0 scale-125 "
        leave="transform  transition ease-in-out"
        leaveFrom="opacity-100 rotate-0 scale-100 "
        leaveTo="opacity-0 scale-95 "
          show={!props.clicked && router.pathname==='/'}
          className={"flex relative  pb-4   bottom-0 items-end justify-center space-y-2  xs:font-light xxs:font-extralight font-normal "}
        >
        
          
              {props.index != 3 ?
                              <>{!props.mobile ?                        <>      <span className=" mt-16  pr-2 ">Scroll</span><div className="scroll-downs  ">
                <div className="mousey border-white fixed ">
                  <div className="scroller  bg-white"></div>
                </div>

              </div></>:
              <div className='wrapper'>
                <svg id="Swipe-vertical_1" className='inline-block w-20 h-20 ' data-name="Swipe vertical 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <path className="hand-y" fill={props.text} d="M131.09,69.21l-34,24.17-21.6-21.6a9.25,9.25,0,0,0-13.08,0h0a9.25,9.25,0,0,0,0,13.08L103,125.43l-14.18-1.08c-5.11,0-8.72,3.22-9.25,9.25,0,0-1,9.25,3.83,9.25h48l30.14-30.14A9.25,9.25,0,0,0,162.72,101L143.43,72.11A9.28,9.28,0,0,0,131.09,69.21Z"/>
                <g className="swipe-vertical">
                  <path className="line-vertical" fill={props.text} d="M43.94,94.27c-12.46-19.69,0-37,0-37"/>
                  <polyline className="arrow-down" fill={props.text} points="47.93 88.53 45.35 96.75 45.33 96.75 37.11 94.17"/>
                  <polyline className="arrow-up" fill={props.text} points="46.59 64.92 44.01 56.69 43.98 56.7 35.76 59.28"/>
                </g>
              </svg>
              </div>
              
              }

              </> : 
                            <svg onClick={()=>props.swiped(0)} className="w-8 h-8 cursor-pointer hover:animate-bounce mr-5 " version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                            viewBox="0 0 330 330">
                         <path fill={props.text} id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
                           l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
                           C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"/>
                         </svg> 
              
        
            
            }


              
        </Transition>
     

          <div className="flex lg:ml-9 lg:mr-9   pl-10 pr-10 ">
              <div className="flex items-center  space-x-4   flex-row w-full">
                <ul className="  text-left space-y-2 pb-1  ">
                <li className="">
                <Link href="mailto:mehdi.jabbour@gmail.com">
                  <a target='_blank' className='text-base font-normal '>
                  <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          className="bi bi-linkedin h-5 w-5 hover:text-white"
                          viewBox="0 0 24 24"
                        >
                       <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z"/>
                 </svg> </a>                
                </Link> 
                </li>
                <li className="">
                  <Link href={userData.socialLinks.linkedin}>            
                      <a
                        target="_blank"
                        className="text-base font-normal "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-linkedin h-5 w-5 hover:text-blue-400"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                      </a>
                  </Link> 
                </li>
                <li className="">
                  <Link href={userData.socialLinks.github}  >
                    <a
                        target="_blank"
                        className="text-base font-normal "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="bi bi-github h-5 w-5 hover:text-indigo-400 "
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                    </Link>  
                </li>
              </ul>
              </div>
              <div className="flex items-end justify-end xs:font-light xxs:font-extralight font-normal ">
                  <span className="inline pb-2 text-xxs sm:text-xs break-normal xxl:truncate xl:truncate lg:truncate sm:truncate ">© 2022-XXXX Jabbour, M.</span>
              </div>
              
            </div>

          
          </footer>
          
      </div>
    
    )

}