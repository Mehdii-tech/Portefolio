import emailjs from 'emailjs-com';
import { useState } from "react"
import { useForm } from 'react-hook-form'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
import ReCAPTCHA from 'react-google-recaptcha';

export default function FormContact(){
    const [error, setError]=useState('')
    type UserCredential = {
        name:string
        email:string
        company?:string
        message:string
    }
    
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

    const onSubmit = async (params:  UserCredential) => {
        const sendEmail = async () => {      
                emailjs.init(process.env.EMAILJS_ID as string );
        
                await emailjs.send(process.env.EMAILJS_SERVICE_ID as string, process.env.EMAILJS_TEMPLATE_ID as string, params)
                .then((result) => {
                  setError(result.text);
                }, (error) => {
                  setError(error.text);
                });
            
          }
        
    }
    return(
      <div className=" container mx-auto px-4  ">
      <form className=" w-full max-w-lg ">
      <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-name">
              Name
          </label>
          <input className="appearance-none block w-full bg-gray-200  border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-name" type="text" placeholder="John"></input>
          {/* <p className=" text-xs italic">Please fill out this field.</p> */}
          </div>
          {/* <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-name">
              Name
          </label>
          <input className="appearance-none block w-full bg-gray-200  border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-name" type="text" placeholder="John"></input>
          <p className="text-red-500 text-xs italic">Please fill out this field.</p>
          </div> */}
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-password">
              E-mail
          </label>
          <input className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="xxxxx@mail.com"></input>
          {/* <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p> */}
          </div>

      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full  md:w-1/2 px-3">
          <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-company">
              Company
          </label>
          <input className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-company" type="text"></input>
          {/* <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p> */}
          </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-1/2 px-3">
          <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-password">
              Message
          </label>
          <textarea className=" no-resize appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48" id="message" placeholder={"Hello Mehdi,"}></textarea>
          {/* <p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p> */}
          </div>
      </div>
      <div className="md:flex md:items-center">
          <div className="md:w-1/3">
          <button className="shadow bg-gray-500 hover:bg-gray-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
              Send
          </button>
          </div>
          <div className="md:w-2/3"></div>
      </div>
      </form>
  </div>
    )
  } 