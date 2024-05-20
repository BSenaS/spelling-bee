"use client";
import { GameContext } from "@/context/GameContext";
import React, { useContext, useEffect, useState } from "react";
import constants from "@/dictionaries/dictionary";
import { usePathname } from "next/navigation";

const FoundWordList = ({ params }) => {
  const { foundWords, setFoundWords, constantsDic } = useContext(GameContext);
  const [isOpen, setIsOpen] = useState(false);
  const d = constantsDic[params];

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    // console.log("Found word list params", params);
    // console.log(d.foundedWords);
    console.log(constantsDic[params].foundedWords);
  }, []);

  return (
    <div className="w-11/12 mx-auto my-4 ">
      <div
        className="text-[#FAFAFA] border-2 border-solid border-[#3F435D] py-2 px-4 flex items-center justify-between cursor-pointer"
        onClick={toggleDropdown}
      >
        <span>
          {d.foundedWords}
          {":"} {foundWords.length}
        </span>
        <span className="text-[#B58A13]">{isOpen ? ">" : ">"}</span>
      </div>
      {isOpen && (
        <div className="flex flex-row flex-wrap bg-[#1E1E2C] py-2 absolute z-50 mt-1 rounded-md shadow-lg overflow-hidden w-10/12 md:max-w-[600px] lg:max-w-[640px]">
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
