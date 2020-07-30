import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login.jsx";
import Register from "./components/Register";
import ProjectViewer from "./components/ProjectViewer/ProjectViewer";
import ExperimentEditor from "./components/ExperimentEditor/ExperimentEditor";
import Welcome from "./components/Welcome.jsx";

const App = () => {
  const [page, setPage] = useState("");

  switch (page) {
    case "dashboard":
      return <Dashboard setPage={setPage} />;
    case "login":
      return <Login setPage={setPage} />;
    case "register":
      return <Register setPage={setPage} />;
    case "experiment-editor":
      return <ExperimentEditor setPage={setPage} />;
    case "project-viewer":
      return <ProjectViewer setPage={setPage} />;
    default:
      return <Welcome setPage={setPage} />;
  }
  // return <ExperimentEditor />;
  // return <ProjectViewer />;
};

export default App;
