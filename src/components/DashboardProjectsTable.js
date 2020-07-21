import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./DashboardProjectsTable.css";

class DashboardProjectsTable extends React.Component {
  render() {
    return (
      <div className="start-box dashboard-projects-table">
        <h4>Mis Proyectos</h4>
        <hr />
        <div className="container-fluid">
          <table className="table table-sm table-striped table-striped-orange table-borderless table-hover">
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
  }
}

export default DashboardProjectsTable;
