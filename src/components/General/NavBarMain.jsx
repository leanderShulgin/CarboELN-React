import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

/* FONT AWESOME ICONS:  */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faFlask } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const NavBarSidebar = (props) => {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" fixed="top" style={style.bar}>
      <Navbar.Brand href="#">
        <button
          className="navbar-brand"
          onClick={() => {
            props.setPage(props.logoSendsTo);
          }}
          style={{ background: "none", border: "none", padding: "none" }}
        >
          <img src="./img/logo3.png" height="30" alt="" />
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
            <FontAwesomeIcon icon={faHome} /> Dashboard
          </button>
          <button
            className="btn"
            onClick={() => {
              props.setPage("login");
            }}
            style={style.NavBarButton}
          >
            <FontAwesomeIcon icon={faSignInAlt} /> Login
          </button>
          <button
            className="btn"
            onClick={() => {
              props.setPage("register");
            }}
            style={style.NavBarButton}
          >
            <FontAwesomeIcon icon={faUserPlus} /> Register
          </button>
          <button
            className="btn"
            onClick={() => {
              props.setPage("experiment-editor");
            }}
            style={style.NavBarButton}
          >
            {" "}
            <FontAwesomeIcon icon={faFlask} /> Experiment
          </button>
          <button className="btn" style={style.NavBarButton}>
            <FontAwesomeIcon icon={faBook} /> Project
          </button>

          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarSidebar;

const style = {
  bar: { padding: "0px", marginBottom: "20px" },
  NavBarButton: {
    background: "none",
    boder: "none",
    color: "rgb(200,200,200)",
    fontSize: "0.8em",
    textAlign: "left",
  },
};
