import React from 'react'
import {Container, Navbar, Nav, } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import "../../assets/style/navbar.css"
import Logo from "../../assets/images/nav-logo.png"

const Navbars = () => {
  return (
    <div>
    <Navbar bg="light" expand="lg">
        <Container className='justify-content-between'>
            <Navbar.Brand href="#home"><Link><img className='w-75' src={Logo} alt='nav logo'/></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
                <Nav className=" ">                    
                    <NavLink className='nav_item text-decoration-none mx-3' to="/">Home</NavLink>
                    <NavLink className='nav_item text-decoration-none mx-3' to="/propertys" >Review a Property</NavLink>
                    <NavLink className='nav_item text-decoration-none mx-3' to="/review" >Read Reviews</NavLink>
                    <NavLink className='nav_item text-decoration-none mx-3' to="/articale" >Articles</NavLink>                                        
                </Nav>
            </Navbar.Collapse>
            <div className='login'>
                <NavLink className="btn btn-info text-white text-capitalize px-4" to="">Log in</NavLink>
            </div>
        </Container>
    </Navbar>
    </div>    
  )
}

export default Navbars