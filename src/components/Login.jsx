import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Login.css";

const Login = () => {
  return (
    <div className="container-fluid main-container">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 min-vh-100 d-flex pepito justify-content-center align-items-center">
          <div className="login-box">
            <h1>Carbono ELN</h1>
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
                <input
                  type="submit"
                  id="username"
                  value="Enter"
                  className="form-control login-submit"
                ></input>
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
