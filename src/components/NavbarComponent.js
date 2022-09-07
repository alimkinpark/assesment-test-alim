import React from "react";
import logo from '../logo.svg';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Assesment test
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
