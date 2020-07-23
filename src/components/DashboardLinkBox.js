import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./DashboardLinkBox.css";

const DashboardLinkBox = (props) => {
  return (
    <div className="start-box dashboard-link-box">
      <h4>{props.headerTitle}</h4>
      <hr />
      <a href="reporte-editar.html">{props.bodyText}</a>
    </div>
  );
};

export default DashboardLinkBox;
