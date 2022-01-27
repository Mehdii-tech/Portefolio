import { NextPage } from "next";
import Layout from "../core/layouts/MainLayout";
import FormContact from "../core/components/Contact";


const Contact:NextPage=()=>{

    return(
        <Layout>
            <div className="flex-col mx-auto text-center">
                    <div className=' space-x-32 justify-center items-center '>
                        <span className='n0 text-7xl'>C</span>
                        <span className='n0 text-7xl'>O</span>
                        <span className='n0 text-7xl'>N</span>
                        <span className='n0 text-7xl'>T</span>
                        <span className='n0 text-7xl'>A</span>
                        <span className='n0 text-7xl'>C</span>
                        <span className='n0 text-7xl'>T</span>
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