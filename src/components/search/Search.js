import React from 'react'
import { InputGroup, Form } from 'react-bootstrap'

const Search = () => {
  return (
    <div>
        <InputGroup className="mb-3">
            <Form.Control className='p-2'
            placeholder="Enter Your Email Here"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
            <InputGroup.Text className='bg-dark text-white px-4' style={{cursor: "pointer"}} id="basic-addon2">Subscribe</InputGroup.Text>
      </InputGroup>
    </div>
  )
}

export default Search