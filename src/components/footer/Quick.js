import React, { useEffect, useState } from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { quickLinks } from '../../middleware/Api'

const Quick = () => {

    let [quick, setQuicks] = useState([])

    useEffect(()=>{
        setQuicks(quickLinks)
    },[])

     
  return (
    <div>
        <h2 className='primary-text mb-3 fs-4'>Quick Links</h2>
      <Nav className="flex-column">
        {quick.map((item, index)=>(
        <Link key={index} className='text-decoration-none py-2' to={item.link}>{item.name}</Link>
        ))}            
    </Nav>
    </div>
  )
}

export default Quick