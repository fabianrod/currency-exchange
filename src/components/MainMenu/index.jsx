import React from 'react';
import { Nav } from 'react-bootstrap';

function MainMenu() {
  return (
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
  );
}

export default MainMenu;
