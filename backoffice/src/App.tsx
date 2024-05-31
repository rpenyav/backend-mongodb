import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Users from "./pages/Users";
import Consultas from "./pages/Consultas";
import Clientes from "./pages/Clientes";
import Pacientes from "./pages/Pacientes";
import Tratamientos from "./pages/Tratamientos";
import ProductosAplicados from "./pages/ProductosAplicados";
import Candidaturas from "./pages/Candidaturas";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/consultas" element={<Consultas />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/pacientes" element={<Pacientes />} />
          <Route path="/tratamientos" element={<Tratamientos />} />
          <Route path="/productos-aplicados" element={<ProductosAplicados />} />
          <Route path="/candidaturas" element={<Candidaturas />} />
          <Route path="/" element={<Users />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
