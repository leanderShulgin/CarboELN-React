import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./DashboardUserBox.css";

class DashboardUserBox extends React.Component {
  render() {
    return (
      <div className="start-box dashboard-user-box">
        <h5>Peter Cantropus</h5>
        <div id="cont-usuario">
          <div id="cont-data-usuario">
            <ul>
              <li>Dato 1</li>
              <li>Dato 2</li>
              <li>Dato 3</li>
            </ul>
          </div>
          <div id="cont-avatar">
            <img src="./img/usuario.svg" alt="avatar" />
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardUserBox;
