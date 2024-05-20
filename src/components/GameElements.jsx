"use client";
import { GameContext } from "@/context/GameContext";
import Hive from "@/utils/Hive";
import React, { useContext, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import FoundWordList from "./FoundWordList";
import Timer from "./Timer";

const GameElements = ({ params }) => {
  const {
    input,
    setInput,
    gameData,
    setGameData,
    count,
    setCount,
    startGame,
    setStartGame,
    setSeconds,
    setFoundWords,
    setMaxValue,
    foundWords,
    setMinValue,
    constantsDic,
  } = useContext(GameContext);

  //data.en
  const getGameData = gameData[params];
  const letters = getGameData[count].availableLetters.toUpperCase();
  const currentAnswers = getGameData[count];
  const d = constantsDic[params];

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
    setInput("");
    setSeconds(60);
    setStartGame(false);
    setFoundWords([]);
    setMinValue(0);
  };

  const handleStart = () => {
    setStartGame(true);

    console.log("Start");
  };

  const handleSubmitBtn = (event) => {
    event.preventDefault();
    const foundWord = getGameData[count].answers.includes(input.toLowerCase());
    const wordExist = foundWords.includes(input);
    const middleLetterExist = input.includes(
      getGameData[count].middleLetter.toUpperCase()
    );

    console.log("middle letter ->", middleLetterExist);

    if (input.length < 4) {
      console.log("Kelime 4 harften küçük olamaz.");
      setInput("");
    } else if (input.length > 15) {
      console.log("Kelime 15 harften büyük olamaz.");
      setInput("");
    } else if (wordExist) {
      console.log("Bu kelime daha önce girildi");
      setInput("");
    } else if (!middleLetterExist) {
      console.log("Kelime orta harfi içermiyor.");
      setInput("");
    } else if (foundWord) {
      //Kelime puanı hesaplama
      const wordScore = input.split("").length;
      setMinValue((prevMinValue) => prevMinValue + (wordScore - 3));
      console.log("Kelimenizin puanı ->", wordScore);
      console.log("tebrikler kelimeyi buldunuz!", input);
      setSeconds((prevSec) => prevSec + 15);
      setFoundWords((prevFoundWords) => [...prevFoundWords, input]);
      setInput("");
    } else {
      console.log("Kelime Bulunamadı");
      setInput("");
    }
  };

  const hives = letters.split("").map((letter, index) => ({
    hiveName: `hive${index + 1}`,
    letter: letter,
  }));

  useEffect(() => {
    setMaxValue(currentAnswers.totalPoint);
    console.log();
  }, []);

  useEffect(() => {
    setMaxValue(currentAnswers.totalPoint);
  }, [count]);

  return (
    <div className="flex flex-col h-screen w-11/12 text-[#FAFAFA] text-center gap-4 mx-auto max-w-[700px]">
      <ProgressBar params={params} />
      <FoundWordList params={params} />
      <Timer />
      <form onSubmit={handleSubmitBtn}>
        <div>
          <input
            type="text"
            onChange={handleInput}
            placeholder={d.answer}
            className="text-[#FAFAFA] text-center py-4 font-bold bg-[#13141C] border border-[#243c5a] rounded-md"
            value={input}
            onSubmit={handleSubmitBtn}
          />
        </div>
        <button type="submit" style={{ display: "none" }}>
          On Submit Enter
        </button>
      </form>

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
            {d.deleteBtn}
          </button>
          <button
            className="bg-[#E6E6E6] text-[#13141C] font-semibold border-none rounded-3xl w-[90px] h-[40px]"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className="bg-[#E6E6E6] text-[#13141C] font-semibold border-none rounded-3xl w-[90px] h-[40px]"
            onClick={handleSubmitBtn}
            disabled={!startGame}
          >
            {d.submitBtn}
          </button>
        </div>
        <div>
          <button
            className="bg-[#B58A13] text-[#13141C] font-semibold border-none rounded-3xl w-[90px] h-[40px]"
            onClick={handleStart}
          >
            {d.startBtn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameElements;
