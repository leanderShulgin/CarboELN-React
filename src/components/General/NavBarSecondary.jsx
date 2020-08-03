import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

/* FONT AWESOME ICONS:  */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faFlask } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const NavBarSidebar = (props) => {
  return (
    <Navbar fixed="bottom" style={style.Bar}>
      <button
        className="btn"
        onClick={() => {
          props.setPage("dashboard");
        }}
        style={style.NavBarButton}
      >
        <FontAwesomeIcon icon={faHome} /> General
      </button>
      <button
        className="btn"
        onClick={() => {
          props.setPage("login");
        }}
        style={style.NavBarButton}
      >
        <FontAwesomeIcon icon={faSignInAlt} /> Reaction
      </button>
      <button
        className="btn"
        onClick={() => {
          props.setPage("register");
        }}
        style={style.NavBarButton}
      >
        <FontAwesomeIcon icon={faUserPlus} /> Reagents
      </button>
      <button
        className="btn"
        onClick={() => {
          props.setPage("experiment-editor");
        }}
        style={style.NavBarButton}
      >
        {" "}
        <FontAwesomeIcon icon={faFlask} /> Log
      </button>
      <button className="btn" style={style.NavBarButton}>
        <FontAwesomeIcon icon={faBook} /> Results
      </button>
      <button
        className="btn"
        onClick={() => {
          props.setPage("dashboard");
        }}
        style={style.NavBarButton}
      >
        <FontAwesomeIcon icon={faHome} /> General
      </button>
      <button
        className="btn"
        onClick={() => {
          props.setPage("login");
        }}
        style={style.NavBarButton}
      >
        <FontAwesomeIcon icon={faSignInAlt} /> Reaction
      </button>
      <button
        className="btn"
        onClick={() => {
          props.setPage("register");
        }}
        style={style.NavBarButton}
      >
        <FontAwesomeIcon icon={faUserPlus} /> Reagents
      </button>
      <button
        className="btn"
        onClick={() => {
          props.setPage("experiment-editor");
        }}
        style={style.NavBarButton}
      >
        {" "}
        <FontAwesomeIcon icon={faFlask} /> Log
      </button>
      <button className="btn" style={style.NavBarButton}>
        <FontAwesomeIcon icon={faBook} /> Results
      </button>
    </Navbar>
  );
};

export default NavBarSidebar;

const style = {
  Bar: { backgroundColor: "rgb(200,200,200)", overflowX: "auto" },
  NavBarButton: {
    background: "none",
    boder: "none",
    color: "black",
    fontSize: "0.6em",
  },
};
