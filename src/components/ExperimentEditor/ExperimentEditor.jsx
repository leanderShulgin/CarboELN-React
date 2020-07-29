import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./ExperimentEditor.css";

import sampleUsers from "../../samples/sampleUsers";

import DashboardUserBox from "../Dashboard/DashboardUserBox";
import ExpGeneralInfo from "./ExpGeneralInfo";
import MatsAndMethods from "./MatsAndMethods";
import ReagentsTable from "./ReagentsTable";

const ExperimentEditor = () => {
  return (
    <div className="container-fluid main-container experiment-editor">
      <div className="container">
        <nav className="navbar fixed-top navbar-dark bg-dark">
          {/* <h4>CarbonoELN</h4> */}
          <img src="./img/name-logo-1.png" height="40" alt=""/>
        </nav>
      </div>
      <header className="exped-header">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-7">
            <div className="exped-header-box">
              <h1 id="titulo-dashboard">Experiment Editor</h1>
              <h3>Project One - Experiment 34</h3>
              <p className="texto-exped">
                Use this tool to register your experiment
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <DashboardUserBox user={sampleUsers[0]} />
          </div>
          <div className="col-lg-1"></div>
        </div>
      </header>
      <ExpGeneralInfo />
      <MatsAndMethods />
      <ReagentsTable />
    </div>
  );
};

export default ExperimentEditor;
