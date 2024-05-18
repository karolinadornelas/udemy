import React from "react";
const CakeDetails = ({ fatia, flavor, topping, filling }) => {
  return (
    <div>
      <h2>Detalhes do Bolo</h2>
      <ul>
        <li>sabor: {flavor}</li>
        <li>cobertura: {topping}</li>
        <li>recheio: {filling}</li>
      </ul>
      {!fatia && <p>Pedido de bolo inteiro</p>}
    </div>
  );
};

export default CakeDetails;
