"use client";
import { GameContext } from "@/context/GameContext";
import React, { useContext, useEffect, useRef, useState } from "react";

const Hint = ({ setPopUp, params }) => {
  const { gameData, count } = useContext(GameContext);
  const getGameData = gameData[params];
  const currentAnswers = getGameData[count];

  const modalRef = useRef(null);
  const closeModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setPopUp(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeModal);
    return () => {
      document.removeEventListener("mousedown", closeModal);
    };
  }, []);

  return (
    <div className="w-screen h-screen bg-[#000000] bg-opacity-30 fixed top-0 right-0 flex justify-center items-center z-50">
      <div
        className="bg-[#635948] p-2 rounded-md shadow-md max-w-[350px] max-h-[600px]"
        ref={modalRef}
      >
        {" "}
        <h1 className="font-bold text-center text-lg my-5">Hints</h1>
        {currentAnswers.answers.map((item, index) => (
          <p key={index} className="inline-flex font-semibold text-[#13141C]">
            {`${index + 1}.`}
            <span className="mr-2">{item}</span>
          </p>
        ))}
        <div className="flex justify-center mt-5">
          <button
            className="outline outline-1 outline-[#101f20] bg-[#FAFAFA] text-black py-2 px-4 rounded-md"
            onClick={() => setPopUp(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hint;
