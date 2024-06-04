import "./GameOverScreen.css";
import React from "react";

function GameOverScreen({ retry }) {
  return (
    <div className="gameOver">
      <h1>game over</h1>
      <button onClick={retry}>reiniciar</button>
    </div>
  );
}

export default GameOverScreen;
