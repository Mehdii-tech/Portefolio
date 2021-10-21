import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import className from '../classNames/Home.module.css'
import { ThemeSwitcher } from '../components/Themes'
import router, { useRouter } from 'next/router'

const Home: NextPage = () => {
  return (
        <>
      <div className="text-white    top-0 bg-gradient-to-b from-black w-full z-50 xxs:space-x-3">
        <div className="px-10 flex flex-wrap p-5  flex-col xl:flex-row md:flex-row sm:flex-row xs:flex-row xxs:flex-row  items-center">
          <div className="ml-auto flex flex-row space-x-6 xxl:w-10/12 xl:w-11/12 lg:w-10/12 md:w-10/12 sm:w-3/4 xs:w-3/4 xxs:w-9/12  xxl:text-lg xl:text-sm lg:text-sm md:text-sm xs:text-sm xxs:text-xs font-bold">

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

        <ThemeSwitcher/>
        </nav>
      </div>
    </div><div className="h-screen">

        <div className="absolute w-full h-48 bottom-0 background-gradient-to-t "></div>
        <img className="w-full h-screen object-cover  opacity: 1" alt="" title="" src="/oui.gif"></img>
        <footer className="text-white fixed bottom-0 pb-5 w-full z-50">
        <div className="flex  lg:ml-10 lg:mr-10  pl-12 pr-12   space-y-4">
            <div className="flex space-x-6 items-center text-white space-x-4  xxl:text-lg xl:text-sm lg:text-sm md:text-sm xs:text-sm xxs:text-xs font-bold flex-row w-full">
            <ul >
              <li className="animate-pulse">
              <a className="space-x-1 flex" href="mailto:mehdi.jabbour@gmail.com"><svg className="lg:w-5 md:w-3 sm:w-3 xs:w-2 xxs:w-2 text-gray-400"version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 122.88 95.02"  ><g><path d="M6.09,0h93.94c1.67,0,3.2,0.69,4.3,1.79c1.1,1.1,1.79,2.63,1.79,4.3v64.56c0,1.26-0.39,2.44-1.05,3.41 c-0.12,0.31-0.31,0.61-0.57,0.86c-0.17,0.16-0.36,0.3-0.57,0.4c-1.06,0.88-2.42,1.42-3.89,1.42H6.09c-1.67,0-3.2-0.68-4.3-1.79 C0.69,73.84,0,72.32,0,70.64V6.09c0-1.68,0.68-3.2,1.79-4.3C2.89,0.68,4.41,0,6.09,0L6.09,0L6.09,0z M116.79,95.02H18.43 c-1.67,0-3.2-0.69-4.3-1.79c-1.1-1.1-1.79-2.63-1.79-4.3v-6.12h4.62v7.54h101.36V18.54h-6.16v-4.67h4.62c1.67,0,3.2,0.68,4.3,1.79 c1.1,1.1,1.79,2.62,1.79,4.3v68.98c0,1.68-0.68,3.2-1.79,4.3C119.99,94.34,118.47,95.02,116.79,95.02L116.79,95.02L116.79,95.02z M4.67,68.08l32.92-33L4.67,8.24V68.08L4.67,68.08L4.67,68.08z M41.22,38.03L7.27,72.06h91.28L66.12,38.04l-10.69,9.11l0,0 c-0.84,0.72-2.09,0.76-2.98,0.04L41.22,38.03L41.22,38.03L41.22,38.03z M69.67,35.02l31.78,33.33V7.94L69.67,35.02L69.67,35.02 L69.67,35.02z M7.66,4.67l46.22,37.68L98.11,4.67H7.66L7.66,4.67L7.66,4.67z"/></g></svg><span className="tracking-tight">Email</span></a> 
              </li>
              <li className="animate-pulse">
              <a className="space-x-1 flex " href="https://instagram.com/m_ewew"><svg className="lg:w-4 md:w-3 sm:w-3 xs:w-2 xxs:w-2 text-gray-400"id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88"><title>instagram-logo-black-and-white</title><path d="M61.45,0C44.76,0,42.66.07,36.11.37A45.08,45.08,0,0,0,21.2,3.23a29.86,29.86,0,0,0-10.88,7.08,30.26,30.26,0,0,0-7.1,10.88A44.92,44.92,0,0,0,.37,36.11C.08,42.66,0,44.75,0,61.44S.07,80.21.37,86.77a45.08,45.08,0,0,0,2.86,14.91,30.12,30.12,0,0,0,7.08,10.88,30.13,30.13,0,0,0,10.88,7.1,45.17,45.17,0,0,0,14.92,2.85c6.55.3,8.64.37,25.33.37s18.77-.07,25.33-.37a45.17,45.17,0,0,0,14.92-2.85,31.54,31.54,0,0,0,18-18,45.6,45.6,0,0,0,2.86-14.91c.29-6.55.37-8.64.37-25.33s-.08-18.78-.37-25.33a45.66,45.66,0,0,0-2.86-14.92,30.1,30.1,0,0,0-7.09-10.88,29.77,29.77,0,0,0-10.88-7.08A45.14,45.14,0,0,0,86.76.37C80.2.07,78.12,0,61.43,0ZM55.93,11.07h5.52c16.4,0,18.34.06,24.82.36a34,34,0,0,1,11.41,2.11,19,19,0,0,1,7.06,4.6,19.16,19.16,0,0,1,4.6,7.06,34,34,0,0,1,2.11,11.41c.3,6.47.36,8.42.36,24.82s-.06,18.34-.36,24.82a33.89,33.89,0,0,1-2.11,11.4A20.35,20.35,0,0,1,97.68,109.3a33.64,33.64,0,0,1-11.41,2.12c-6.47.3-8.42.36-24.82.36s-18.35-.06-24.83-.36a34,34,0,0,1-11.41-2.12,19,19,0,0,1-7.07-4.59,19,19,0,0,1-4.59-7.06,34,34,0,0,1-2.12-11.41c-.29-6.48-.35-8.42-.35-24.83s.06-18.34.35-24.82a33.7,33.7,0,0,1,2.12-11.41,19,19,0,0,1,4.59-7.06,19.12,19.12,0,0,1,7.07-4.6A34.22,34.22,0,0,1,36.62,11.4c5.67-.25,7.86-.33,19.31-.34Zm38.31,10.2a7.38,7.38,0,1,0,7.38,7.37,7.37,7.37,0,0,0-7.38-7.37ZM61.45,29.89A31.55,31.55,0,1,0,93,61.44,31.56,31.56,0,0,0,61.45,29.89Zm0,11.07A20.48,20.48,0,1,1,41,61.44,20.48,20.48,0,0,1,61.45,41Z"/></svg><span className="tracking-tight">Instagram</span></a> 
              </li>
              <li className="animate-pulse">
              <a className="space-x-1 flex" href="https://github.com/Mehdi-githu"><svg className="lg:w-4 md:w-3 sm:w-3 xs:w-2 xxs:w-2 text-gray-400" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 640 640"><path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"/></svg><span className="tracking-tight">Github</span></a>  
              </li>
            </ul>


            </div>
            <div className="flex items-end justify-end font-normal ">
                <span className="inline xxl:text-sm text-xs break-normal xxl:truncate xl:truncate lg:truncate sm:truncate ">© 2021-XXXX Jabbour, M.‎</span>
            </div>
            
          </div>
            
        

        
        </footer>


      </div>
      

      </>
      )
    }
    
    export default Home




