import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionHeader from '../SectionHeader'
import Images from './Images'
import WorkContant from './WorkContant'
import searchImg from "../../../assets/images/works-1.png"
import HomeImg from "../../../assets/images/works-2.png"
import MobileImg from "../../../assets/images/works-3.png"
import WorkContantLeft from './WorkContantLeft'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import { useEffect } from 'react'


let sectionHedData = {
    headerName : "How It Works",
    headerDisc : "Lorem Ipsum is simply dummy text of the printing and typesetting"
}

const Works = () => {

  useEffect(()=>{
    AOS.init({
      duration: 3000,
    })
  },[])

  return (
    <div className='py-5' style={{background: "#FBFBFB"}}>
        <Container>
        <SectionHeader headername={sectionHedData.headerName} headerdis={sectionHedData.headerDisc}/>
        <Row style={{marginTop: "100px"}} className='align-items-center'>
          <Col data-aos="fade-right"><Images img={searchImg}/></Col>
          <Col data-aos="fade-left"><WorkContant/></Col>
        </Row>
        <Row style={{marginTop: "100px"}} className='align-items-center'>
          <Col data-aos="fade-right"><WorkContantLeft/></Col>
          <Col data-aos="fade-left"><Images img={HomeImg}/></Col>
        </Row>
        <Row style={{marginTop: "100px"}} className='align-items-center'>
          <Col data-aos="fade-right"><Images img={MobileImg}/></Col>
          <Col data-aos="fade-left"><WorkContant/></Col>
        </Row>
        <div className='more-btn text-center mt-5'>
          <Link className='btn btn-dark btn-lg text-white mt-5' to="#">Get Started</Link>
        </div>
        </Container>
    </div>
  )
}

export default Works