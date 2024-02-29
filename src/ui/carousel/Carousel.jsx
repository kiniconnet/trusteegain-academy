import React from 'react'
import style from './carousel.module.css'
import { motion } from "framer-motion"

// Image imports
import logo from '../../assets/logo.png'
import Conference from '../../assets/conference.jpg'
import background from '../../assets/background.jpeg'

const Carousel = () => {
    const { logoSlides, sectionSlide }  = style; 

    if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
      addAnimation();
    }

    function addAnimation(){
      
    }
  return (
    <section className={sectionSlide}>
      <h4 className='text-slate-200 py-3 mb-3 capitalize font-mono'>Our Institute is recognized by:</h4>
        <div className={logoSlides}>
            <img src={logo} alt=""  />
            <img src={Conference} alt=""  />
            <img src={background} alt=""  />
            
        </div>
    </section>
  )
}

export default Carousel