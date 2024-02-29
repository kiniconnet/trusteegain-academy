import React from 'react'
import Conf from '../assets/conference.jpg'
import { GrStatusGood } from "react-icons/gr";

const AboutSection = () => {
  return (
    <>
        <section className='flex flex-col-reverse my-20 mx-5 gap-7 justify-center items-center md:flex-row '>
           <div className='rounded-2xl w-auto h-full overflow-hidden '>
                <img src={Conf}  />
           </div>
           <div>
                 <h2 className='text-slate-200 font-sans text-3xl mb-6 text-center'>Welcome to Trusteegain Institute of <span className='text-sky-400 font-bold'>React</span> and <span className='text-sky-700 font-bold'>Go</span>.</h2>
                 <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quod aliquid enim. Labore omnis totam repellendus natus magni officiis velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ullam quae labore similique possimus neque, laborum at accusantium reiciendis earum.</p>
                 <div className='flex gap-4 justify-evenly my-2 py-4 items-center '>

                    <div className='text-slate-100 flex gap-2 justify-center items-center bg-slate-800 p-2 rounded-xl hover:bg-slate-700'>
                        <GrStatusGood className='text-blue-500'/> Quality</div>

                     <div className='text-slate-100 flex gap-2 justify-center items-center bg-slate-800 p-2 rounded-xl hover:bg-slate-700'>
                        <GrStatusGood className='text-blue-500'/>Creativity</div>
                     <div 

                     className='text-slate-100 flex gap-2 justify-center items-center bg-slate-800 p-2 rounded-xl hover:bg-slate-700'>
                        <GrStatusGood className='text-blue-500'/>Innovation</div>
                 </div>
           </div>
        </section>
    </>
  )
}

export default AboutSection