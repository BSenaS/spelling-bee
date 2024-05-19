"use client";
import React, { createContext, useContext, useState } from "react";

export const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  //Found Words
  const [foundWords, setFoundWords] = useState([
    "Test",
    "Merhaba",
    "Deneme",
    "Test",
    "Merhaba",
    "Deneme",
    "Test",
    "Merhaba",
    "Deneme",
  ]);

  //ProgressBar states.
  const [minValue, setMinValue] = useState(105);
  const [maxValue, setMaxValue] = useState(250);
  //Timer state.
  const [seconds, setSeconds] = useState(60);
  const [startGame, setStartGame] = useState(false);

  return (
    <GameContext.Provider
      value={{
        minValue,
        setMinValue,
        maxValue,
        setMaxValue,
        foundWords,
        setFoundWords,
        seconds,
        setSeconds,
        startGame,
        setStartGame,
      }}
    >
      <div>{children}</div>
    </GameContext.Provider>
  );
};

export default GameContextProvider;
