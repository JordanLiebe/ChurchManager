import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="/">Church Manager</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="#home">Sign In</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
