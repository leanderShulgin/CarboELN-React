import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./DashboardLinkBox.css";

class DashboardLinkBox extends React.Component {
  render() {
    return (
      <div className="start-box dashboard-link-box">
        <h4>Nuevo Reporte</h4>
        <hr />
        <a href="reporte-editar.html">
          Hacé click aquí para comenzar un nuevo reporte
        </a>
      </div>
    );
  }
}

export default DashboardLinkBox;
