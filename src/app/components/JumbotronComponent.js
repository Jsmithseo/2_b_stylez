import React from 'react';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const JumbotronComponent = ({
  imageUrl,
}) => {
  return (
    <div
      className="jumbotron-component"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        textAlign: 'center',
        height: '400px',
        position: 'relative',
      }}
    >
      <Container
        fluid
        className="d-flex flex-column justify-content-center align-items-center h-100"
      >
      </Container>
    </div>
  );
};

export default JumbotronComponent;
