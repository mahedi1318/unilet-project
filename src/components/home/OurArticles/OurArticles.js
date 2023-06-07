import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionHeader from '../SectionHeader'
import ArticlesCard from './ArticlesCard'
import ArbgImg1 from "../../../assets/images/ar-img-3.png"
import ArbgImg2 from "../../../assets/images/ar-img-2.png"
import ArbgImg3 from "../../../assets/images/ar-img-1.png"
import "../../../assets/style/ourarticle.css"
import { Link } from 'react-router-dom'

let sectionHedData = {
    headerName : "Recently Reviewed",
    headerDisc : "More then 10000 clients who are happy with Us. Are You Next One?"
}

const OurArticles = () => {
  return (
    <div style={{background: "#FBFBFB", padding: "55px"}}>
        <Container>
            <SectionHeader headername={sectionHedData.headerName} headerdis={sectionHedData.headerDisc}/>
            <Row className='mt-5'>
                <Col sm={12} className='mb-4' style={{padding: "167px 30px 30px 30px", background: `url(${ArbgImg1})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%"}}>
                    <div style={{width: "50%", marginLeft: 'auto'}}>
                        <ArticlesCard/>
                    </div>
                </Col>
                <Col sm={12} className='mb-4 ' style={{padding: "167px 30px 30px 30px", background: `url(${ArbgImg1})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%"}}>
                    <div style={{width: "50%", }}>
                        <ArticlesCard/>
                    </div>
                </Col>
                <Col sm={12} className='mb-4' style={{padding: "167px 30px 30px 30px", background: `url(${ArbgImg3})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%"}}>
                    <div style={{width: "50%", marginLeft: 'auto'}}>
                        <ArticlesCard/>
                    </div>
                </Col>                
            </Row>
            <div className='text-center mt-5'>
                <Link className='btn btn-dark btn-lg text-white' to="">View all</Link>
            </div>
        </Container>       
    </div>
  )
}

export default OurArticles