/* Muestra una lista de los experimentos en forma de tabla */

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./ExperimentsTable.css";

const ExperimentsTable = () => {
  return (
    <div className="experiments-table">
      <h3>Experiments</h3>
      <hr />
      <div className="container-fluid table-responsive">
        <table className="table table-sm table-striped table-striped-dark table-borderless table-hover">
          <thead id="box-proyectos-thead">
            <tr>
              <td>{"Numero"}</td>
              <td>{"Objetivo"}</td>
              <td>{"Conclusion"}</td>
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

export default ExperimentsTable;
