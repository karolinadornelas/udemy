import "./GameScreen.css";
import React from "react";

function GameScreen({ verifyLetter }) {
  return (
    <div>
      <h1>game</h1>
      <button onClick={verifyLetter}>verificar</button>
    </div>
  );
}

export default GameScreen;
