import React from "react";
import { Tweet } from "react-tweet";

const App = () => {
  const ids = [
    "1686359913864314880",
    "1675854386428272640",
    "1686776958040883200",
    "1686820632653086735",
    "1686732582007042048",
    "1686835208153088001",
  ];

  return (
    <div>
      {ids.map((id) => (
        <Tweet key={id} id={id} />
      ))}
    </div>
  );
};

export default App;
