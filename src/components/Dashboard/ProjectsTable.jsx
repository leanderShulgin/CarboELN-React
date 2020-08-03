import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Table from "react-bootstrap/Table";
import "./ProjectsTable.css";
import DashboardBox from "./DashboardBox.jsx";

const ProyectsTable = (props) => {
  const tableHeaders = ["Code", "Name", "Description"];
  return (
    <Table
      striped
      bordered
      hover
      variant="dark"
      size="sm"
      responsive="md"
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
            <tr key={index} style={{ textAlign: "left" }}>
              <td>{project.code}</td>
              <td>{project.name}</td>
              <td>{project.description}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ProyectsTable;
