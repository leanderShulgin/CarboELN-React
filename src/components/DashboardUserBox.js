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
            <li>Nombre: {props.user.name}</li>
            <li>Apellido: {props.user.lastname} </li>
            <li>Email: {props.user.email} </li>
            <li>Sector: {props.user.sector} </li>
            <li>Posición: {props.user.position} </li>
            <li>Rol: {props.user.role} </li>
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
