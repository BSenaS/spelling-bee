import { GameContext } from "@/context/GameContext";
import React, { useContext, useEffect } from "react";

const Hive = ({ hiveName, letter }) => {
  const { setInput } = useContext(GameContext);

  const handleClick = (e) => {
    setInput(e.target.value);
  };

  return (
    <div
      className={`hexagon ${hiveName} cursor-pointer  ml-2 font-bold text-xl `}
      onClick={handleClick}
      value={"a"}
    >
      {letter}
    </div>
  );
};

export default Hive;
