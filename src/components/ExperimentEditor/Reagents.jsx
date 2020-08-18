import React, { useState } from "react";

import ReagentsTable from "./ReagentsTable.jsx";
import ReagentsAccordion from "./ReagentsAccordion.jsx";

/* FontAwesome Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import { faThList } from "@fortawesome/free-solid-svg-icons";

const Reagents = (props) => {
  const [mode, setMode] = useState("table");

  return (
    <div>
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <div className="d-flex justify-content-between align-items-center">
            <h3>Reagents</h3>
            <span>
              <button
                onClick={() => {
                  setMode("table");
                }}
                style={styles.toggleButton}
                className="toggle-btn-reagents"
              >
                <FontAwesomeIcon icon={faTable} />
              </button>
              <button
                onClick={() => {
                  setMode("cards");
                }}
                style={styles.toggleButton}
                className="toggle-btn-reagents"
              >
                <FontAwesomeIcon icon={faThList} />
              </button>
            </span>
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
      {mode == "table" ? (
        <ReagentsTable headers={props.headers} data={props.data} />
      ) : (
        <ReagentsAccordion headers={props.headers} data={props.data} />
      )}
    </div>
  );
};

const styles = {
  toggleButton: {
    background: "none",
    border: "none",
  },
};

export default Reagents;
