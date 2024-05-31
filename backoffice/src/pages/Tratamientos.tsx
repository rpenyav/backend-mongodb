import React, { useState, useEffect } from "react";
import Table from "../components/Table";

const Tratamientos: React.FC = () => {
  const [tratamientos, setTratamientos] = useState<any[]>([]);

  useEffect(() => {
    // Fetch tratamientos data here
    setTratamientos([
      { id: 1, nombre: "Tratamiento A", dosis: "10mg" },
      { id: 2, nombre: "Tratamiento B", dosis: "20mg" },
    ]);
  }, []);

  return (
    <div>
      <h2>Tratamientos</h2>
      <Table columns={["id", "nombre", "dosis"]} data={tratamientos} />
    </div>
  );
};

export default Tratamientos;
