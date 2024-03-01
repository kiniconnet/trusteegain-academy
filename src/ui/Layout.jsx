import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const AppLaout = () => {
  return (
    <>
        <Navbar />
            <Outlet />
        <Footer />
    </>
  )
}

export default AppLaout