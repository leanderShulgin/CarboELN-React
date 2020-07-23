import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./ProjectViewer.css";

import ExperimentsTable from "./ExperimentsTable";
import ProjectGenerals from "./ProjectGenerals";

const ProjectViewer = () => {
  return (
    <div className="container-fluid main-container project-viewer">
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <h1 id="titulo-dashboard">Carbono ELN</h1>
          <h3>Project viewer</h3>
          <ProjectGenerals />
          <ExperimentsTable />
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default ProjectViewer;
