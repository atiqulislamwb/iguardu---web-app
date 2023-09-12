import React from "react";
import work from "../../assets/home/work.png";

const FindGreatWork = () => {
  return (
    <div className="max-w-[1440px] mx-auto overflow-hidden">
      <div className="px-4 md:px-10 lg:px-32 pt-10 md:pt-16 lg:pt-28 pb-48 md:pb-64 bg-[#F7F7FB] flex flex-col md:flex-row gap-5 lg:gap-20 items-center">
        <div className="flex-1">
          <img className="mx-auto" src={work} alt="" />
        </div>
        <div className="flex-1 lg:pe-24">
          <div>
            <p className="text-base md:text-lg lg:text-xl font-medium text-[#5248AA] mb-2 md:mb-3 lg:mb-6">
              FOR SECURITY GUARD
            </p>
            <h2 className="nekst text-3xl md:text-4xl lg:text-5xl text-[#29273E] font-bold mb-2 md:mb-3">
              Find great work
            </h2>
            <p className="text-base md:text-lg text-[#818186]">
              Whether just starting out or looking to improve or grow your
              business, our expert advice can help you on the road to success.
            </p>
          </div>
          <hr className="h-[2px] my-4 md:my-4 lg:my-11 bg-[#5248AA]" />
          <div className="text-sm md:text-base mb-6 md:mb-4 lg:mb-11 flex flex-row justify-between gap-3 lg:gap-10">
            <p>Find opportunities for every stage of your career </p>
            <p>Control when and where you work </p>
            <p>Explore different ways to earn </p>
          </div>
          <button className="px-5 lg:px-10 py-3 lg:py-4 border border-[#5248AA] rounded-[5px] text-sm lg:text-base font-bold text-[#5248AA] hover:text-[#FFFFFF] hover:bg-[#5248AA] duration-300">
            FIND OPPORTUNITIES
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindGreatWork;
