import { GameContext } from "@/context/GameContext";
import React, { useContext } from "react";

const Hive = ({ top, left, color }) => {
  const { input, setInput } = useContext(GameContext);

  const handleClick = (e) => {
    setInput(e.target.value);
  };
  console.log(input);

  return (
    <div
      className={`hexagon ${top} ${left} cursor-pointer ${color} ml-2 font-bold text-xl hover:bg-[#FAFAFA]`}
      onClick={handleClick}
      value={"a"}
    >
      <p>A</p>
    </div>
  );
};

export default Hive;
