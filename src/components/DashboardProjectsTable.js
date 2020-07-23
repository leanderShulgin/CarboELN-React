import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./DashboardProjectsTable.css";

const DashboardProjectsTable = (props) => {
  return (
    <div className="start-box dashboard-projects-table">
      <h4>Mis Proyectos</h4>
      <hr />
      <div className="container-fluid pepito table-responsive">
        <table className="table table-sm table-striped table-striped-dark table-borderless table-hover">
          <thead id="box-proyectos-thead">
            <tr>
              <td>{"Id"}</td>
              <td>{"Nombre del proyecto"}</td>
              <td>{"Responsable"}</td>
            </tr>
          </thead>
          <tbody id="body-tabla-proyectos">
            <tr>
              <td>{"Sin datos"}</td>
              <td>{"Sin datos"}</td>
              <td>{"Sin datos"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardProjectsTable;
