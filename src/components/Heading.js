import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavbarBrand, Container, NavItem } from "reactstrap";

const Heading = () => {
  return (
    <Navbar color="light">
      <Container className="d-flex justify-content-between">
        <NavbarBrand href="/">Todo List</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-outline-success" to="/add">
              Add Task
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Heading;
