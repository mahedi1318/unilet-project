import React, { useEffect, useState } from 'react'
import { ListGroup} from 'react-bootstrap'
import { socialData } from '../../middleware/Api'

const Social = () => {

  let [social, setSocial] = useState([])

  useEffect(()=>(
    setSocial(socialData)
  ),[])


  return (
    <div  className='w-50 ms-auto'>
      <h2 className='primary-text mb-3 fs-4'>Connect with</h2>
      <ListGroup>
        {social.map((item, index)=>(
              <ListGroup.Item style={{background: "#f6f6f6"}} key={index} className="border-0 p-0 py-2 "> <span className='fs-5 me-2 '>{item.icon}</span>{item.socialName}</ListGroup.Item>        
        ))}
      </ListGroup>
    </div>
  )
}

export default Social