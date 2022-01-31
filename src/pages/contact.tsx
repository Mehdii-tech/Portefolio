import { NextPage } from "next";
import Layout from "../core/layouts/MainLayout";
import FormContact from "../core/components/Contact";


const Contact:NextPage=()=>{

    return(
        <Layout>
            <div className="flex-col mx-auto text-center">
                    <div className=' n0 text-5xl xs:text-6xl lg:text-7xl xs:space-x-10 lg:space-x-32 justify-center items-center '>
                        <span >C</span>
                        <span >O</span>
                        <span >N</span>
                        <span >T</span>
                        <span >A</span>
                        <span >C</span>
                        <span >T</span>
                    </div>
                    {/* <div className=' space-x-32 justify-center items-center '>
                        <span className='n1 text-8xl'>W</span>
                        <span className='n1 text-8xl'>H</span>
                        <span className='n1 text-8xl'>A</span>
                        <span className='n1 text-8xl'>T</span>
                        <span className='n1 text-8xl'>Y</span>
                        <span className='n1 text-8xl'>O</span>
                        <span className='n1 text-8xl'>U</span>
                        <span className='n1 text-8xl'>W</span>
                        <span className='n1 text-8xl'>A</span>
                        <span className='n1 text-8xl'>N</span>
                        <span className='n1 text-8xl'>T</span>
                </div> */}
            </div>          
            <FormContact />
        </Layout>
    )
}
export default Contact