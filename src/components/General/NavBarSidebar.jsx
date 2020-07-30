import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBarSidebar = (props) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#">
        <button
          className="navbar-brand"
          onClick={() => {
            props.setPage(props.logoSendsTo);
          }}
          style={{ background: "none", border: "none", padding: "none" }}
        >
          <img src="./img/logo-1.png" height="36" alt="" />
        </button>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <button
            className="btn"
            onClick={() => {
              props.setPage("dashboard");
            }}
            style={style.NavBarButton}
          >
            Dashboard
          </button>
          <button
            className="btn"
            onClick={() => {
              props.setPage("login");
            }}
            style={style.NavBarButton}
          >
            Login
          </button>
          <button
            className="btn"
            onClick={() => {
              props.setPage("register");
            }}
            style={style.NavBarButton}
          >
            Register
          </button>
          <button
            className="btn"
            onClick={() => {
              props.setPage("experiment-editor");
            }}
            style={style.NavBarButton}
          >
            Experiment
          </button>
          <button className="btn" style={style.NavBarButton}>
            Project
          </button>

          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarSidebar;

const style = {
  NavBarButton: {
    background: "none",
    boder: "none",
    color: "white",
  },
};
