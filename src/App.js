import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
// import Login from "./components/Login.jsx";
// import Register from "./components/Register";
// import ProjectViewer from "./components/ProjectViewer/ProjectViewer";
import ExperimentEditor from "./components/ExperimentEditor/ExperimentEditor";
import Welcome from "./components/Welcome.jsx";

const App = () => {
  const [page, setPage] = useState("");
  // return <Dashboard />;
  // return <Login />;
  // return <Welcome />;
  // return <Register />;
  switch (page) {
    case "dashboard":
      return <Dashboard />;
      break;
    default:
      return <Welcome setPage={setPage}/>;
  }
  // return <ExperimentEditor />;
  // return <ProjectViewer />;
};

export default App;
