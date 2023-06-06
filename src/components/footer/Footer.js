import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FooterLogo from './FooterLogo'
import Quick from './Quick'
import Touch from './Touch'
import Social from './Social'

const Footer = () => {
  return (
    <div style={{background: "#f6f6f6"}} className='py-5 pb-2'>
        <Container>
            <Row>
                <Col> <FooterLogo /> </Col>
                <Col> <Quick /> </Col>
                <Col> <Touch /> </Col>
                <Col> <Social /> </Col>
            </Row>
            <Row>
              <div className='subfooter text-center border-top pt-4 mt-4'>
                <p>Unilet Advisor &#169; 2020. All Rights Reserved.</p>
              </div>
            </Row>
        </Container>
    </div>
  )
}

export default Footer