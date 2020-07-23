import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import ProjectViewer from "./components/ProjectViewer";

// function App() {
//   return <Dashboard />;
// }

class App extends React.Component {
  render() {
    // return <Dashboard />;
    // return <Login />;
    // return <Register />;
    return <ProjectViewer />;
  }
}

export default App;
