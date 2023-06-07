import React from 'react'
import { Card } from 'react-bootstrap'
import ArProfile1 from "../../../assets/images/arprofile1.png"
import {BsClock} from "react-icons/bs"
import Moment from 'react-moment';
import moment from 'moment';


const ArticlesCard = () => {
    const start = moment().add("LLL");
  return (
    <div >
        <Card className='pt-3 pb-3 px-3 py-5'>
            <Card.Body>
                <Card.Title className='fs-4 pb-3'>Lorem Ipsum is simply dummy  </Card.Title>               
                <Card.Text className='lh-base card-pera'>
                Lorem Ipsum is simply dummy text of the printing and industry's
                Lorem Ipsum has been the industry's standard dummy text ever
                when an unknown printer took a galley.
                </Card.Text>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <img src={ArProfile1} alt='' />
                        <Card.Text style={{display: "inline", marginLeft: "7px"}} className='link-one' href="#">Card Link</Card.Text>
                        <Card.Text style={{display: "inline", marginLeft: "20px"}} className='link-one' href="#"> <BsClock/> {moment(). format("LLL")} </Card.Text>
                    </div>
                    <div>
                    <Card.Link className='btn btn-info px-3 py-2 text-white fw-bold' href="#">Read More</Card.Link>
                    </div>
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ArticlesCard