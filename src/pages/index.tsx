import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import className from '../classNames/Home.module.css'
import { ThemeSwitcher } from '../core/components/Themes'
import router, { useRouter } from 'next/router'
import Layout from '../core/components/Layout'

const Home: NextPage = () => {
  return (
        <>
        <Layout>
          <div className='space-x-10 flex justify-center items-center '>
            <span className='n1 text-8xl'>J</span>
            <span className='n1 text-8xl'>A</span>
            <span className='n1 text-8xl'>B</span>
            <span className='n1 text-8xl'>B</span>
            <span className='n1 text-8xl'>O</span>
            <span className='n1 text-8xl'>U</span>
            <span className='n1 text-8xl'>R</span>
          </div>
          <div className='space-x-10 flex justify-center items-center '>
            <span className='n1 text-8xl'>M</span>
            <span className='n1 text-8xl'>E</span>
            <span className='n1 text-8xl'>H</span>
            <span className='n1 text-8xl'>D</span>
            <span className='n1 text-8xl'>I</span>

          </div>
          
        </Layout>
      

      </>
      )
    }
    
    export default Home




