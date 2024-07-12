import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FeaturedItems = ({ images }) => {
  return (
    <Container className="image-gallery">
      <Row>
        <center>
          <h2>Feature Items</h2>
        </center>
        {images.map((image, index) => (
          <Col key={index} md="4" className="mb-4">
            <div className="image-container">
              <img
                src={image.src}
                alt={image.alt}
                className="img-fluid trending"
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedItems;
