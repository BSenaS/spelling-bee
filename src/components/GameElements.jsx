"use client";
import { GameContext } from "@/context/GameContext";
import Hive from "@/utils/Hive";
import React, { useContext, useEffect } from "react";

const GameElements = ({ params }) => {
  const { input, setInput, gameData, setGameData, count, setCount } =
    useContext(GameContext);

  const getGameData = gameData[params];
  const letters = getGameData[count].availableLetters.toUpperCase();

  //Input
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleDeleteInput = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleReset = () => {
    if (count < getGameData.length - 1) {
      setCount((prevCount) => prevCount + 1);
    } else {
      setCount(0);
    }
  };

  const hives = letters.split("").map((letter, index) => ({
    hiveName: `hive${index + 1}`,
    letter: letter,
  }));

  useEffect(() => {
    console.log("Count Updated", count);
  }, [count]);

  return (
    <div className="flex flex-col h-screen w-11/12 text-[#FAFAFA] text-center gap-4 mx-auto">
      <div>
        <input
          type="text"
          onChange={handleInput}
          placeholder="ANSWER"
          className="text-[#FAFAFA] text-center py-4 font-bold bg-[#111111]"
          value={input}
        />
      </div>

      <div className="w-[300px] h-[300px] mx-auto relative">
        {hives.map((hive, index) => (
          <Hive key={index} hiveName={hive.hiveName} letter={hive.letter} />
        ))}
      </div>
      <div className="flex flex-col gap-2 items-center py-4">
        <div className="flex flex-row gap-4">
          <button
            className="bg-[#E6E6E6] text-[#13141C] font-semibold border-none rounded-3xl w-[90px] h-[40px]"
            onClick={handleDeleteInput}
          >
            Delete
          </button>
          <button
            className="bg-[#E6E6E6] text-[#13141C] font-semibold border-none rounded-3xl w-[90px] h-[40px]"
            onClick={handleReset}
          >
            Reset
          </button>
          <button className="bg-[#E6E6E6] text-[#13141C] font-semibold border-none rounded-3xl w-[90px] h-[40px]">
            Enter
          </button>
        </div>
        <div>
          <button className="bg-[#B58A13] text-[#13141C] font-semibold border-none rounded-3xl w-[90px] h-[40px]">
            Start!
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameElements;
