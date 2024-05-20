import GameElements from "@/components/GameElements";
import Footer from "@/components/footer/Footer";
import Header from "@/components/navbar/Header";
import React from "react";

const EnPage = () => {
  return (
    <div className="flex flex-col bg-[#13141C] gap-4 ">
      <Header />
      <GameElements params={"en"} />
      <Footer params={"en"} />
    </div>
  );
};

export default EnPage;
