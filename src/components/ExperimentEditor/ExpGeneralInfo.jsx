import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./ExpGeneralInfo.css";

import TextAreaField from "../General/TextAreaField";

// import sampleUsers from "../../samples/sampleUsers";

const ExpGeneralInfo = (props) => {

  const [data, setData] = useState(props.data);
  
  return (
    <div>
      <div className="row exped-general-info">
        <div className="col-lg-1"></div>
        <div className="col-md-4 col-lg-4">
          <h3>General Info </h3>

          <ul>
            <li>
              <strong>Author: </strong> {data.creatorName}
            </li>
            <li>
              <strong>Creation date: </strong> {data.creationDate}
            </li>
            <li>
              <strong>Project Name: </strong> {data.projectName}
            </li>
            <li>
              <strong>Project Number: </strong> {data.projectNumber}
            </li>
            <li>
              <strong>Report Number: </strong> {data.reportNumber}
            </li>
          </ul>
        </div>
        <div className="col-md-4 col-lg-3">
          <div className="form-group">
            <label>Synthetic route</label>
            <input
              type="text"
              className="form-control"
              value={data.route}
            ></input>
          </div>
          <div className="form-group">
            <label>References</label>
            <input
              type="text"
              className="form-control"
              value={data.references}
            ></input>
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
          <TextAreaField title="Synopsis" rows="4" />
          <TextAreaField title="Introduction" rows="4" />
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default ExpGeneralInfo;
