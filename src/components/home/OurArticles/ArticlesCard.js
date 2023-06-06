import React from 'react'
import { Card } from 'react-bootstrap'
import ArProfile1 from "../../../assets/images/arprofile1.png"
import {BsClock} from "react-icons/bs"


const ArticlesCard = () => {
  return (
    <div style={{padding: "167px 30px 30px 30px"}}>
        <Card >
            <Card.Body>
                <Card.Title>Lorem Ipsum is simply dummy  </Card.Title>               
                <Card.Text className='lh-base'>
                Lorem Ipsum is simply dummy text of the printing and industry's
                Lorem Ipsum has been the industry's standard dummy text ever
                when an unknown printer took a galley.
                </Card.Text>
                <div className='d-flex justify-content-between'>
                    <div>
                        <img src={ArProfile1} alt='' />
                        <Card.Text style={{display: "inline", marginLeft: "7px"}} href="#">Card Link</Card.Text>
                        <Card.Text style={{display: "inline", marginLeft: "20px"}} href="#"> <BsClock/> Another Link</Card.Text>
                    </div>
                    <div>
                    <Card.Link href="#">Read More</Card.Link>
                    </div>
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ArticlesCard