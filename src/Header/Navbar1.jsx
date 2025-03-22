import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from "../Header/Header.module.css"

const Navbar1 = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav  className="me-auto my-2 my-lg-0 lg:mr-100 md:mr-50 sm:mr-25" style={{ maxHeight: '400px' }} navbarScroll>
              <Nav.Link href="#action1" className='sm:mr-2 sm:text-black-300 md:text-blue-500 lg:text-green-900 mx-15 '>Home</Nav.Link>
              <Nav.Link href="#action2" className='sm:mr-2 sm:text-black-300 md:text-blue-500 lg:text-green-900 mx-15 '>Other</Nav.Link>
              <Button variant="success" className='sm:mr-2 sm:text-black-300 md:text-blue-500 lg:text-green-900 mx-15 '>Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </>
  )
}

export default Navbar1
