"use client";
import React from "react";
import enFlag from "../../public/enFlag.png";
import trFlag from "../../public/trFlag.png";
import Link from "next/link";
import Image from "next/image";

const LanguageSwitcher = ({ params }) => {
  return (
    <div>
      {params === "en" ? (
        <Link href={"/tr"}>
          <Image src={"/trFlag.png"} alt="trFlag" width="36" height="36" />
        </Link>
      ) : params === "tr" ? (
        <Link href={"/en"}>
          <Image src={"/enFlag.png"} alt="enFlag" width="36" height="36" />
        </Link>
      ) : null}
    </div>
  );
};

export default LanguageSwitcher;
