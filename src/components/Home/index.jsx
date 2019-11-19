import React from 'react';
import {
  Container,
  Image,
  Row,
  Col,
  Nav,
  Form,
  Button,
} from 'react-bootstrap';
import HistoricItem from '../HistoricItem';
import Footer from '../Footer';
import './home.scss';

function Home() {
  return (
    <div className="home-page">
      <Container>
        <Row className="header">
          <Image src="https://via.placeholder.com/100.png?text=Logo" alt="Currency Exchange" className="logo" roundedCircle />
        </Row>
        <Nav className="menu">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/#">Another link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/#">Another link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/#">Another link</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
      <div className="convert-currency">
        <Form.Group className="input-currency">
          <Form.Control placeholder="EUR" />
          <Form.Control placeholder="USD" />
        </Form.Group>
        <Button className="btn-calculate">CALCULATE</Button>
      </div>
      <Container className="historic-price">
        <h3>Historic Price</h3>
        <div className="price-list">
          <HistoricItem />
          <HistoricItem />
          <HistoricItem />
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
