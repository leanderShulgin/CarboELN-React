import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import "./ExperimentEditor.css";

// This samples are only for de GUI development fase, later
// they sould be replace with the data from de db.
import sampleUsers from "../../samples/sampleUsers";
import sampleReagents from "../../samples/sampleReagents";
import sampleGeneralInfo from "../../samples/sampleGeneralInfo";

// Components
import UserCard from "../Dashboard/UserCard.jsx";
import ExpGeneralInfo from "./ExpGeneralInfo.jsx";
import ReagentsTable from "./ReagentsTable.jsx";
import ReagentsAccordion from "./ReagentsAccordion.jsx";
import ReactionEditor from "./ReactionEditor";
import NavBarMain from "../General/NavBarMain.jsx";
import NavBarSecondary from "../General/NavBarSecondary.jsx";
import FileLinksBox from "../General/FileLinksBox.jsx";

const ExperimentEditor = (props) => {
  const [user, setUser] = useState(sampleUsers[0]);
  const [reagents, setReagents] = useState(sampleReagents);
  const [generalInfo, setGeneralInfo] = useState(sampleGeneralInfo);
  const [subPage, setSubpage] = useState("");

  const sampleTableHeaders = [
    "#",
    "Name",
    "Description",
    "Source",
    "Ammount",
    "Purity",
    "Mol. Weight",
    "Moles",
    "Molar ratio",
  ];

  let currentSubpage = <ExpGeneralInfo data={generalInfo} />;

  switch (subPage) {
    case "reaction":
      currentSubpage = <ReactionEditor />;
      break;
    case "reagents":
      currentSubpage = (
        <ReagentsTable headers={sampleTableHeaders} data={reagents} />
      );
      break;
    case "reagents-acc":
      currentSubpage = (
        <ReagentsAccordion headers={sampleTableHeaders} data={reagents} />
      );
      break;
    case "files":
      currentSubpage = <FileLinksBox />;
      break;
    default:
      // currentSubpage = <ExpGeneralInfo data={generalInfo} />;
      currentSubpage = (
        <ReagentsAccordion headers={sampleTableHeaders} data={reagents} />
      );
  }

  return (
    <div className="container-fluid main-container experiment-editor">
      <NavBarMain setPage={props.setPage} logoSendsTo={"dashboard"} />
      <NavBarSecondary setSubpage={setSubpage} />

      <header className="exped-header">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-7">
            <div className="exped-header-box">
              <h1 id="titulo-dashboard">Experiment Editor</h1>
              <h2>Project One - Experiment 34</h2>
            </div>
          </div>
          <div className="col-lg-3">
            <UserCard data={user} />
          </div>
          <div className="col-lg-1"></div>
        </div>
      </header>
      {currentSubpage}
      <div style={{ height: "50px" }}></div>
    </div>
  );
};

export default ExperimentEditor;
