import React, { useState } from 'react'
import style from './navbar.module.css'
import Logo from './Logo';
import { motion } from "framer-motion"

// External imports
import { RiMenu4Fill } from "react-icons/ri";
import { CiMenuFries } from "react-icons/ci";
import { IoIosLogIn } from "react-icons/io";


const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

const Navbar = () => {
    const { navbarContainer,
             navMenuBar,
             navUnorderList,
             navLink
        } = style;

const [isToggle, setIsToggle]= useState(false)
    
  return (
    <div>

    <nav className={navbarContainer}>
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-6 p-4">
            <Logo />
       
        <button type="button"  className={navMenuBar}
                 onClick={() => setIsToggle((prev) => !prev)}>
                {isToggle ? <RiMenu4Fill /> : <CiMenuFries />}
        </button>

        <motion.div  className={`w-full md:block md:w-auto ${isToggle || "hidden"}`}>
          <ul className={navUnorderList}>
            <li>
              <a href="#" className={navLink}>Home</a>
            </li>
            <li>
              <a href="#" className={navLink}>About</a>
            </li>
            <li>
              <a href="#" className={navLink}>Courses</a>
            </li>
            <li>
              <a href="#" className={navLink}>Contact</a>
            </li>
            <li>
              <a href="#" className={navLink}>Login <IoIosLogIn className='mx-2'/> </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar