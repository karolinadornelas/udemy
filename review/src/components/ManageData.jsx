import { useState } from "react";

function ManageData() {
  let someData = 10;
  const [number, setNumber] = useState();
  return (
    <>
      <div className="App">
        <p>Valor:{number}</p>
        <button onClick={() => setNumber(25)}>mudar valor</button>
      </div>
    </>
  );
}

export default ManageData;
