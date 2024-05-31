import React, { useState, useEffect } from "react";
import Table from "../components/Table";

const Pacientes: React.FC = () => {
  const [pacientes, setPacientes] = useState<any[]>([]);

  useEffect(() => {
    // Fetch pacientes data here
    setPacientes([
      { id: 1, name: "Max", owner: "Juan Pérez" },
      { id: 2, name: "Luna", owner: "Maria Gomez" },
    ]);
  }, []);

  return (
    <div>
      <h2>Pacientes</h2>
      <Table columns={["id", "name", "owner"]} data={pacientes} />
    </div>
  );
};

export default Pacientes;
