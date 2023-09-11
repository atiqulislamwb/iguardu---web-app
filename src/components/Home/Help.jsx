import React from "react";
import logo from "../../assets/logo.svg";

const Help = () => {
  return (
    <div className="mb-28 container m-auto bg-[#5248AA] py-12 px-36 rounded-[10px] flex items-center gap-40">
      <div className="flex-1">
        <h2 className="text-4xl mb-3 text-[#F8FAF7] font-bold">
          We are here to help
        </h2>
        <p className="text-lg mb-3 text-[#F8FAF7] text-justify">
          Reach out today for expert guidance and personalized solutions. We are
          here to help you achieve your goals.
        </p>
        <button className="px-10 py-4 border border-[#FFF] rounded-lg text-base font-bold text-[#FFF] hover:text-[#5248AA] hover:bg-[#FFF] duration-300">
          CONTACT US
        </button>
      </div>
      <div className="flex-1">
        <img className="mx-auto" src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Help;
