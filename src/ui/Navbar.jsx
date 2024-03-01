import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import style from './navbar.module.css'
import Logo from './Logo';
import { motion } from "framer-motion"

// External imports
import { RiMenu4Fill } from "react-icons/ri";
import { CiMenuFries } from "react-icons/ci";
import { IoIosLogIn } from "react-icons/io";


 

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
              <Link to="/" className={navLink}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={navLink}>About</Link>
            </li>
            <li>
              <Link to="/courses" className={navLink}>Courses</Link>
            </li>
            <li>
              <Link to="/contact" className={navLink}>Contact</Link>
            </li>
            <li>
              <Link to="/login" className={navLink}>Login <IoIosLogIn className='mx-2'/> </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar