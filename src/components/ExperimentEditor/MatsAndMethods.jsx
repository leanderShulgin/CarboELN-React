import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import "./ExpGeneralInfo.css";

// import sampleUsers from "../../samples/sampleUsers";

const MatsAndMethods = () => {
  return (
    <div>
      <div className="row" id="exped-mat-met">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
            <h3>Materials and Methods</h3>
          <div className="form-group">
            <label>Lab SetUp</label>
            <textarea className="form-control" cols="10" rows="5"></textarea>
          </div>
          <div className="form-group">
            <label>Equipment</label>
            <textarea className="form-control" cols="10" rows="5"></textarea>
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default MatsAndMethods;
