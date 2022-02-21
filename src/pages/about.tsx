import type { NextPage } from 'next'
import Layout from '../core/layouts/MainLayout'
import Image from 'next/image';
import userData from "../core/constants/personaldata";
import js from '../../public/assets/img/stacks/javascript.png'

const About: NextPage = () => {
  return (
    <>
      <Layout>

    <section className=" sm:pb-20 pb-52  sm:overflow-y-hidden  ">
    <style jsx global>{`
      body {
        overflow-y: visible;
      }
    `}</style>
      <div className=" xl:max-w-6xl max-w-2xl  xs:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto  md:h-48 ">
        <h1 className=" text-6xl md:text-75xl font-bold  text-center md:text-left">
          About Me.
        </h1>
      </div>
      <div className="  ">
        <div className="text-container max-w-2xl  xs:max-w-3xl md:max-w-4xl xl:max-w-6xl lg:max-w-5xl  mx-auto ">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}. Currently I am studying at {" "}
            <a 
              className="bg-[#65635e] rounded-md px-2 py-1 text-white"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} ✈️
            </a>
          </p>
        </div>
      </div>
      <div className=" px-4 md:mr-24 ">
        <div className=" md:pt-20 grid grid-cols-1 md:grid-cols-3 max-w-2xl  xs:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto gap-y-20 xl:gap-x-36 gapx-x-20 md:gap-x-48 md:space-x-20 lg:space-x-8 ">
          {/* Social Buttons */}
          <div className="inline-flex flex-col   ">
          <div  className='   justify-start items-center mb-10  hidden md:flex '>
            <div className="p perspective-text">
              <div className="p perspective-line">
                <p></p>
              </div>
              <a href={userData.cv} download  >
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
              </div></a>
            </div>
          </div>
          </div>
          
          <div className=" text-container col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-[#c38b71] mb-4  "
              >
                {desc}
              </p>
            ))}

            <h1 className="bg-[#65635e] text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8">

              <img
                src="assets/img/stacks/javascript.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="assets/img/stacks/typescript.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="assets/img/stacks/rest-api.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="assets/img/stacks/microservices.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="assets/img/stacks/nodejs.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="assets/img/stacks/nestjs.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="assets/img/stacks/springboot.png"
                className="h-20 w-20 mx-4 my-4"
              />              
              <img
                src="assets/img/stacks/angular.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="assets/img/stacks/react.png"
                className="h-20 w-20 mx-4 my-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

      </Layout>
    </>
  )
}

export default About




