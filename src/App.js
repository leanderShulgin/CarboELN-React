import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Dashboard from "./components/Dashboard/Dashboard";
// import Login from "./components/Login.jsx";
// import Register from "./components/Register";
// import ProjectViewer from "./components/ProjectViewer/ProjectViewer";
import ExperimentEditor from "./components/ExperimentEditor/ExperimentEditor";
import Welcome from "./components/Welcome.jsx";

class App extends React.Component {
  render() {
    // return <Dashboard />;
    // return <Login />;
    // return <Welcome />;
    // return <Register />;
    return <ExperimentEditor />;
    // return <ProjectViewer />;
  }
}

export default App;
