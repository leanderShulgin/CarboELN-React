import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Dashboard.css";

import sampleUsers from "../samples/sampleUsers";

import DashboardProyectsTable from "./DashboardProjectsTable";
import DashboardLinkBox from "./DashboardLinkBox";
import DashboardUserBox from "./DashboardUserBox";

const Dashboard = () => {
  return (
    <div className="container-fluid main-container" id="main-container">
      <header>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-7">
            <div className="dashboard-header-box start-box">
              <h1 id="titulo-dashboard">Carbono ELN</h1>
              <h3>Inicio</h3>
              <p className="texto-dashboard">
                Desde aquí podés acceder a todas las funciones del cuaderno de
                laboratorio electrónico
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <DashboardUserBox user={sampleUsers[0]}/>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </header>
      <main>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-7">
            <DashboardProyectsTable />
          </div>
          <div className="col-lg-3" id="box-nuevo-reporte">
            <DashboardLinkBox
              headerTitle="Nuevo Reporte"
              bodyText="Haz click aquí para comenzar un nuevo reporte"
            />
            <DashboardLinkBox
              headerTitle="Nuevo Proyecto"
              bodyText="Haz click aquí para comenzar un nuevo proyecto"
            />
          </div>
          <div className="col-lg-1"></div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
