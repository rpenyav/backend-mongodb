import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Backoffice
        </NavLink>
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
            <li className="nav-item">
              <NavLink className="nav-link" to="/users">
                Usuarios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/consultas">
                Consultas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/clientes">
                Clientes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pacientes">
                Pacientes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/tratamientos">
                Tratamientos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/productos-aplicados">
                Productos Aplicados
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/candidaturas">
                Candidaturas
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
