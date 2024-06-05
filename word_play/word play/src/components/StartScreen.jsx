import "./StartScreen.css";

const GameStart = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Word Play</h1>
      <button onClick={startGame}>Jogar</button>
    </div>
  );
};

export default GameStart;