import React, { Component } from "react";
import Logo from "../images/logo1.png";
import "./Login.css";
class Login extends Component {
  state = {
    Accounts: [],
  };
  render() {
    return (
      <div className="login-page">
        <form action="" className="signin-Form">
          <img className="app-logo" src={Logo} alt="app-logo" />
          <h1 className="form-title">Kene's Cribs</h1>
          <p>Welcome please back, please sign in!</p>
          <hr className="hr" />
          <div className="login-box">
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                class="form-control"
                id="login-email"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="login-password"
                required
              />
            </div>
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                remember me
              </label>
            </div>
            <div className="login-btn">
              <button type="submit" class="btn btn-lg btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
