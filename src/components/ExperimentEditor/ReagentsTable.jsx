import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import Table from "react-bootstrap/Table";

import sampleReagents from "../../samples/sampleReagents";

const sampleTableHeaders = [
  "#",
  "Name",
  "Description",
  "Source",
  "Ammount",
  "Purity",
  "Mol. Weight",
  "Moles",
  "Molar ratio",
];

const ReagentsTable = (props) => {
  const [tableHeaders, setTableHeaders] = useState(props.headers);
  const [tableData, setTableData] = useState(props.data);

  return (
    <div>
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <Table
            striped
            bordered
            hover
            variant="light"
            size="sm"
            responsive="lg"
            style={styles.table}
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
              {tableData.map((reagent, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{reagent.name}</td>
                    <td>{reagent.description}</td>
                    <td>{reagent.source}</td>
                    <td>
                      {reagent.ammount} {reagent.unit}
                    </td>
                    <td>{reagent.purity}%</td>
                    <td>{reagent.mw}g/mol</td>
                    <td>{reagent.moles}</td>
                    <td>{reagent.molrel}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <hr />
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

const styles = {
  table: { fontSize: "0.8em" },
};

export default ReagentsTable;
