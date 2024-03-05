import React from 'react'
import Header from '../sharedcomponents/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../sharedcomponents/Footer'

const Main = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Main