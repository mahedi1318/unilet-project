import React from 'react'
import { Link } from 'react-router-dom'
import {ImLocation} from "react-icons/im"
import {BsArrowRight} from "react-icons/bs"

const WorkContant = () => {
  return (
    <div className='w-75 text-right d-flex' style={{marginLeft: "auto"}}>
        <div className='mt-2'>
            <ImLocation className='fs-4 primary-text' />
        </div>
        <div className='' style={{marginLeft: "20px"}}>
            <h3 className='primary-text'>Search for the address</h3>
            <p className='lh-base text-color mt-2 mb-4'>Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make</p>
                <Link className='btn btn-info text-white fw-bold py-2'>Know More <BsArrowRight className='fs-5' /> </Link>
        </div>
    </div>
  )
}

export default WorkContant