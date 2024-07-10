// import React from 'react'
// import { Container, Row, Col } from 'react-bootstrap';

// const Footer = () => {
//     const currentYear = new Date().getFullYear();
//   return (
//     <footer>
//       <Container>
//         <Row>
//           <Col className='text-center py-3'>
//             <p>hkshop &copy; {currentYear}</p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   )
// }

// export default Footer

// src/components/Footer.js
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import '../assets/styles/index.css'

const Footer = () => {
  return (
    <footer className="header text-white mt-5 py-3">
      <Container>
        <Row className='mt-5'>
         <Col md={5}></Col>
          {/* <Col md={4}>
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="#home" className="text-white">Home</Nav.Link>
              <Nav.Link href="#services" className="text-white">Services</Nav.Link>
              <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
            </Nav>
          </Col> */}
          <Col md={4}>
            <h5>Contact Me</h5>
            <p>Email: pang_hyin_ki@yahoo.com.sg</p>
            <p>Phone: +123 456 7890</p>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>

      <Container>
         <Row>
           <Col className='text-center py-3'>
          <p>hkshop &copy; 2024</p>
           </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

