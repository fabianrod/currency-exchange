import React from 'react';
import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import './footer.scss';

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <h5>About</h5>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, omnis.</p>
          </Col>
          <Col>
            <h5>Product</h5>
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Customers</li>
            </ul>
          </Col>
          <Col>
            <h5>Company</h5>
            <ul>
              <li>About</li>
              <li>Team</li>
              <li>Jobs</li>
            </ul>
          </Col>
          <Col>
            <h5>Redes sociales</h5>
            <Image src="../../assets/facebook.svg" className="social-icon" />
            <Image src="../../assets/twitter.svg" className="social-icon" />
            <Image src="../../assets/instagram.svg" className="social-icon" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
