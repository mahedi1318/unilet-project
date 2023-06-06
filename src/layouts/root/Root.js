import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbars from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'


const Root = () => {
  return (
   <div>
      <Navbars/>
     <Outlet/>
     <Footer/>
   </div>
  )
}

export default Root