import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header/>
      <Outlet/> // to pass this dyanmic . use this layout as a base
      <Footer/>
    </>
  )
}

export default Layout
