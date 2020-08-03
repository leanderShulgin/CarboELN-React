import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Welcome.css";

const Welcome = (props) => {
  return (
    <div className="main-container container-fluid">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 min-vh-100 d-flex justify-content-center align-items-center">
          <div className="container-fluid d-flex flex-column" style={style.box}>
            <img
              src="./img/logo3.png"
              alt="logo"
              className="welcomeSpinningLogo"
              style={style.logo}
            />
            <h1
              className="text-center welcomeCompanyName"
              style={style.companyName}
            >
              Carbo ELN
            </h1>
            <div clasName="form-group">
              <button
                className="form-control"
                style={style.button}
                onClick={() => {
                  props.setPage("dashboard");
                }}
              >
                Ingresar
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
};

const style = {
  box: {
    padding: "10px",
    width: " 100%",
    bordeRadius: "5px",
  },
  button: {
    backgroundColor: "rgb(56, 70, 64)",
    color: "white",
    border: "none",
  },
  companyName: {
    color: "rgb(245, 82, 18)",
  },
  logo: {
    width: "80%",
    margin: "auto",
    animation: "rotation 10s infinite linear",
  },
};

export default Welcome;
