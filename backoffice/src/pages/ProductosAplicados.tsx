import React, { useState, useEffect } from "react";
import Table from "../components/Table";

const ProductosAplicados: React.FC = () => {
  const [productos, setProductos] = useState<any[]>([]);

  useEffect(() => {
    // Fetch productos data here
    setProductos([
      { id: 1, producto: "Producto A", cantidad: "1ml" },
      { id: 2, producto: "Producto B", cantidad: "2ml" },
    ]);
  }, []);

  return (
    <div>
      <h2>Productos Aplicados</h2>
      <Table columns={["id", "producto", "cantidad"]} data={productos} />
    </div>
  );
};

export default ProductosAplicados;
