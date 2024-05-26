import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="startScreen">
      <h1>word play</h1>
      <button onClick={startGame}>começar!</button>
    </div>
  );
};

export default StartScreen;
