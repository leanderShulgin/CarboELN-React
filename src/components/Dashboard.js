import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="container-fluid main-container" id="main-container">
      <header className="dashboard-header">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-7">
            <h1 id="titulo-dashboard">Vanilla ELN</h1>
            <h3>Inicio</h3>
            <p className="texto-dashboard">
              Desde aquí podés acceder a todas las funciones del cuaderno de
              laboratorio electrónico
            </p>
          </div>
          <div className="col-lg-3">
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
          </div>
          <div className="col-lg-1"></div>
        </div>
      </header>
      <main>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-7">
            <div className="start-box dashboard-projects-table">
              <h4>Mis Proyectos</h4>
              <hr />
              <div className="container-fluid">
                <table className="table table-sm table-striped table-striped-orange table-borderless table-hover">
                  <thead id="box-proyectos-thead">
                    <tr>
                      <td>{"Id"}</td>
                      <td>{"Nombre del proyecto"}</td>
                      <td>{"Responsable"}</td>
                    </tr>
                  </thead>
                  <tbody id="body-tabla-proyectos">
                    <tr>
                      <td>{"Sin datos"}</td>
                      <td>{"Sin datos"}</td>
                      <td>{"Sin datos"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-3" id="box-nuevo-reporte">
            <div className="start-box dashboard-link-box">
              <h4>Nuevo Reporte</h4>
              <hr />
              <a href="reporte-editar.html">
                Hacé click aquí para comenzar un nuevo reporte
              </a>
            </div>
            <div className="start-box dashboard-link-box">
              <h4>Nuevo Proyecto</h4>
              <hr />
              <a href="proyecto-nuevo.html">
                Hacé click aquí para comenzar un nuevo proyecto
              </a>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
