import Head from "next/head";
import Link from 'next/link'
import { Menu, Transition } from "@headlessui/react";

export default function Layout({children}:any){
    return(
      <>
         <div className="text-white h-full   top-0 bg-gradient-to-b from-black w-full z-50 xxs:space-x-3">
        <Head>
              <link
                href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap"
                rel="stylesheet"
              />
            </Head>


<div className="relative  ">
  <div className=" max-w-8xl mx-auto px-4 sm:px-6 ">
    <div className="flex justify-between items-center  py-4 md:justify-start md:space-x-10">
    <nav className="hidden md:flex space-x-10 justify-start lg:w-0 lg:flex-1 ">
    <div className="relative">
        <Menu>
          <Menu.Button className=" group   rounded-md inline-flex items-center  focus:outline-none  " aria-expanded="false" >
          <span className="text-gray-400 cursor-pointer focus:outline-none  ">Projects</span>

            <svg className=" ml-2 h-5 w-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
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
              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                 
                  <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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
                  
                  <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
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
                 
                  <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
                 
                  <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
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
                 
                  <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
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
                  <a href="#" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                 
                    <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-3">Watch Demo</span>
                  </a>
                </div>

                <div className="flow-root">
                  <a href="#" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                  
                    <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="ml-3">Contact Sales</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
            </Menu.Items>
            </Transition>
          </Menu.Button>
        </Menu>

        </div>

        <Link href="/about"  ><a className="hover:text-gray-400 ">About Me</a></Link>
        <Link href="/caroussel"  ><a className="hover:text-gray-400 ">Caroussel</a></Link>

        <div className="relative">
      
          {/* <button type="button" className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
            <span>More</span>

            <svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button> */}

          {/* <!--
            'More' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          -->
          <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  <!-- Heroicon name: outline/support -->
                  <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">
                      Help Center
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Get all of your questions answered in our forums or contact support.
                    </p>
                  </div>
                </a>

                <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  <!-- Heroicon name: outline/bookmark-alt -->
                  <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">
                      Guides
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Learn how to maximize our platform to get the most out of it.
                    </p>
                  </div>
                </a>

                <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  <!-- Heroicon name: outline/calendar -->
                  <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">
                      Events
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      See what meet-ups and other events we might be planning near you.
                    </p>
                  </div>
                </a>

                <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  <!-- Heroicon name: outline/shield-check -->
                  <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">
                      Security
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Understand how we take your privacy seriously.
                    </p>
                  </div>
                </a>
              </div>
              <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                <div>
                  <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                    Recent Posts
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    <li className="text-base truncate">
                      <a href="#" className="font-medium text-gray-900 hover:text-gray-700">
                        Boost your conversion rate
                      </a>
                    </li>

                    <li className="text-base truncate">
                      <a href="#" className="font-medium text-gray-900 hover:text-gray-700">
                        How to use search engine optimization to drive traffic to your site
                      </a>
                    </li>

                    <li className="text-base truncate">
                      <a href="#" className="font-medium text-gray-900 hover:text-gray-700">
                        Improve your customer experience
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-5 text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> View all posts <span aria-hidden="true">&rarr;</span></a>
                </div>
              </div>
            </div>
          </div> */}
        </div>


      </nav>
      <div className="flex lg:justify-center justify-start  lg:w-0 lg:flex-1 ">
        <a href="#">
          <span className="sr-only">Workflow</span>
        
              <h1 className="text-4xl pb-2 tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="inline logo">J</span>
                <span className="inline text-gray-700 logo">M</span>
              </h1>
           
        </a>
      </div>
      <div className="-mr-2 -my-2 md:hidden">
        <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
          <span className="sr-only">Open menu</span>
        
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        {/* <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
          Sign in
        </a>
        <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
          Sign up
        </a> */}
      </div>
    </div>
  </div>

  {/* <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  --> */}
  <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
      <div className="pt-5 pb-6 px-5">
        <div className="flex items-center justify-between">
          <div>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"></img>
          </div>
          <div className="-mr-2">
            <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Close menu</span>
             
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-6">
          <nav className="grid gap-y-8">
            <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
             
              <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="ml-3 text-base font-medium text-gray-900">
                Analytics
              </span>
            </a>

            <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
            
              <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
              <span className="ml-3 text-base font-medium text-gray-900">
                Engagement
              </span>
            </a>

            <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
             
              <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="ml-3 text-base font-medium text-gray-900">
                Security
              </span>
            </a>

            <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
              
              <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span className="ml-3 text-base font-medium text-gray-900">
                Integrations
              </span>
            </a>

            <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
              
              <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="ml-3 text-base font-medium text-gray-900">
                Automations
              </span>
            </a>
          </nav>
        </div>
      </div>
      <div className="py-6 px-5 space-y-6">
        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
          <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
            Pricing
          </a>

          <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
            Docs
          </a>

          <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
            Help Center
          </a>

          <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
            Guides
          </a>

          <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
            Events
          </a>

          <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
            Security
          </a>
        </div>
        <div>
          <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
            Sign up
          </a>
          <p className="mt-6 text-center text-base font-medium text-gray-500">
            Existing customer?
            <a href="#" className="text-indigo-600 hover:text-indigo-500">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>






















      
      {children}
      <footer className="text-white fixed bottom-0 pb-5 w-full z-50">
        <div className="flex  lg:ml-10 lg:mr-10  pl-12 pr-12   space-y-4">
            <div className="flex  items-center text-white space-x-4  xxl:text-lg xl:text-sm lg:text-sm md:text-sm xs:text-sm xxs:text-xs font-bold flex-row w-full">
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
                <span className="inline xxl:text-sm text-xs break-normal xxl:truncate xl:truncate lg:truncate sm:truncate ">© 2021-XXXX Jabbour, M.</span>
            </div>
            
          </div>
            
        

        
        </footer>
    </div>
    </>
    )

}