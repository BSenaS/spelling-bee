"use client";
import BeeSvg from "@/utils/BeeSvg";
import React, { useState } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher";
import Hint from "@/utils/Hint";

const Header = ({ params }) => {
  const [popUp, setPopUp] = useState(false);

  return (
    <div className="w-full bg-[#635948]">
      <div className="flex flex-row items-center justify-between  h-16 gap-4 max-w-[700px] mx-auto">
        <div className="flex flex-row gap-2 items-center justify-center">
          <Link href={"/"} className="ml-4">
            <BeeSvg width={30} />
          </Link>
          <LanguageSwitcher params={params} />
        </div>
        <div className="flex gap-4 items-center mr-4">
          <div className="flex flex-row items-center justify-center">
            <FaRegQuestionCircle
              size={"34px"}
              className="cursor-pointer text-[#FAFAFA] hover:text-[#b58a13]"
              onClick={() => setPopUp(true)}
            />
          </div>

          {popUp && <Hint setPopUp={setPopUp} params={params} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
