import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import MainMenu from '../MainMenu';

function Header() {
  return (
    <Container>
      <Row className="header">
        <Image src="https://via.placeholder.com/100.png?text=Logo" alt="Currency Exchange" className="logo" roundedCircle />
      </Row>
      <MainMenu />
    </Container>
  );
}

export default Header;
