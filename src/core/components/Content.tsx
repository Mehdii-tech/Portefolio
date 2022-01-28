import { useEffect } from "react"
import Image from "next/image";

export default function Content({setState, text, index}:any){
    useEffect(()=>{ 
    switch (index) {
        case 1:{
            setState({text:'#53bc48',bg:'#65635e'})
        }
        break;
        case 2:{
            setState({text:'#87ceeb',bg:'#dc143c'}) 
        }
        break;
    }
    },[setState])
    console.log( text, index,'text')
    return(
        <>
            {index===1 &&
            <div className=" relative w-max  h-max ">
                 <Image         
                    src="/assets/img/1/angular.jpg"
                    alt="loginpage"
                    width={600}
                    height={400}
                    priority
                /> 
                {/* <img className="  filter w-[800px] h-[500px]  " src="/assets/img/1/angular.jpg" /> */}
                <div className={` text-[${text}] flex-col absolute text-center inset-0 z-10 justify-start items-start`}>
                        <div className=' space-x-48 justify-center items-center mb-36 '>
                    <span className='n1 text-8xl'>S</span>
                    <span className='n1 text-8xl'>C</span>
                    <span className='n1 text-8xl'>H</span>
                    <span className='n1 text-8xl'>O</span>
                    <span className='n1 text-8xl'>O</span>
                    <span className='n1 text-8xl'>L</span>
                </div>
                <div className=' space-x-32 justify-center items-center '>
                    <span className='n1 text-8xl'>W</span>
                    <span className='n1 text-8xl'>O</span>
                    <span className='n1 text-8xl'>R</span>
                    <span className='n1 text-8xl'>K</span>

                </div>

                </div>
                
            </div>
            }
            {index===2 &&
            <div className=" relative w-max h-max ">
            <img className=" justify-center items-center text-center filter w-[800px] h-[500px]  " src="https://swiperjs.com/demos/images/nature-3.jpg" />
            <div className={` text-[${text}] flex-col absolute inset-0 z-10 justify-start items-start`}>
                    <div className=' space-x-52 justify-center items-center '>
                <span className='n1 text-8xl'>A</span>
                <span className='n1 text-8xl'>M</span>
                <span className='n1 text-8xl'>E</span>
                <span className='n1 text-8xl'>R</span>
                <span className='n1 text-8xl'>I</span>
                <span className='n1 text-8xl'>C</span>
                <span className='n1 text-8xl'>A</span>
                <span className='n1 text-8xl'>N</span>
            </div>
            <div className=' space-x-20 justify-center items-center '>
                <span className='n1 text-8xl'>D</span>
                <span className='n1 text-8xl'>R</span>
                <span className='n1 text-8xl'>E</span>
                <span className='n1 text-8xl'>A</span>
                <span className='n1 text-8xl'>M</span>

            </div>

            </div>
            
        </div>
            }

        </>   
        
    )
}