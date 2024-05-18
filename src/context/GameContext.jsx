"use client";
import React, { createContext, useContext, useState } from "react";

export const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  //ProgressBar states.
  const [minValue, setMinValue] = useState(105);
  const [maxValue, setMaxValue] = useState(250);

  return (
    <GameContext.Provider
      value={{ minValue, setMinValue, maxValue, setMaxValue }}
    >
      <div>{children}</div>
    </GameContext.Provider>
  );
};

export default GameContextProvider;
