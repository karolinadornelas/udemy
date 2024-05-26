import "./App.css";
import StartScreen from "./components/StartScreen";
import GameScreen from "./components/GameScreen";
import GameOverScreen from "./components/GameOverScreen";
import { useCallback, useState, useEffect } from "react";
import { wordList } from "./data/WordList";

const status = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "over" },
];
function App() {
  const [gameStatus, setGameStatus] = useState(status[0].name);
  const [words] = useState(wordList);
  const [selectedWord, setSelectedWord] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const selectWordAndCategory = () => {
    //selecionando categoria aleatória
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    console.log(category);

    //selecionando palavra aleatória
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    console.log(word);
  };

  //começa o jogo
  const startGame = () => {
    selectWordAndCategory();
    setGameStatus(status[1].name);
  };

  //verificar a letra inserida
  const verifyLetter = () => {
    setGameStatus(status[2].name);
  };

  //reiniciar
  const retry = () => {
    setGameStatus(status[0].name);
  };

  return (
    <>
      <div className="App">
        {gameStatus === "start" && <StartScreen startGame={startGame} />}
        {gameStatus === "game" && <GameScreen verifyLetter={verifyLetter} />}
        {gameStatus === "over" && <GameOverScreen retry={retry} />}
      </div>
    </>
  );
}

export default App;
