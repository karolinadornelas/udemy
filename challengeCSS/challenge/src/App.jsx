import React from "react";
import "./App.css";
import CakeDisplay from "./componentes/CakeDisplay";

function App() {
  const bolos = [
    {
      id: 1,
      flavor: "chocolate",
      description: "bolo de chocolate com recheio de mousse de ninho",
    },
    {
      id: 2,
      flavor: "ninho",
      description: "bolo de massa branca com recheio de mousse de ninho",
    },
    {
      id: 3,
      flavor: "morango",
      description:
        "bolo de massa branca com recheio de mousse cremoso de morango",
    },
  ];

  return (
    <>
      <h1>Bolinhos da Bita</h1>
      <div className="cake_display">
        {bolos.map((bolo) => (
          <CakeDisplay
            key={bolo.id}
            flavor={bolo.flavor}
            description={bolo.description}
          />
        ))}
      </div>
    </>
  );
}

export default App;
