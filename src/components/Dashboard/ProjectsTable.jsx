import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Table from "react-bootstrap/Table";
import "./DashboardProjectsTable.css";

const DashboardProjectsTable = (props) => {
  const tableHeaders = ["Code", "Name", "Description"];
  return (
    <div className="start-box dashboard-projects-table">
      <h4>Mis Proyectos</h4>
      <Table
        striped
        bordered
        hover
        variant="dark"
        size="sm"
        responsive="lg"
        className="text-center"
      >
        <thead>
          <tr>
            {tableHeaders.map((headerName, index) => {
              return <th key={index}>{headerName}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.data.map((project, index) => {
            return (
              <tr key={index}>
                <td>{project.code}</td>
                <td>{project.name}</td>
                <td>{project.description}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <hr />
      {/* <div className="container-fluid table-responsive">
        <table className="table table-sm table-striped table-striped-dark table-borderless table-hover">
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
      </div> */}
    </div>
  );
};

export default DashboardProjectsTable;
