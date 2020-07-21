import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./DashboardLinkBox.css";

class DashboardLinkBox extends React.Component {
  render() {
    return (
      <div className="start-box dashboard-link-box">
        <h4>{this.props.headerTitle}</h4>
        <hr />
        <a href="reporte-editar.html">{this.props.bodyText}</a>
      </div>
    );
  }
}

export default DashboardLinkBox;
