import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./ExpGeneralInfo.css";

import TextAreaField from "../General/TextAreaField";

// import sampleUsers from "../../samples/sampleUsers";

const ExpGeneralInfo = () => {
  return (
    <div>
      <div className="row exped-general-info">
        <div className="col-lg-1"></div>
        <div className="col-md-4 col-lg-4">
          <h3>General Info </h3>

          <ul>
            <li>
              <strong>Author: </strong> Peter Cantropus
            </li>
            <li>
              <strong>Creation date: </strong> 12/03/2020 14:45
            </li>
            <li>
              <strong>Project Name: </strong> My First Project
            </li>
            <li>
              <strong>Project Number: </strong>001
            </li>
            <li>
              <strong>Report Number: </strong>001
            </li>
          </ul>
        </div>
        <div className="col-md-4 col-lg-3">
          <div className="form-group">
            <label>Synthetic route</label>
            <input type="text" className="form-control"></input>
          </div>
          <div className="form-group">
            <label>References</label>
            <input type="text" className="form-control"></input>
          </div>
        </div>
        <div className="col-md-4 col-lg-3">
          <div className="form-group">
            <label>Product Name</label>
            <input type="text" className="form-control"></input>
          </div>
          <div className="form-group">
            <label>Product Info</label>
            <input type="text" className="form-control"></input>
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>

      <div className="row" id="exped-mat-met">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <TextAreaField title="Abstract" rows="4" />
          <TextAreaField title="Introduction" rows="4" />
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default ExpGeneralInfo;
