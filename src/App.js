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

  let currentPage = <Welcome setPage={setPage} />;

  switch (page) {
    case "dashboard":
      currentPage = <Dashboard setPage={setPage} />;
      break;
    case "login":
      currentPage = <Login setPage={setPage} />;
      break;
    case "register":
      currentPage = <Register setPage={setPage} />;
      break;
    case "experiment-editor":
      currentPage = <ExperimentEditor setPage={setPage} />;
      break;
    case "project-viewer":
      currentPage = <ProjectViewer setPage={setPage} />;
      break;
    default:
      currentPage = <Welcome setPage={setPage} />;
  }
  return currentPage;
};

export default App;
