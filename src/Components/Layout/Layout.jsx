/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <div className='container flex justify-center my-12'>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
    </>
  )
}
