"use client";
import { GameContext } from "@/context/GameContext";
import BeeSvg from "@/utils/BeeSvg";
import React, { useContext, useEffect } from "react";

const Timer = () => {
  const { seconds, setSeconds, startGame } = useContext(GameContext);

  useEffect(() => {
    if (seconds > 0 && startGame) {
      const timerId = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [seconds]);

  const percentage = (seconds / 60) * 100;

  return (
    <div className="flex flex-col w-11/12 mx-auto gap-2 text-lg">
      <div className="mx-auto text-[#FAFAFA] font-bold">{seconds}</div>
      <div className="flex flex-col w-full bg-[#3F435D] h-5 rounded-lg overflow-hidden mx-auto">
        <div
          style={{ width: `${percentage}%` }}
          className="bg-[#B58A13] h-6 transition-all ease-linear duration-1000 "
        >
          <span className="flex justify-end">
            <BeeSvg width={15} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Timer;