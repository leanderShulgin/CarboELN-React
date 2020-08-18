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
import { faAtom } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const NavBarSidebar = (props) => {
  return (
    <Navbar fixed="bottom" style={style.Bar}>
      <button
        className="btn btn-nav-sec"
        onClick={() => {
          props.setSubpage("");
        }}
        style={style.NavBarButton}
      >
        <FontAwesomeIcon icon={faHome} /> General
      </button>
      <button
        className="btn btn-nav-sec"
        onClick={() => {
          props.setSubpage("reaction");
        }}
        style={style.NavBarButton}
      >
        <FontAwesomeIcon icon={faLongArrowAltRight} /> Reaction
      </button>
      <button
        className="btn btn-nav-sec"
        onClick={() => {
          props.setSubpage("reagents");
        }}
        style={style.NavBarButton}
      >
        <FontAwesomeIcon icon={faFlask} /> Reagents
      </button>
      <button
        className="btn btn-nav-sec"
        onClick={() => {
          props.setSubpage("files");
        }}
        style={style.NavBarButton}
      >
        <FontAwesomeIcon icon={faFolderOpen} /> Files
      </button>
      <button
        className="btn btn-nav-sec"
        onClick={() => {
          props.setSubpage("composer");
        }}
        style={style.NavBarButton}
      >
        <FontAwesomeIcon icon={faAtom} /> Composer
      </button>
      {/* <button className="btn btn-nav-sec" disabled="true" style={style.NavBarButton}>
        <FontAwesomeIcon icon={faBook} /> Results
      </button> */}
      {/* <button className="btn btn-nav-sec" disabled="true" style={style.NavBarButton}>
        <FontAwesomeIcon icon={faHome} /> General
      </button>
      <button className="btn btn-nav-sec" disabled="true" style={style.NavBarButton}>
        <FontAwesomeIcon icon={faSignInAlt} /> Reaction
      </button>
      <button className="btn btn-nav-sec" disabled="true" style={style.NavBarButton}>
        <FontAwesomeIcon icon={faUserPlus} /> Reagents
      </button>
      <button className="btn btn-nav-sec" disabled="true" style={style.NavBarButton}>
        {" "}
        <FontAwesomeIcon icon={faFlask} /> Log
      </button>
      <button className="btn btn-nav-sec" disabled="true" style={style.NavBarButton}>
        <FontAwesomeIcon icon={faBook} /> Results
      </button> */}
    </Navbar>
  );
};

export default NavBarSidebar;

const style = {
  Bar: {
    backgroundColor: "rgb(200,200,200)",
    overflowX: "auto",
    padding: "0px",
  },
  NavBarButton: {
    boder: "none",
    fontSize: "0.6em",
    padding: "10px 5px",
    borderRadius: "0",
  },
};
