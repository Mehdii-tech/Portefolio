import emailjs from 'emailjs-com';
import { useState } from "react"
import { useForm } from 'react-hook-form'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact(){
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

    const onSubmit = async (params: {'g-recaptcha-response': captchaValue, UserCredential: any[]}) => {
        const sendEmail = () => {      
                emailjs.init(process.env.EMAILJS_ID as string );
        
                await emailjs.send(process.env.EMAILJS_SERVICE_ID as string, process.env.EMAILJS_TEMPLATE_ID as string, params)
                .then((result) => {
                  setError(result.text);
                }, (error) => {
                  setError(error.text);
                });
            };
          }

    }
    return(

    )
}