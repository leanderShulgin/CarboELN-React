import React from "react";

const DashboardBox = (props) => {
  return (
    <div className="start-box dashboard-projects-table">
      <h4>{props.boxTitle}</h4>
      {props.children}
    </div>
  );
};

export default DashboardBox;
