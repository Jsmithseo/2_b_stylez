import React, { useState } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/app/globals.css'
import Menu from '../src/app/components/Menu';
import Footer from '../src/app/components/Footer';

import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

const Appointments = () => {
  const images = [
    'haircut1.png',
    'haircut2.png',
    'haircut3.png',
    'haircut4.png',
    'haircut5.png',
    'haircut6.png',
    'haircut7.png',
    'haircut8.png',
    'haircut9.png',
    'haircut10.png',
    'haircut11.png',
    'haircut12.png',
    'haircut13.png',
    'haircut14.png',
    'haircut15.png',
    'haircut16.png',
  ];

  const [modal, setModal] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const toggle = () => setModal(!modal);

  const handleImageClick = (image) => {
    setCurrentImage(image);
    toggle();
  };

  return (
    <>
      <Menu />
      <Container>
        <Row className="my-5">
          <Col>
            <h1>Book Your Appointment</h1>
            <p>
              Schedule your next haircut with one of our experienced barbers. We offer a wide range of services tailored to meet your individual style and grooming needs. Whether you're looking for a classic cut or something more modern, our team is here to ensure you leave looking your best.
            </p>
            <Link href="https://www.styleseat.com/m/v/glennrobinson"><Button color="primary" size="lg">Book Now</Button></Link>
          </Col>
        </Row>

        <Row className="my-5">
          <Col>
            <h2>My Work</h2>
            <p>Check out some of our latest work below. Click on any image to view in full size.</p>
          </Col>
        </Row>

        <Row>
          {images.map((image, index) => (
            <Col xs="6" sm="3" key={index} className="mb-4">
              <img 
                src={image} 
                alt={`Gallery ${index + 1}`} 
                className="img-fluid" 
                style={{ 
                  width: '150px', 
                  height: '150px', 
                  objectFit: 'cover', 
                  cursor: 'pointer' 
                }} 
                onClick={() => handleImageClick(image)}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />

      <Modal isOpen={modal} toggle={toggle} centered>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <img src={currentImage} alt="Modal Image" className="img-fluid" />
        </ModalBody>
      </Modal>
    </>
  );
};

export default Appointments;
