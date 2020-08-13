import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
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
    <Navbar fixed="bottom" style={style.Bar}>
      <button
        className="btn"
        onClick={() => {
          props.setSubpage("");
        }}
        style={style.NavBarButton}
      >
        <FontAwesomeIcon icon={faHome} /> General
      </button>
      <button
        className="btn"
        onClick={() => {
          props.setSubpage("reaction");
        }}
        style={style.NavBarButton}
      >
        <FontAwesomeIcon icon={faSignInAlt} /> Reaction
      </button>
      <button
        className="btn"
        onClick={() => {
          props.setSubpage("reagents");
        }}
        style={style.NavBarButton}
      >
        <FontAwesomeIcon icon={faUserPlus} /> Reagents
      </button>
      <button
        className="btn"
        onClick={() => {
          props.setSubpage("reagents-acc");
        }}
        style={style.NavBarButton}
      >
        <FontAwesomeIcon icon={faUserPlus} /> Reagents Acc
      </button>
      <button
        className="btn"
        onClick={() => {
          props.setSubpage("files");
        }}
        style={style.NavBarButton}
      >
        <FontAwesomeIcon icon={faFlask} /> Files
      </button>
      {/* <button className="btn" disabled="true" style={style.NavBarButton}>
        <FontAwesomeIcon icon={faBook} /> Results
      </button> */}
      <button className="btn" disabled="true" style={style.NavBarButton}>
        <FontAwesomeIcon icon={faHome} /> General
      </button>
      <button className="btn" disabled="true" style={style.NavBarButton}>
        <FontAwesomeIcon icon={faSignInAlt} /> Reaction
      </button>
      <button className="btn" disabled="true" style={style.NavBarButton}>
        <FontAwesomeIcon icon={faUserPlus} /> Reagents
      </button>
      <button className="btn" disabled="true" style={style.NavBarButton}>
        {" "}
        <FontAwesomeIcon icon={faFlask} /> Log
      </button>
      <button className="btn" disabled="true" style={style.NavBarButton}>
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
