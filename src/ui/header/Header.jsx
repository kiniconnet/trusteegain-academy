import React from 'react'
import style from "./header.module.css"

// External export
import { IoMdArrowForward } from "react-icons/io";


const Header = () => {
    const { mainHeader } = style;
  return (
    <>
        <section class="bg-center bg-no-repeat bg-cover bg-[url('./assets/background.jpeg')] bg-slate-800 bg-blend-multiply ">
            <div className={mainHeader}>
                 <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                    We invest in the world’s potential
                 </h1>
 
            <h3 class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">By Focusing on How <span className='text-sky-400 font-bold'>React</span> and <span className='text-sky-600 font-bold'>Go</span> works in great detail.</h3>

            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Get started
                    <IoMdArrowForward className='text-4'/>
                </a>
                <a href="#" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-slate-200 focus:ring-4 focus:ring-gray-400">
                    Learn more
                </a>  
            </div>
        </div>
    </section>
    </>
  )
}

export default Header