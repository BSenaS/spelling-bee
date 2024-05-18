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

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full bg-[#635948] h-16 gap-4">
      <Link href={"/"}>
        <BeeSvg width={30} />
      </Link>
      <GrTrophy size={"30px"} className="cursor-pointer text-[#FAFAFA]" />

      <FaRankingStar size={"35px"} className="cursor-pointer text-[#FAFAFA]" />

      <IoSettingsOutline
        size={"35px"}
        className="cursor-pointer text-[#FAFAFA]"
      />
      <FaRegQuestionCircle
        size={"34px"}
        className="cursor-pointer text-[#FAFAFA]"
      />
    </div>
  );
};

export default Header;
