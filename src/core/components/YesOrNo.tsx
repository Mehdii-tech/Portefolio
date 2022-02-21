import { Transition } from '@headlessui/react';


export default function Yes(props:any){
    return(
        <><Transition
            show={props.isShown}
            enter-active-class="transition duration-300 ease-out transform"
            enter-class="scale-95 opacity-0"
            enter-to-class="scale-100 opacity-100"
            leave-active-class="transition duration-150 ease-in transform"
            leave-class="scale-100 opacity-100"
            leave-to-class="scale-95 opacity-0"
            className="mb-10 marged "
        >
            <span className=' n0 text-2xl pt-8 flex cache '>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 font-bold animate-bounce  items-center justify-center " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                </svg>
            </span>

        </Transition><span className='n0 cache2 text-2xl'>Click here to see</span><span className='n1 text-5xl cache mt-16 '>OR</span></>


    )
}