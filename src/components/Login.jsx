import React from "react";

import "../index.css";

const Login = (props) => {
  return (
    <div className="container-fluid main-container">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 min-vh-100 d-flex pepito justify-content-center align-items-center">
          <div className="login-box">
            <h1
              className="text-center welcomeCompanyName"
              style={{ color: "rgb(245, 82, 18)" }}
            >
              <span>
                <img src="./img/logo3.png" height="42" alt="CarboELN" />
              </span>{" "}
              Carbo ELN
            </h1>

            <h3>Login</h3>
            <form>
              <div className="form-group">
                <label for="username">User</label>
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
                <button
                  type="submit"
                  className="form-control login-submit"
                  onClick={(e) => {
                    e.preventDefault();
                    props.setPage("dashboard");
                  }}
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
};

export default Login;
