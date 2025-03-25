import React from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import DarkModeToggle from "./DarkModeToggle";
import { Link } from "react-router-dom"; // Import Link
import "../styles/navbar.css";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            className="logo"
            src="https://imgs.search.brave.com/5JAogdx6g2DF96MShWnotr1b5gQKk3yEGJEbRloorvQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/Lzc1L0Jvb2tteXNo/b3ctbG9nb2lkLnBu/Zw"
            alt="logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
            <Nav.Link as={Link} to="/events">Events</Nav.Link>
            <Nav.Link as={Link} to="/sports">Sports</Nav.Link>
            <Nav.Link as={Link} to="/offers">Offers</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search movies/events" className="me-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
          <Nav className="ms-3 d-flex align-items-center">
            <DarkModeToggle /> {/* Dark Mode Toggle */}
            <Nav.Link as={Link} to="/login" className="ms-3">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
