import React, { useState, useEffect } from "react";
import Table from "../components/Table";

const Candidaturas: React.FC = () => {
  const [candidaturas, setCandidaturas] = useState<any[]>([]);

  useEffect(() => {
    // Fetch candidaturas data here
    setCandidaturas([
      { id: 1, name: "Candidato 1", status: "Pendiente" },
      { id: 2, name: "Candidato 2", status: "Aceptado" },
    ]);
  }, []);

  return (
    <div>
      <h2>Candidaturas</h2>
      <Table columns={["id", "name", "status"]} data={candidaturas} />
    </div>
  );
};

export default Candidaturas;
