import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import DashboardBox from "./DashboardBox.jsx";
import ProyectsTable from "./ProjectsTable.jsx";
import DashboardLinkBox from "./DashboardLinkBox";
import UserCard from "./UserCard.jsx";
import NavBarMain from "../General/NavBarMain.jsx";

/* SAMPLES */
import sampleUsers from "../../samples/sampleUsers";
import sampleProjects from "../../samples/sampleProjects";

const Dashboard = (props) => {
  return (
    <div className="container-fluid main-container">
      <NavBarMain fixed="top" setPage={props.setPage} logoSendsTo={"welcome"} />

      <header style={{ paddingTop: "60px" }}>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-7">
            <div>
              {/* <h1>
                Carbo ELN
              </h1> */}
              <img
                src="img/logo3-text-orange.png"
                alt="Carbo ELN"
                style={{
                  height: "60px",
                  maxWidth: "100%",
                  marginBottom: "20px",
                }}
              />
              <h3>Inicio</h3>
              <p>
                Desde aquí podés acceder a todas las funciones del cuaderno de
                laboratorio electrónico
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <UserCard data={sampleUsers[0]} />
          </div>
          <div className="col-lg-1"></div>
        </div>
      </header>
      <main>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-7" style={{ marginBottom: "40px" }}>
            <DashboardBox boxTitle="My Projects">
              <ProyectsTable
                data={sampleProjects}
                style={{ borderRadius: "10px" }}
              />
            </DashboardBox>
          </div>
          <div className="col-lg-3" id="box-nuevo-reporte">
            <DashboardLinkBox
              headerTitle="Nuevo Reporte"
              bodyText="Haz click aquí para comenzar un nuevo reporte"
            />
            <hr />
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
