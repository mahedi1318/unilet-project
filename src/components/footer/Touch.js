import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { touchData } from '../../middleware/Api'


const Touch = () => {

    let [address, setAddress] = useState([])

    useEffect(()=>(
        setAddress(touchData)
    ),[])

    console.log(address)

  return (
    <div>
        <h2 className='primary-text mb-3 fs-4'>Stay In Touch</h2>
        <ListGroup>
           {address.map((item, index)=>(
                <ListGroup.Item style={{background: "#f6f6f6"}} key={index} className="border-0 p-0 py-2 d-flex w-75 "> <span className='fs-5 me-2 '>{item.icon}</span>{item.contact}</ListGroup.Item>        
           ))}
        </ListGroup>
    </div>
  )
}

export default Touch