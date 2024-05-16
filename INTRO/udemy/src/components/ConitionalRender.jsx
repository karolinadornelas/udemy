import { useState } from "react";

const ConditionalRender = () => {
  const [name] = useState("karolina");

  return (
    <div>
      <h1>isso será exibido?</h1>
      {name === "gege" ? (
        <div>
          <p>é a karol!!</p>
        </div>
      ) : (
        <div>
          <p>hm quem é vc e o que fez com a karol?</p>
        </div>
      )}
    </div>
  );
};

export default ConditionalRender;
