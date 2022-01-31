import { Transition } from "@headlessui/react";
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
        <div className=" fixed left-20  flex justify-start ">

            <div className="flex-col text-left space-y-2  ">
                <li className="space-x-6 ">
                    <ul className="text-base text-black n0">COMPLETED</ul>
                    <ul className=" text-4xl n1">{completed}</ul>
                </li>
                <li className="space-x-6 ">
                    <ul className="text-base text-black n0 ">TYPE</ul>
                    <ul className="text-4xl n1">{type}</ul>
                </li>
                <li className="space-x-6">
                    <ul className="text-base text-black n0 ">ROLE</ul>
                    <ul className=" text-4xl n1">{role}</ul>
                </li>
                <li className="space-x-6 ">
                    <ul className="text-base text-black n0">CLIENT</ul>
                    <ul className=" text-4xl n1">{client}</ul>
                </li>
                <li className="space-x-6  ">
                    <ul className="text-base text-black n0">Subject</ul>
                    <ul className="w-20 leading-8 text-4xl n1">{subject}</ul>
                </li>



            </div>


           
            

        </div>
    )
}