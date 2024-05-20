"use client";
import { GameContext } from "@/context/GameContext";
import React, { useContext } from "react";

const Footer = ({ params }) => {
  const { constantsDic } = useContext(GameContext);
  const d = constantsDic[params];

  return (
    <div className="bg-[#635948] py-8">
      <div className="flex flex-col gap-4 mx-4 text-center">
        <h1 className="text-[#FAFAFAFA] font-bold text-3xl">{d.footerTitle}</h1>
        <p className="text-[#DFE1F3] max-w-[700px] mx-auto">{d.footerInfo}</p>
      </div>
    </div>
  );
};

export default Footer;
