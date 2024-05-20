"use client";
import { GameContext } from "@/context/GameContext";
import BeeSvg from "@/utils/BeeSvg";
import React, { useContext, useEffect } from "react";

const ProgressBar = () => {
  const { minValue, setMinValue, maxValue, setMaxValue } =
    useContext(GameContext);

  const progressWidth = (minValue / maxValue) * 100;

  return (
    <div className="flex flex-col">
      <div className="text-[#FAFAFA] flex flex-col mx-auto py-2">
        <span>{`${minValue}/${maxValue}`}</span>
      </div>
      <div className="w-11/12 bg-[#3F435D] rounded-full h-5 dark:bg-gray-700 mx-auto">
        <div
          className="bg-[#B58A13] h-5 rounded-full"
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
