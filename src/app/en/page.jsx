import ProgressBar from "@/components/ProgressBar";
import Footer from "@/components/footer/Footer";
import Header from "@/components/navbar/Header";
import React from "react";

const EnPage = () => {
  return (
    <div className="bg-[#13141C]">
      <Header />
      <ProgressBar />
      <div className="h-[700px] bg-[#13141C] text-[#FAFAFAFA]">TEST</div>
      <Footer />
    </div>
  );
};

export default EnPage;
