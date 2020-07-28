import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Table from "react-bootstrap/Table";

import sampleReagents from "../../samples/sampleReagents";

/*
To DO: crear Reagents en el state del parent (ExperimentEditor) y pasarle por props
la funcion setReagetns a ReagentsTable. 

Dos opciones:
1) con menú: como está ahora se completa el formulario y al darle un submit se llama
a setReagents, que actualiza el state del parent y recarga la tabla
1.b) Que se pueda mostrar y ocultar el menu de edicion. A su vez tiene que haber un boton de
edicion en cada fila que cargue los datos a ser editados en el menu.

2) Hacer una tabla editable con un boton de agregar fila, se le pone un onChange a cada celda
de la tabla.

To Do: en vista movil ,mostrar sólo algunas columnas
Opciones:

1) La mas facil, mostrar solo nombre, cantidad+unidad y relación molar

2) Mostrar un selector de columnas, ver solo columna nombre + la seleccionada

*/
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

const ReagentsTable = () => {
  const [tableHeaders, setTableHeaders] = useState(sampleTableHeaders);

  return (
    <div>
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-10 columna">
          <h3>Reagents</h3>
        </div>
        <div className="col-lg-1"></div>
      </div>
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
              {sampleReagents.map((reagent, index) => {
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
          <div className="form-group">
            <label for="scale-factor">Factor de escala: </label>
            <input type="number" id="scale-factor" placeholder="1.0" />
            <button id="btn-scale-experiment">Escalar</button>
          </div>
        </div>
        <div className="col-md-7 col-lg-6"></div>
      </div>
      <div className="col-lg-1"></div>
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <h4>Agregar un reactivo</h4>
        </div>
        <div className="col-lg-1"></div>
      </div>

      <div>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-md-3 columna">
            <div className="form-group">
              <label for="nombre-reactivo">Nombre:</label>
              <input
                type="text"
                name="nombre-reactivo"
                id="nombre-reactivo"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label for="origen-reactivo">Origen:</label>
              <input
                type="text"
                name="origen-reactivo"
                id="origen-reactivo"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label for="masa-reactivo">Masa [g]:</label>
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
              <label for="pureza-reactivo">Pureza [%p/p]:</label>
              <input
                type="number"
                step="any"
                name="pureza-reactivo"
                id="pureza-reactivo"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label for="pm-reactivo">PM [g/mol]:</label>
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
              <label for="rm-reactivo">Relación molar:</label>
              <input
                type="number"
                step="any"
                name="rm-reactivo"
                id="rm-reactivo"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label for="rm-reactivo">Reactivo limitante? :</label>
              <select name="limitante" id="limitante">
                <option value="false">No</option>
                <option value="true">Si</option>Si
              </select>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <button
              className="custom-btn-dark-blue"
              id="btn-agregar-reactivo"
              onclick="crearReactivo()"
            >
              Agregar reactivo
            </button>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  table: { fontSize: "0.8em" },
};

export default ReagentsTable;
