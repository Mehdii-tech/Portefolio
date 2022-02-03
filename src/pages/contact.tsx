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
            </div>          
            <FormContact />
        </Layout>
    )
}
export default Contact