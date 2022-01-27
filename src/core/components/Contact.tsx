import emailjs from 'emailjs-com';
import { useRef, useState } from "react"
import { useForm } from 'react-hook-form'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
import ReCAPTCHA from 'react-google-recaptcha';

export default function FormContact(){

    type UserCredential = {
        name:string
        email:string
        company?:string
        message:string
    }
    const [formSubmitted, setFormSubmitted]=useState({
      title:'' ,
      paragraph:'',
    })
    const [error, setError]=useState('')


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: joiResolver(
          Joi.object({
            name: Joi.string(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: false } }),
            company: Joi.string(),
            message: Joi.string()
          }),
        ),
      })



      const sendEmail = async (data:any) => {
        // let formState:UserCredential
        console.log(data)

        // const params = {
        //   ...data,
        //   'g-recaptcha-response': data.captchaValue ,
        // };
    
        // setFormSubmitted({ title: 'Sending message...', paragraph: '' });
        // await emailjs.send(process.env.EMAILJS_SERVICE_ID as string, process.env.EMAILJS_TEMPLATE_ID as string, params, process.env.EMAILJS_ID as string)
        //   .then(({ status }) => {
        //     if (status === 200) {
        //       setFormSubmitted({ title: 'Message has been sent', paragraph: 'Mike will be in contact with you soon.' });
        //     } else {
        //       setFormSubmitted({ title: 'Unexpected status code returned from EmailJS, try again later', paragraph: 'Please contact Mike either by phone or email.' });
        //     }
        //   }, (err) => {
        //     // eslint-disable-next-line no-console
        //     console.log(err);
        //     setFormSubmitted({ title: 'Error sending message, try again later', paragraph: 'Please contact Mike either by phone or email.' });
        //   });
      };
    
    return(
      <div className=" container mx-auto px-4  ">
      <form onSubmit={handleSubmit(sendEmail)} className=" w-full max-w-lg  ">
      <div className="flex flex-wrap justify-center -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-name">
              Name
          </label>
          <input className={(errors.name?.message ? " border-red-500 ": " " ) + "appearance-none block w-full bg-gray-200 text-black  border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"} id="grid-name" type="text" placeholder="John" {...register("name") } ></input>
          {errors.name?.message && <p className=" text-red-500 text-xs italic ">{errors.name?.message}</p>}{/* <p className=" text-xs italic">Please fill out this field.</p> */}
          </div>
          {/* <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-name">
              Name
          </label>
          <input className="appearance-none block w-full bg-gray-200  border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-name" type="text" placeholder="John"></input>
          <p className="text-red-500 text-xs italic">Please fill out this field.</p>
          </div> */}
      </div>
      <div className="flex flex-wrap justify-center -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-password">
              E-mail
          </label>
          <input {...register("email")} className={(errors.email?.message ? " border-red-500 " : " border-gray-200  " ) + "appearance-none block w-full bg-gray-200 text-black border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"} id="email" type="email" placeholder="xxxxx@mail.com"></input>
          {errors.email?.message && <p className=" text-red-500 text-xs italic ">{errors.email?.message}</p>}
          </div>

      </div>
      <div className="flex flex-wrap justify-center -mx-3 mb-6">
      <div className="w-full  md:w-1/2 px-3">
          <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-company">
              Company
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-black  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-company" type="text"></input>
          {/* <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p> */}
          </div>
      </div>
      <div className="flex flex-wrap justify-center -mx-3 mb-6">
          <div className="w-1/2 px-3">
          <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-password">
              Message
          </label>
          <textarea {...register("message")} className={(errors.message?.message ? " border-red-500 " : " border-gray-200  " ) +" no-resize appearance-none block w-full bg-gray-200 text-black border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48"} id="message" placeholder={"Hello Mehdi,"}></textarea>
          {/* <p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p> */}
          {errors.message?.message && <p className=" text-red-500 text-xs italic ">{errors.message?.message}</p>}
          </div>
      </div>
      <div className="flex flex-wrap justify-center -mx-3 mb-6">
          <div className="w-1/2 px-3">            
          <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
              onChange={sendEmail}
            /> 
            </div>
      </div>
      <div className="md:flex flex-wrap md:justify-center md:items-center">
          <div className="md:w-1/2 px-2 ">      

          <button className="shadow bg-gray-500 cursor-pointer hover:bg-gray-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" type="submit">
              Send
          </button>
          </div>
          <div className="md:w-2/3"></div>
      </div>
      </form>
  </div>
    )
  } 