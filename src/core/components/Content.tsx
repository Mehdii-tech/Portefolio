import { useEffect } from "react"


export default function Content({setState, text, index}:any){
    useEffect(()=>{ 
    switch (index) {
        case 1:{
            setState({text:'#ff7f00',bg:'#fffafa'})
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
                <img className="  filter w-[800px] h-[500px]  " src="https://swiperjs.com/demos/images/nature-2.jpg" />
                <div className={` text-[${text}] flex-col absolute text-center inset-0 z-10 justify-start items-start`}>
                        <div className=' space-x-72 justify-center items-center '>
                    <span className='n1 text-8xl'>O</span>
                    <span className='n1 text-8xl'>C</span>
                    <span className='n1 text-8xl'>E</span>
                    <span className='n1 text-8xl'>A</span>
                    <span className='n1 text-8xl'>N</span>
                </div>
                <div className=' space-x-32 justify-center items-center '>
                    <span className='n1 text-8xl'>D</span>
                    <span className='n1 text-8xl'>R</span>
                    <span className='n1 text-8xl'>I</span>
                    <span className='n1 text-8xl'>V</span>
                    <span className='n1 text-8xl'>E</span>

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