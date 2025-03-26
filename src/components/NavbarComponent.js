import React from "react";
import { Navbar, Nav, Container, Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo2 from "./logo2.png"; // Ensure the correct path

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="navbar navbar-light bg-light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img className="logo" src={logo2} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
            <Nav.Link as={Link} to="/events">Events</Nav.Link>
            <Nav.Link as={Link} to="/sports">Sports</Nav.Link>
            <Nav.Link as={Link} to="/offers">Offers</Nav.Link>
          </Nav>

          {/* Search Bar */}
          <Form className="d-flex mx-3">
            <FormControl
              type="search"
              placeholder="Search for Movies, Sports, Events"
              className="me-2"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>

          <Nav>
            <Nav.Link as={Link} to="/login">Sign In</Nav.Link>
            <Nav.Link as={Link} to="/register">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
