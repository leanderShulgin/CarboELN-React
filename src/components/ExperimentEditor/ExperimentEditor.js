import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./ExperimentEditor.css";

import sampleUsers from "../../samples/sampleUsers";

import DashboardUserBox from "../Dashboard/DashboardUserBox";

const ExperimentEditor = () => {
  return (
    <div
      className="container-fluid main-container experiment-editor"
      id="main-container"
    >
      <div className="container">
        <nav className="navbar fixed-top navbar-dark bg-dark">
          <h4>CarbonoELN</h4>
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
      <main>
        <div className="row" id="exped-general-info">
          <div className="col-lg-1"></div>
          <div className="col-md-4 col-lg-4">
            <h3>General Info </h3>

            <ul>
              <li>
                <strong>Author: </strong> Peter Cantropus
              </li>
              <li>
                <strong>Creation date: </strong> 12/03/2020 14:45
              </li>
              <li>
                <strong>Project Name: </strong> My First Project
              </li>
              <li>
                <strong>Project Number: </strong>001
              </li>
              <li>
                <strong>Report Number: </strong>001
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="form-group">
              <label>Synthetic route</label>
              <input type="text" className="form-control"></input>
            </div>
            <div className="form-group">
              <label>References</label>
              <input type="text" className="form-control"></input>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="form-group">
              <label>Synthetic route</label>
              <input type="text" className="form-control"></input>
            </div>
            <div className="form-group">
              <label>References</label>
              <input type="text" className="form-control"></input>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>

        <div className="row" id="exped-mat-met">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <div className="form-group">
              <h3>Materials and methods</h3>
              <textarea className="form-control" cols="10" rows="3"></textarea>
            </div>
            <div className="form-group">
              <h3>Abstract</h3>
              <textarea className="form-control" cols="10" rows="5"></textarea>
            </div>
            <div className="form-group">
              <h3>Introduction</h3>
              <textarea className="form-control" cols="10" rows="5"></textarea>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </main>
    </div>
  );
};

export default ExperimentEditor;
