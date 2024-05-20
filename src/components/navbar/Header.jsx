import BeeSvg from "@/utils/BeeSvg";
import React from "react";
import { ImStatsBars2 } from "react-icons/im";
import { GrTrophy } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { PiRankingThin } from "react-icons/pi";
import { PiRanking } from "react-icons/pi";
import { FaRankingStar } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher";

const Header = ({ params }) => {
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
          <GrTrophy size={"30px"} className="cursor-pointer text-[#FAFAFA]" />

          <FaRankingStar
            size={"35px"}
            className="cursor-pointer text-[#FAFAFA]"
          />

          <IoSettingsOutline
            size={"35px"}
            className="cursor-pointer text-[#FAFAFA]"
          />
          <FaRegQuestionCircle
            size={"34px"}
            className="cursor-pointer text-[#FAFAFA]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
