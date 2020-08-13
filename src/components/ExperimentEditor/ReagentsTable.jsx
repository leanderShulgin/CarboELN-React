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
            variant="dark"
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
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-md-5 col-lg-4">
          <div className="form-group d-flex">
            <label className="col-6">Factor de escala: </label>
            <input
              type="number"
              placeholder="1.0"
              className="form-control col-3"
            />
            <button
              className="form-control col-3"
              style={{ margin: "0px 10px" }}
            >
              Escalar
            </button>
          </div>
        </div>
        <div className="col-md-7 col-lg-6"></div>
      </div>
      <div className="col-lg-1"></div>
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <h4>Add a reagent</h4>
        </div>
        <div className="col-lg-1"></div>
      </div>

      <div>
        <form onSubmit="#">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-md-3 columna">
              <div className="form-group">
                <label for="nombre-reactivo">Name:</label>
                <input
                  type="text"
                  name="nombre-reactivo"
                  id="nombre-reactivo"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label for="origen-reactivo">Source:</label>
                <input
                  type="text"
                  name="origen-reactivo"
                  id="origen-reactivo"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label for="masa-reactivo">Ammount:</label>
                <input
                  type="number"
                  step="any"
                  name="masa-reactivo"
                  id="masa-reactivo"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-5 col-lg-4 columna">
              <div className="form-group">
                <label for="pureza-reactivo">Purity [%w/w]:</label>
                <input
                  type="number"
                  step="any"
                  name="pureza-reactivo"
                  id="pureza-reactivo"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label for="pm-reactivo">Molecular weight [g/mol]:</label>
                <input
                  type="number"
                  step="any"
                  name="pm-reactivo"
                  id="pm-reactivo"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label for="moles-reactivo">Moles:</label>
                <input
                  type="number"
                  name="moles-reactivo"
                  id="moles-reactivo"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-3 columna">
              <div className="form-group">
                <label for="rm-reactivo">Molar ratio:</label>
                <input
                  type="number"
                  step="any"
                  name="rm-reactivo"
                  id="rm-reactivo"
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-lg-1"></div>
          </div>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
              <button
                className="custom-btn-dark-blue form-control"
                id="btn-agregar-reactivo"
                type="submit"
              >
                Add reagent
              </button>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  table: { fontSize: "0.8em" },
};

export default ReagentsTable;
