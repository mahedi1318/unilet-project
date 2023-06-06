import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionHeader from './SectionHeader'
import { reviewData } from '../../middleware/Api'


let sectionHedData = {
  headerName : "Why Review Your Student Accommodation?",
  headerDisc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it  to make a type specimen book  It has survived not only five centuries"
}


const Review = () => {

  let [review, setReview] = useState([])

  useEffect(()=>{
    setReview(reviewData)
  },[]) 
  return (
    <div className='py-5 my-5'>
      <Container>
        <SectionHeader headername={sectionHedData.headerName} headerdis={sectionHedData.headerDisc}/>
        <Row>
          {review.map((item, index)=>(
            <Col xs={12} sm={6} xl={3} key={index} className='text-center'>
            <div data-aos="zoom-in" className='homeBg'>
              <div className='iconbg text-center m-auto' style={{background: `url('images/bg-r.png')`, height: '158px', width: '148px', lineHeight: '158px'}}>
                  <img src={item.iconimg} alt='{item.iconimg}' />
              </div>
              <p className='fs-poens lh-base px-sm-4'>{item.desc}</p>
            </div>           
            </Col>
          ))}
            
          
        </Row>
      </Container>
    </div>
  )
}

export default Review