import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TrendingItems = ({ images }) => {
  return (
    <Container className="image-pair">
      <Row>
        <center>
          <h2>Trending</h2>
        </center>
        {images.map((image, index) => (
          <Col key={index} md="6" className="mb-4">
            <div className="image-container">
              <img src={image.src} alt={image.alt} className="img-fluid" />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TrendingItems;
