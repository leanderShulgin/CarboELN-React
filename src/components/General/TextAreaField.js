import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./TextAreaField.css";

const TextAreaField = (props) => {
  return (
    <div className="form-group textAreaField">
      <label>{props.title}</label>
      <textarea className="form-control" cols="10" rows={props.rows}></textarea>
    </div>
  );
};

export default TextAreaField;
