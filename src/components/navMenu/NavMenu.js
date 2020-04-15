import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import Container from "react-bootstrap/Container";
import Character from "../character/Character";

// Navigation Menu
function NavMenu() {
  return (
    <Router>
      <Navbar bg="success" variant="dark" role="navigation" expand="md">
        <Navbar.Brand>
          <NavLink to="/" exact role="link">
            <FontAwesomeIcon icon={faGamepad} className="mr-2" />
            Card Game
          </NavLink>
        </Navbar.Brand>

        {/* Include hamburger Menu*/}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to="/" exact className="nav-link" role="link">
              Home
            </NavLink>
            <NavLink to="/about" exact className="nav-link" role="link">
              About
            </NavLink>
            <NavLink to="/contact" exact className="nav-link" role="link">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Navigating showing correct component*/}
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/cards/:id" component={Character} />
        </Switch>
      </Container>
    </Router>
  );
}

export default NavMenu;
