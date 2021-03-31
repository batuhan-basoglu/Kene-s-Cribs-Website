import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navbar.css";
import logo from './logo2.png';
/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbar = () => {
  return (
    /* Nav Bar */
    <div className="Navbar">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <img src={logo} width="40" height="40"></img>
        <a href="/" class="navbar-brand">
          Kene's Cribs
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link class="nav-link" exact to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/listings">
                Listings
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/agents">
                Agents
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
