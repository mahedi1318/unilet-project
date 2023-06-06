import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionHeader from '../SectionHeader'
import ArticlesCard from './ArticlesCard'
import ArbgImg1 from "../../../assets/images/ar-img-3.png"

let sectionHedData = {
    headerName : "Recently Reviewed",
    headerDisc : "More then 10000 clients who are happy with Us. Are You Next One?"
}

const OurArticles = () => {
  return (
    <div style={{background: "#FBFBFB", padding: "55px"}}>
        <Container>
            <SectionHeader headername={sectionHedData.headerName} headerdis={sectionHedData.headerDisc}/>
            <Row>
                <Col style={{background: `url(${ArbgImg1})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                    <div style={{width: "50%", marginLeft: 'auto'}}>
                        <ArticlesCard/>
                    </div>
                </Col>
            </Row>
        </Container>       
    </div>
  )
}

export default OurArticles