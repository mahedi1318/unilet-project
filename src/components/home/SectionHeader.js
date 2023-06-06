import React from 'react'
import "../../assets/style/review.css"

const SectionHeader = (props) => {
  let {headername, headerdis} = props
  console.log(headername, headerdis)

  
  return (
    <div className='text-center' data-aos="fade-up">
        <h2 className='fs-2 fw-bold primary-text'>{headername}</h2>
        <p className='lh-base fs-poens md:w-75 m-auto'>{headerdis}</p>
    </div>
  )
}

export default SectionHeader