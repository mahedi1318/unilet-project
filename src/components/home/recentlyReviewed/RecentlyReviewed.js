import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Card, } from 'react-bootstrap'
import SectionHeader from '../SectionHeader'
import { RecentlyReviewedData } from '../../../middleware/Api'
import {AiFillStar} from "react-icons/ai"
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import { Link } from 'react-router-dom'

let sectionHedData = {
    headerName : "Recently Reviewed",
    headerDisc : "More then 10000 clients who are happy with Us. Are You Next One?"
}



const RecentlyReviewed = () => {

    let [rasent, setRasent] = useState ([])

    useEffect(()=>{
        setRasent(RecentlyReviewedData)
    },[])
       
  return (
    <div className='my-5'>
        <Container>
             <SectionHeader headername={sectionHedData.headerName} headerdis={sectionHedData.headerDisc}/>
             <Row>
                {rasent.map((item, index)=>(
                    <Col xl={4}>
                      <Card className='border-0' style={{boxShadow: "0px 4px 22px rgba(0, 0, 0, 0.16)", marginTop: "75px",}}>
                        <Card.Img variant="top" src={item.imglink} />
                            <Card.Body>
                                <Card.Title>{item.heading}</Card.Title>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='ratting'>
                                        { item.rating === 4 ? <span style={{color: "#0FB3AF"}}> <h4 style={{display: "inline", verticalAlign: "middle"}} >{item.rating}</h4>  <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> </span> 
                                        : item.rating === 5 ? <span style={{color: "#0FB3AF"}}> <h4 style={{display: "inline", verticalAlign: "middle"}}>{item.rating}</h4> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> </span> 
                                        : item.rating === 3 ? <span style={{color: "#0FB3AF"}}> <h4 style={{display: "inline", verticalAlign: "middle"}}>{item.rating}</h4> <AiFillStar/> <AiFillStar/> <AiFillStar/> </span> 
                                        : item.rating === 4 ? <span style={{color: "#0FB3AF"}}> <h4 style={{display: "inline", verticalAlign: "middle"}}>{item.rating}</h4> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> </span> 
                                        : item.rating === 5 ? <span style={{color: "#0FB3AF"}}> <h4 style={{display: "inline", verticalAlign: "middle"}}>{item.rating}</h4> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> </span> 
                                        : item.rating === 6 ? <span style={{color: "#0FB3AF"}}> <h4 style={{display: "inline", verticalAlign: "middle"}}>{item.rating}</h4> <AiFillStar/> <AiFillStar/> <AiFillStar/><AiFillStar/> </span> 
                                        : "No reatting" }
                                        <p className='text-muted fs-6 mt-2'>{item.ratingcount}</p>
                                    </div>
                                    <div className='button-icons'>
                                        <Link to="" className='fs-2'><BsFillArrowRightCircleFill /></Link>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
             </Row>
        </Container>
    </div>
  )
}


export default RecentlyReviewed