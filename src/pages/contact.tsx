import { NextPage } from "next";
import Layout from "../core/layouts/MainLayout";
import FormContact from "../core/components/Contact";


const Contact:NextPage=()=>{

    return(
        <Layout>
            <div className=" xl:max-w-6xl flex-col  text-center max-w-2xl  xs:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto   ">
                <h1 className=" text-6xl md:text-75xl font-bold  text-center ">
                Contact Me.
                </h1>
            </div>  
            <FormContact />
        </Layout>
    )
}
export default Contact