"use client";
import { GameContext } from "@/context/GameContext";
import React, { useContext, useState } from "react";

const FoundWordList = () => {
  const { foundWords, setFoundWords } = useContext(GameContext);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="w-11/12 mx-auto my-4">
      <div
        className="text-[#FAFAFA] border-2 border-solid border-[#3F435D] py-2 px-4 flex items-center justify-between cursor-pointer"
        onClick={toggleDropdown}
      >
        You have found {foundWords.length} words
        <span className="text-[#B58A13]">
          {isOpen ? "expand_less" : "expand_more"}
        </span>
      </div>
      {isOpen && (
        <div className="flex flex-row flex-wrap bg-[#1E1E2C] py-2 absolute w-11/12 z-50 mt-1 rounded-md shadow-lg overflow-hidden">
          {foundWords.map((word, index) => (
            <div key={index} className="flex text-[#FAFAFA] py-1 px-4">
              {word}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FoundWordList;
