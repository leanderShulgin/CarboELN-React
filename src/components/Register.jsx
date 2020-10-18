import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Register = (props) => {
  return (
    <div className="container-fluid main-container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 min-vh-100 d-flex pepito justify-content-center align-items-center">
          <div className="form-box">
            <img
              src="img/logo3-text-orange.png"
              alt="Carbo ELN"
              style={{
                height: "50px",
                maxWidth: "100%",
                marginBottom: "20px",
              }}
            />
            <h3>Register</h3>
            <form>
              <div className="form-group">
                <label for="username">Email</label>
                <input id="username" className="form-control"></input>
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                ></input>
              </div>
              <div className="form-group">
                <label for="password">Repeat Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                ></input>
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="form-control big-btn orange-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    props.setPage("dashboard");
                  }}
                >
                  SignUp
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
};

export default Register;
