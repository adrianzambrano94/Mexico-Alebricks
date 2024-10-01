import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MissionAndVision: React.FC = () => {
  return (
    <Container className="my-5">
      {/* Mission Section */}
      <h1 className="h1 mt-5 ms-5" style={{ color: '#ec008c' }}>Mission</h1>
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <p className="h3">
            Implement a biopesticide produced with synthetic biology that fights the fall armyworm with a lower environmental impact than conventional pesticides, protecting the health of farmers and avoiding losses in corn crops in Mexico.
          </p>
        </Col>
        <Col md={4}>
          <img 
            src="./images/home/mission-accomplished.png" 
            alt="Mission" 
            style={{ maxWidth: '200px', maxHeight: '200px' }} 
          />
        </Col>
      </Row>

      {/* Vision Section */}
      <h1 className="h1 mt-5 ms-5" style={{ color: '#ec008c' }}>Vision</h1>
      <Row className="justify-content-center text-center">
        <Col md={4}>
          <img 
            src="./images/home/vision.png" 
            alt="Vision" 
            style={{ maxWidth: '200px', maxHeight: '200px' }} 
          />
        </Col>
        <Col md={8}>
          <p className="h3">
            Lead the future with bio-based solutions, engineering nature for sustainable, healthier, and affordable innovations across sectors.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default MissionAndVision;
