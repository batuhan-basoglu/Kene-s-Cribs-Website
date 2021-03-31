import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navbar.css";
/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbar = () => {
  return (
    /* Nav Bar */
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <img src="" alt="Logo&emsp;"></img>
        <a href="/" className="navbar-brand">
          Kene's Cribs
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" exact to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/listings">
                Listings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/agents">
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
