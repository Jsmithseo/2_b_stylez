import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <Container>
        <Row>
          <Col md="4">
            <h5>THE WEEZ EXPERIENCE</h5>
            <p>
              As the world evolves, so do we. We've reimagined and refined our
              collections to ensure we meet your fashion desires in an
              ever-changing landscape. From chic streetwear to elegant evening
              wear, timeless classics to avant-garde trends, we curate every
              style imaginable.
            </p>
          </Col>
          <Col md="4">
            <h5>Contact</h5>
            <ul>
              <li>
                <a href="tel:628-253-3914">628-253-3914</a>
              </li>
              <li>
                <a href="mailto:glenn9robinson@gmail.com">
                  glenn9robinson@gmail.com
                </a>
              </li>
              <li>810 B St San Rafael, CA 94901</li>
            </ul>
          </Col>
          <Col md="4">
            <h5>Services</h5>
            <ul>
              <li>
                <a href="#link7">Haircuts </a>
              </li>
              <li>
                <a href="#link8">Styling</a>
              </li>
              <li>
                <a href="#link9">Consignment</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col md="12" className="text-center">
            <p className="mb-0">
              © {new Date().getFullYear()} 2 B Stylez. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
