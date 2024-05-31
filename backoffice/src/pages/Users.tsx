import React, { useState, useEffect } from "react";
import Table from "../components/Table";

const Users: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    // Fetch users data here
    setUsers([
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
    ]);
  }, []);

  return (
    <div>
      <h2>Usuarios</h2>
      <Table columns={["id", "name", "email"]} data={users} />
    </div>
  );
};

export default Users;
