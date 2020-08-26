import React, { FC } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export interface Link {
  id: number;
  text: string;
  link: string;
}

interface NavigationProps {
  links?: Link[];
}

const Navigation: FC<NavigationProps> = ({ links }) => {
  return (
    <Navbar bg="light" expand="lg" variant="light">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {links &&
            links.map((link) => (
              <Nav.Link key={link.id} href={link.link}>
                {link.text}
              </Nav.Link>
            ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
