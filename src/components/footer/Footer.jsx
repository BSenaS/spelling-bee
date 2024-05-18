import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#635948] py-8">
      <div className="mx-4 text-center">
        <h1 className="text-[#FAFAFAFA] font-bold text-3xl">
          SpellBee: Spelling Bee Game
        </h1>
        <p className="text-[#DFE1F3]">
          Game rules: Create the maximum number of words using 7 letters from
          the hive. Words must contain at least 4 letters and include the center
          letter. Four-letter words are worth 1 point each. Longer words earn 1
          point per letter. How many words can you make with 7 letters?
        </p>
      </div>
    </div>
  );
};

export default Footer;
