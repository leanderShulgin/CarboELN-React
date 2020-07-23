import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./DashboardUserBox.css";

const DashboardUserBox = (props) => {
  return (
    <div className="start-box dashboard-user-box">
      <h5>{props.user.username}</h5>
      <div id="cont-usuario">
        <div id="cont-data-usuario">
          <ul>
            <li>
              <strong>Nombre: </strong> {props.user.name}
            </li>
            <li>
              <strong>Apellido: </strong> {props.user.lastname}
            </li>
            <li>
              <strong>Email: </strong> {props.user.email}
            </li>
            <li>
              <strong>Sector:</strong> {props.user.sector}
            </li>
            <li>
              <strong>Posición:</strong> {props.user.position}
            </li>
            <li>
              <strong>Rol:</strong> {props.user.role}
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
