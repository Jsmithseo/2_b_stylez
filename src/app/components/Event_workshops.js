import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Events_workshops = ({ images }) => {
  return (
    <Container className="image-quad">
      <Row className="events_workshops">
        <center>
          <h2>Event & Workshops</h2>
        </center>
        {images.map((image, index) => (
          <Col key={index} md="3" className="mb-4">
            <div className="image-container">
              <img src={image.src} alt={image.alt} className="img-fluid trending" />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events_workshops;
