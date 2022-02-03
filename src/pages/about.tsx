import type { NextPage } from 'next'
import Layout from '../core/layouts/MainLayout'
import Link from 'next/link'

const About: NextPage = () => {
  return (
    <>
      <Layout>
        <div className=" flex mx-auto space-x-6 xl:space-x-48 sm:pb-12 pb-32 ">
          <div className=' ml-auto  justify-center items-center mb-10  hidden lg:flex '>
            <div className="p perspective-text">
              <div className="p perspective-line">
                <p></p>
              </div>
              <div className="p perspective-line">
                <p>Patience</p>
                <p>Is The</p>
              </div>
              <div className="p perspective-line">
                <p>Is The</p>
                <p>Greatest</p>
              </div>
              <div className="p perspective-line">
                <p>Greatest</p>
                <p>Virtue</p>
              </div>
              <div className="p perspective-line">
                <p>Virtue</p>
                <p></p>
              </div>
            </div>
          </div>

            <div className=" xxl:justify-start  h-full  mr-auto  flex items-center justify-center ">
            <div className=" flex flex-col xxl:w-1/2 xl:w-1/3 lg:w-3/4 md:w-3/4 sm:w-3/4 space-y-10 py-12 ">
              <p className="  font-bold text-gray-700 rounded-full flex items-center justify-center font-mono">Hello World</p>
              <h1 className="text-4xl space-y-2 tracking-tight font-extrabold  sm:text-5xl md:text-7xl">
                <p className="block hover:animate-bounce  xl:inline">Jabbour.M, </p>
                <span className="block text-gray-700 xl:inline">full stack web developer</span>
              </h1>

              <p className=" leading-8  mb-5 text-base font-medium tracking-tighter  sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                who loves sleek designs and interfaces. Passionate about security/ia and heavy work, i&apos;m here to do what you want
              </p>

              <br></br>
              <div className=" inline-flex  space-x-4 xxl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-xs xs:text-xs xxs:text-xs font-bold px-2  flex-row w-full ">

                <Link href="/" >
                  <a className="space-x-1 animate-bounce  inline-flex "><span className="font-normal">↗</span><span className="tracking-tight">See my Projects</span></a>
                </Link>
                <Link href="/contact" >
                  <a className=" inline-flex  space-x-1 cursor-pointer  ">
                    <svg className="w-4  text-gray-700" viewBox="0 0 24 24"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8zm-9 6v-7h2v7h-2zm1-8.75a1.21 1.21 0 0 1-.877-.364A1.188 1.188 0 0 1 10.75 8c0-.348.123-.644.372-.886.247-.242.54-.364.878-.364.337 0 .63.122.877.364.248.242.373.538.373.886s-.124.644-.373.886A1.21 1.21 0 0 1 12 9.25z" fill="currentColor"></path></svg>
                    <span className="text-gray-700 tracking-tight">More informations</span>
                  </a>
                </Link>
              </div>
            </div>
          </div> 

</div>

      </Layout>
    </>
  )
}

export default About




