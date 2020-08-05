import React from "react";

const DashboardBox = (props) => {
  return (
    <div style={styles.box} className="darkGrayBox">
      <h5 >{props.boxTitle}</h5>
      {props.children}
    </div>
  );
};

const styles = {
  box: {
    padding: "20px",
    borderRadius: "5px",
  },
};

export default DashboardBox;
