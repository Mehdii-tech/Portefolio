import emailjs from '@emailjs/browser'
import { useState } from "react"
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
    const initialStateForm ={     
       title:'' ,
       paragraph:''
    }
    const [formSubmitted, setFormSubmitted]=useState({
      title:'' ,
      paragraph:'',
    })
  
    const [captchaResponse, setCaptchaResponse] = useState(null);



    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm({
        resolver: joiResolver(
          Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: false } }).required(),
            company: Joi.string().allow(null),
            message: Joi.string().required()
          }),
        ),
      })

      const successCallback = (response:any) =>{
        setCaptchaResponse(response)
      }


      const sendEmail = async (data:UserCredential) => {

        const params = {
          ...data,
          'g-recaptcha-response': captchaResponse ,
        };
      
    
      emailjs.init("user_0EML66OWCx4yl7fQTQgqg")
       setFormSubmitted({ title: 'Sending message...', paragraph: '' });
      await emailjs.send("service_2ls4mkr", "template_wcj72xs", params)
          .then(({ status }) => {
            if (status === 200) {
              setInterval(()=>{setFormSubmitted(initialStateForm)},5000)
              setFormSubmitted({ title: 'Message has been sent', paragraph: 'Mehdi will be in contact with you soon.' });
              reset()
              setCaptchaResponse(null)
              
            } else {
              setInterval(()=>{setFormSubmitted(initialStateForm)},5000)
              setFormSubmitted({ title: 'Unexpected status code returned from EmailJS, try again later', paragraph: 'Please contact either by email.' });
              setCaptchaResponse(null)
            }
          }, (err) => {
            // eslint-disable-next-line no-console
            console.log(err);
            setInterval(()=>{setFormSubmitted(initialStateForm)},5000)
            setFormSubmitted({ title: 'Error sending message, try again later', paragraph: 'Please contact either by email.' });
            setCaptchaResponse(null)
          });
      };
    
    return(
      <div className=" container mx-auto px-4 my-auto sm:overflow-y-hidden   sm:pb-20 pb-32 ">
                       <style jsx global>{`
      body {
        overflow-y: visible;
      }
    `}</style>
      <form onSubmit={handleSubmit(sendEmail)} className=" w-full max-w-lg  space-y-3 ">
      <div className="flex flex-wrap justify-center -mx-3 ">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-name">
              Name
          </label>
          <input className={(errors.name?.message ? " border-red-500 ": " " ) + "appearance-none block w-full bg-gray-200 text-black  border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"} id="grid-name" type="text" placeholder="John" {...register("name") } ></input>
          {errors.name && <p className=" text-red-500 text-xs italic ">{errors.name?.message}</p>}{/* <p className=" text-xs italic">Please fill out this field.</p> */}
          </div>
      </div>
      <div className="flex flex-wrap justify-center -mx-3 ">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-password">
              E-mail
          </label>
          <input {...register("email")} className={(errors.email?.message ? " border-red-500 " : " border-gray-200  " ) + "appearance-none block w-full bg-gray-200 text-black border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"} id="email" type="email" placeholder="xxxxx@mail.com"></input>
          {errors.email && <p className=" text-red-500 text-xs italic ">{errors.email?.message}</p>}
          </div>

      </div>
      <div className="flex flex-wrap justify-center -mx-3 ">
      <div className="w-full  md:w-1/2 px-3">
          <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-company">
              Company
          </label>
          <input {...register('company')} className="appearance-none block w-full bg-gray-200 text-black  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-company" type="text"></input>
          {errors.company && <p className=" text-red-500 text-xs italic ">Even you don't have a Company put something</p>}
          </div>
      </div>
      <div className="flex flex-wrap justify-center -mx-3 ">
          <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-password">
              Message
          </label>
          <textarea {...register("message")} className={(errors.message?.message ? " border-red-500 " : " border-gray-200  " ) +" no-resize appearance-none block w-full bg-gray-200 text-black border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48"} id="message" placeholder={"Hello Mehdi,"}></textarea>
          {errors.message && <p className=" text-red-500 text-xs italic ">{errors.message?.message}</p>}
          </div>
      </div>
      <div className="flex flex-wrap justify-center -mx-3 ">
          <div className=" w-full md:w-1/2 px-3">            
          <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
              onChange={successCallback}
              className='block w-full '
            /> 
            </div>
      </div>
      <div className="flex flex-wrap justify-center -mx-3 ">
          <div className=" w-full md:w-1/2 px-3 ">      
          <button
                type="submit"
                className="bg-gray-800 hover:bg-gray-700 transition rounded-md focus:text-gray-50 hover:text-gray-50  p-4 text-sm font-bold"
                disabled={!captchaResponse}
              >
                Send Message!
              </button>
          {/* <button  className="shadow bg-gray-500 cursor-pointer hover:bg-gray-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" type="submit">
              Send
          </button> */}
          </div>
          <div className="md:w-2/3"></div>
          <div className="flex flex-col items-center">
            <h3 className="text-lato text-2xl font-light text-white">{formSubmitted.title}</h3>
            <p>{formSubmitted.paragraph}</p>
          </div>
      </div>
      </form>
  </div>
    )
  } 