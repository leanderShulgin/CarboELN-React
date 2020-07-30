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
      return <Dashboard />;
    case "login":
      return <Login />;
    case "register":
      return <Register />;
    case "experiment-editor":
      return <ExperimentEditor />;
    case "project-viewer":
      return <ProjectViewer />;
    default:
      return <Welcome setPage={setPage} />;
  }
  // return <ExperimentEditor />;
  // return <ProjectViewer />;
};

export default App;
