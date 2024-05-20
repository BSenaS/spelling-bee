import { GameContext } from "@/context/GameContext";
import { Input } from "postcss";
import React, { useContext, useEffect } from "react";

const Hive = ({ hiveName, letter }) => {
  const { input, setInput, startGame } = useContext(GameContext);

  const handleClick = (tarLetter) => () => {
    setInput((prevInput) => prevInput + tarLetter);
  };

  return (
    <button
      className={`hexagon ${hiveName} cursor-pointer  ml-2 font-bold text-xl `}
      onClick={handleClick(letter)}
      disabled={!startGame}
    >
      {letter}
    </button>
  );
};

export default Hive;
