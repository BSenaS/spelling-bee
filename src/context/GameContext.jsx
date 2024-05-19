"use client";
import React, { createContext, useContext, useState } from "react";
import { data } from "@/data/data";
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
  //Text input
  const [input, setInput] = useState("");
  //Game Data
  const [gameData, setGameData] = useState(data);
  const [count, setCount] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);

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
        input,
        setInput,
        gameData,
        setGameData,
        count,
        setCount,
        correctAnswers,
        setCorrectAnswers,
      }}
    >
      <div>{children}</div>
    </GameContext.Provider>
  );
};

export default GameContextProvider;
