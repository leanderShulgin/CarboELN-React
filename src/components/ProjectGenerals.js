import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./ProjectGenerals.css";

const ProjectGenerals = () => {
  return (
    <div className="container-fluid project-generals">
      {/* <h4>Project info</h4> */}
      <ul>
      <li>
          <h3>Project 1</h3>
        </li>
        <li>
          <strong>Creator: </strong>Peter C.
        </li>
        <li>
          <strong>Creation date: </strong>12-03-2020
        </li>
        <li>
          <strong>Experiments: </strong>26
        </li>
        <li>
          <strong>Last modified: </strong> Exp. 23, 22-07-2020-14:35
        </li>
      </ul>
    </div>
  );
};

export default ProjectGenerals;
