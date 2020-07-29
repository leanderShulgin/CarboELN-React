import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./DashboardUserBox.css";

const DashboardUserBox = (props) => {
  return (
    <div className="start-box dashboard-user-box">
      <h5>{props.data.username}</h5>
      <div id="cont-usuario">
        <div id="cont-data-usuario">
          <ul>
            <li>
              <strong>Nombre: </strong> {props.data.name}
            </li>
            <li>
              <strong>Apellido: </strong> {props.data.lastname}
            </li>
            <li>
              <strong>Email: </strong> {props.data.email}
            </li>
            <li>
              <strong>Sector:</strong> {props.data.sector}
            </li>
            <li>
              <strong>Posición:</strong> {props.data.position}
            </li>
            <li>
              <strong>Rol:</strong> {props.data.role}
            </li>
          </ul>
        </div>
        <div id="cont-avatar">
          {/* <img src="./img/usuario.svg" alt="avatar" /> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardUserBox;
