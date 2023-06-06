import React from 'react'
import { Link } from 'react-router-dom'

const SlideContant1 = () => {
  return (
    <div className='text-center text-black toptext'>
        <h1 className=' textcolor'>Share Your Student Renting Experience</h1>
        <h4 className='text2 my-3'>Help other students make the right rental choice</h4>
        <Link className='btn btn-dark btn-lg text-white py-2 px-4 my-3' to="/propertys">Search Now</Link>
    </div>
  )
}

export default SlideContant1