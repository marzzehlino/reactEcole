// Librairies
import React from "react";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

// Components
import ThemeContextProvider from "../../context/theme-context";

import { NavLink } from "react-router-dom";

function Navbar() {

  return (
    <ThemeContextProvider>
      <div>
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Navbar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item d-flex flex-row">
                    <NavLink to={`/`} className="nav-link">Acceuil</NavLink>
                    <NavLink to={`/contact`} className="nav-link">Contact</NavLink>
                  </li>
                  <li className="nav-item"></li>
                </ul>
              </div>
            </div>
          </nav>
      </div>
    </ThemeContextProvider>
  );
}

export default Navbar;
