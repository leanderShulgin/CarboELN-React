import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./ReagentsTable.css";

const ReagentsTable = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10 columna">
          <h3>Reactivos</h3>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10 container table-responsive">
          <h4>Tabla de reactivos</h4>
          <table className="table table-dark table-sm reagents-table">
            <thead className="thead-reagents-table">
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Origen</th>
                <th scope="col">masa [g]</th>
                <th scope="col">Pureza [%p/p]</th>
                <th scope="col">PM [g/mol]</th>
                <th scope="col">Moles</th>
                <th scope="col">RM</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr >
                <td>Reactivo 1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
          <hr />
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-4">
          <div className="form-group">
            <label for="scale-factor">Factor de escala: </label>
            <input type="number" id="scale-factor" placeholder="1.0" />
            <button id="btn-scale-experiment">Escalar</button>
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>
      <div className="col-md-1"></div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <h4>Agregar un reactivo</h4>
        </div>
        <div className="col-md-1"></div>
      </div>

      <div>
        <div className="row">
          <div className="col-md-1"></div>
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
          <div className="col-md-4 columna">
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
          <div className="col-md-1"></div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <button
              className="custom-btn-dark-blue"
              id="btn-agregar-reactivo"
              onclick="crearReactivo()"
            >
              Agregar reactivo
            </button>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
};

export default ReagentsTable;
