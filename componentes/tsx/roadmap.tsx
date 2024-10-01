import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ProductRoadmap: React.FC = () => {
  return (
    <Container className="my-5">
      {/* Product Roadmap Section */}
      <h1 className="h1 my-5" style={{ color: '#ec008c' }}>Product Roadmap</h1>
      <div>
        <Row className="justify-content-center">
          <Col md={8}>
            <p className="h3">
              The following <span style={{ color: '#ec008c' }}>roadmap</span> outlines the strategic steps for the <span style={{ color: '#ec008c' }}>development</span> and <span style={{ color: '#ec008c' }}>commercialization</span> of Agropip. This plan focuses on validating the <span style={{ color: '#ec008c' }}>efficacy</span> of black pepper's <span style={{ color: '#ec008c' }}>active compounds</span>, ensuring <span style={{ color: '#ec008c' }}>regulatory compliance</span>, optimizing <span style={{ color: '#ec008c' }}>production</span>, and preparing for a successful <span style={{ color: '#ec008c' }}>market launch</span>. Each phase is designed to ensure that the product not only meets environmental and safety standards but also offers a <span style={{ color: '#ec008c' }}>sustainable</span> alternative to conventional pesticides. By following this roadmap, we aim to secure a <span style={{ color: '#ec008c' }}>competitive position</span> in the agricultural industry while contributing to <span style={{ color: '#ec008c' }}>eco-friendly farming</span> practices.
            </p>
          </Col>
          <Col md={4}>
            <img className="my-5" src="image.jpg" alt="Roadmap" style={{ maxWidth: '200px', maxHeight: '200px' }} />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ProductRoadmap;
