import React from "react";
// import "bootstrap/dist/css/bootstrap.css";


const DashboardLinkBox = (props) => {
  return (
    <div className="start-box dashboard-link-box">
      <h5>{props.headerTitle}</h5>
      <hr />
      <a href="reporte-editar.html">{props.bodyText}</a>
    </div>
  );
};

export default DashboardLinkBox;
