import React, { useState, useEffect } from "react";
import Table from "../components/Table";

const Clientes: React.FC = () => {
  const [clientes, setClientes] = useState<any[]>([]);

  useEffect(() => {
    // Fetch clientes data here
    setClientes([
      { id: 1, name: "Carlos Ruiz", email: "carlos@example.com" },
      { id: 2, name: "Laura Martínez", email: "laura@example.com" },
    ]);
  }, []);

  return (
    <div>
      <h2>Clientes</h2>
      <Table columns={["id", "name", "email"]} data={clientes} />
    </div>
  );
};

export default Clientes;
