import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TeamMembers: React.FC = () => {
  return (
    <Container className="my-5">
      {/* Students Section */}
      <h1 className="h1 my-5" style={{ color: '#ec008c' }}>Students</h1>
      
      {/* Gerardo Cendejas-Mendoza */}
      <div>
        <h2 className="h2 mt-5">Gerardo Cendejas-Mendoza</h2>
        <h3 className="h3 mb-3" style={{ color: '#ec008c' }}>Wet Lab, drylab, biosafety and biosecurity</h3>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <p className="h3">
              He is a Biology student at UNAM. His main interests are bioinformatics and science democratization. He worked with the bioinformatic part of the project and helped with the wet lab experiments as well. He likes to dance and listens to music all day.
            </p>
          </Col>
          <Col md={4}>
            <img className="my-5" src="image.jpg" alt="Gerardo" style={{ maxWidth: '200px', maxHeight: '200px' }} />
          </Col>
        </Row>
      </div>

      {/* Tatei Werika Wimari Garza Rodriguez */}
      <div>
        <h2 className="h2 mt-5">Tatei Werika Wimari Garza Rodriguez</h2>
        <h3 className="h3 mb-3" style={{ color: '#ec008c' }}>Human practices, student</h3>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <p className="h3">
              Studying politics he got to understand life through different perspectives, from which biology is one. Fond of diversity and sensitiveness he worked on understanding the social conditions which led the team here and sought for ways of connecting this knowledge to the world they come from. He loves plastic arts, season fruit and to the mountain.
            </p>
          </Col>
          <Col md={4}>
            <img className="my-5" src="image.jpg" alt="Tatei" style={{ maxWidth: '200px', maxHeight: '200px' }} />
          </Col>
        </Row>
      </div>

      {/* More Students */}
      <div>
        <h2 className="h2 mt-5">Lilia Ochoa</h2>
        <h3 className="h3 mb-3" style={{ color: '#ec008c' }}>Wet Lab, student</h3>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <p className="h3">
              As a biology student at UNAM, she is passionate about immunology and data analysis. Her expertise in flow cytometry has enabled the team to elevate cytotoxicity assays to a more advanced level.
            </p>
          </Col>
          <Col md={4}>
            <img className="my-5" src="image.jpg" alt="Lilia" style={{ maxWidth: '200px', maxHeight: '200px' }} />
          </Col>
        </Row>
      </div>

      {/* José Santiago Jara-Sarracino */}
      <div>
        <h2 className="h2 mt-5">José Santiago Jara-Sarracino</h2>
        <h3 className="h3 mb-3" style={{ color: '#ec008c' }}>Wet Lab, student</h3>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <p className="h3">
              As a Biology student at UNAM, he discovered that the intersection of mathematics and biology is his favorite subject. He used this passion to propose the initial construct design and the mathematical model for this Wiki, among many other contributions. He enjoys developing video games in his free time and eating ramen.
            </p>
          </Col>
          <Col md={4}>
            <img className="my-5" src="image.jpg" alt="José" style={{ maxWidth: '200px', maxHeight: '200px' }} />
          </Col>
        </Row>
      </div>

      {/* More sections like Advisors, Student Leader, etc. */}

      {/* Student Leader */}
      <h1 className="h1 my-5" style={{ color: '#ec008c' }}>Student Leader</h1>
      <div>
        <h2 className="h2 mt-5">Cruz Francisco Osuna Aguirre</h2>
        <h3 className="h3 mb-3" style={{ color: '#ec008c' }}>Wet Lab, drylab, field test, biosafety and software, student</h3>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <p className="h3">
              As a biology student at UNAM, he is captivated by how the fusion of biology, bioinformatics, and mathematics unveils hidden worlds that the team had never known existed.
            </p>
          </Col>
          <Col md={4}>
            <img className="my-5" src="image.jpg" alt="Cruz" style={{ maxWidth: '200px', maxHeight: '200px' }} />
          </Col>
        </Row>
      </div>

      {/* Continue for other team members... */}
    </Container>
  );
};

export default TeamMembers;
