import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./ExperimentEditor.css";

// This samples are only for de GUI development fase, later
// they sould be replace with the data from de db.
import sampleUsers from "../../samples/sampleUsers";
import sampleReagents from "../../samples/sampleReagents";
import sampleGeneralInfo from "../../samples/sampleGeneralInfo";

import DashboardUserBox from "../Dashboard/DashboardUserBox";
import ExpGeneralInfo from "./ExpGeneralInfo";
import MatsAndMethods from "./MatsAndMethods";
import ReagentsTable from "./ReagentsTable";

const ExperimentEditor = () => {
  const [user, setUser] = useState(sampleUsers[0]);
  const [reagents, setReagents] = useState(sampleReagents);
  const [generalInfo, setGeneralInfo] = useState(sampleGeneralInfo);
  const sampleTableHeaders = [
    "#",
    "Name",
    "Description",
    "Source",
    "Ammount",
    "Purity",
    "Mol. Weight",
    "Moles",
    "Molar ratio",
  ];

  return (
    <div className="container-fluid main-container experiment-editor">
      <div className="container">
        {/* <nav className="navbar fixed-top navbar-dark bg-dark">
          <img src="./img/logo-1.png" height="36" alt="" />
        </nav> */}
        <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
          <a class="navbar-brand" href="#">
            <img src="./img/logo-1.png" height="36" alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <header className="exped-header">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-7">
            <div className="exped-header-box">
              <h1 id="titulo-dashboard">Experiment Editor</h1>
              <h2>Project One - Experiment 34</h2>
            </div>
          </div>
          <div className="col-lg-3">
            <DashboardUserBox data={user} />
          </div>
          <div className="col-lg-1"></div>
        </div>
      </header>
      <ExpGeneralInfo data={generalInfo} />
      <MatsAndMethods />
      <ReagentsTable headers={sampleTableHeaders} data={reagents} />
    </div>
  );
};

export default ExperimentEditor;
