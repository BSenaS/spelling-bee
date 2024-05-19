"use client";
import { GameContext } from "@/context/GameContext";
import Hive from "@/utils/Hive";
import React, { useContext, useState } from "react";

const GameElements = () => {
  const { input, setInput } = useContext(GameContext);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  console.log(input);

  const hives = [
    { top: "top-0", left: "left-[30%]" },
    { top: "top-[-15%]", left: "left-[4%]" },
    { top: "top-[-14%]", left: "left-[4%]" },
    {
      top: "top-[-59%]",
      left: "left-[30%]",
      color: "!bg-[#B58A13]",
    },
    { top: "top-[-58%]", left: "left-[30%]" },
    { top: "top-[-134%]", left: "left-[56%]" },
    { top: "top-[-133%]", left: "left-[56%]" },
  ];

  return (
    <div className="flex flex-col h-screen w-11/12 text-[#FAFAFA] text-center gap-4 mx-auto">
      <div>
        <input
          type="text"
          onChange={handleInput}
          placeholder="ANSWER"
          className="text-[#FAFAFA] text-center py-4 font-bold bg-[#111111]"
        />
      </div>

      <div className="w-[300px] h-[300px] mx-auto relative">
        {hives.map((hive, index) => (
          <Hive
            key={index}
            top={hive.top}
            left={hive.left}
            color={hive.color}
          />
        ))}
      </div>
      <div>Buttons</div>
    </div>
  );
};

export default GameElements;
