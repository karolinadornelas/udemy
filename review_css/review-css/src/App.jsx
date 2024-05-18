import { useState } from "react";
import MyComponent from "./componentes/MyComponent";
import Title from "./componentes/Title";
import "./App.css";

function App() {
  const [name] = useState("karolina");
  const brownTitle = true;

  return (
    <>
      <div className="App">
        <h2>React com CSS</h2>
        <MyComponent />
        <p>parágrafo do app.js</p>
        {/* CSS inline */}
        <p
          style={{
            color: "pink",
            padding: "25px",
            borderTop: "10px solid magenta",
            borderBottom: "10px solid magenta",
          }}
        >
          isso é css inline
        </p>
        {/* CSS inline dinâmico */}
        <h2
          style={
            name === "karolina"
              ? { color: "pink", backgroundColor: "#000" }
              : null
          }
        >
          {name} gosta de rosa!
        </h2>

        <h2 className={brownTitle ? "brown-title" : "title"}>
          h2 com classe dinamica
        </h2>
        <h2 className={!brownTitle ? "brown-title" : "title"}>
          h2 com classe dinamica
        </h2>

        <Title />
      </div>
    </>
  );
}

export default App;
