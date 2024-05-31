import React, { useState, useEffect } from "react";
import Table from "../components/Table";

const Consultas: React.FC = () => {
  const [consultas, setConsultas] = useState<any[]>([]);

  useEffect(() => {
    // Fetch consultas data here
    setConsultas([
      { id: 1, motivo: "Revisión", fecha: "2023-05-31" },
      { id: 2, motivo: "Vacunación", fecha: "2023-06-01" },
    ]);
  }, []);

  return (
    <div>
      <h2>Consultas</h2>
      <Table columns={["id", "motivo", "fecha"]} data={consultas} />
    </div>
  );
};

export default Consultas;
