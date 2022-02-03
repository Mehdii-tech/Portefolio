import { useEffect } from "react";

export default function Description({setStateWork, index, completed,type, role, client, subject }:any){
    useEffect(()=>{ 
    switch (index) {
        case 1:{
            setStateWork({completed:'SEPTEMBER 2021',type:'MANAGEMENT',role:'FULLSTACK DEV',client:'DBIOTECH',subject:'School management application'}) 
        }
        break;
        case 2:{
            setStateWork({completed:'IN PROGRESS',type:'CHARITY',role:'FULLSTACK DEV',client:'AIDE TON PROCHAIN',subject:'An application allowing the contribution to this charitable association'}) 
        }
        break;
    }
    },[setStateWork])
    return(                                      
        <div className=" sm:fixed lg:left-20 sm:left-10 items-center justify-center flex  sm:justify-start ">

            <div className="flex-col sm:text-left text-center lg:space-y-2  ">
                <li className="sm:space-x-6 ">
                    <ul className="text-base text-black n0">COMPLETED</ul>
                    <ul className=" lg:text-3xl xl:text-4xl text-2xl n1">{completed}</ul>
                </li>
                <li className=" sm:space-x-6 ">
                    <ul className="text-base text-black n0 ">TYPE</ul>
                    <ul className="lg:text-3xl xl:text-4xl  text-2xl n1">{type}</ul>
                </li>
                <li className=" sm:space-x-6">
                    <ul className="text-base text-black n0 ">ROLE</ul>
                    <ul className=" lg:text-3xl xl:text-4xl  text-2xl n1">{role}</ul>
                </li>
                <li className=" sm:space-x-6 ">
                    <ul className="text-base text-black n0">CLIENT</ul>
                    <ul className=" lg:text-3xl xl:text-4xl  text-2xl n1">{client}</ul>
                </li>
                <li className=" sm:space-x-6  ">
                    <ul className="text-base text-black n0">Subject</ul>
                    <ul className=" sm:w-20 sm:leading-8 text-2xl xl:text-4xl  lg:text-3xl n1">{subject}</ul>
                </li>



            </div>


           
            

        </div>
    )
}