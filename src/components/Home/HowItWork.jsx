import React from "react";
import platform from "../../assets/home/platform.png";
import check from "../../assets/home/check.png";
import secure from "../../assets/home/secure.png";
import quality from "../../assets/home/quality.png";
const HowItWork = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="bg-[#F7F7FB] px-4 md:px-10 lg:px-32 py-10 md:py-16 lg:py-32">
        <div className="flex flex-col md:flex-row-reverse gap-10 lg:gap-28">
          <div className="flex-1">
            <img className="mx-auto" src={platform} alt="" />
          </div>
          <div className="flex-1">
            <h2 className="nekst text-3xl md:text-4xl lg:text-5xl text-[#29273E]">
              Why people <span className=" text-[#5248AA]"> turn</span> to
              Iguard platform
            </h2>
            <p className="text-justify text-sm md:text-base lg:text-lg my-4 lg:my-7 text-[#818186]">
              Your Trusted Partner in Unlocking Career Potential, Connecting
              Talent with Opportunities, and Navigating the Path to Professional
              Success.
            </p>
            <div className="">
              <DummyCard />
            </div>
            <button className="mt-6 lg:mt-20 px-5 lg:px-10 py-3 lg:py-4 border border-[#5248AA] rounded-[5px] text-sm lg:text-base font-bold text-[#5248AA] uppercase hover:text-[#FFFFFF] hover:bg-[#5248AA] duration-300">
              register now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;

const DummyCard = () => {
  return (
    <div className="flex items-center md:items-start justify-center md:justify-start gap-10 lg:gap-16 ">
      <div>
        <div className="w-[70px] rounded-[5px] h-[63px] bg-[#DEDDEE] items-center justify-center flex">
          <img
            className="w-[28px] h-[28px] object-cover"
            src={quality}
            alt=""
          />
        </div>
        <p className=" text-base md:text-base lg:text-xl mt-[6px] text-[#29273E] font-medium">
          Proof of <br />
          quality
        </p>
      </div>
      <div>
        <div className="w-[70px]  rounded-[5px]  h-[63px] bg-[#DEDDEE] items-center justify-center flex">
          <img className="w-[28px] h-[28px] object-cover" src={check} alt="" />
        </div>
        <p className=" text-base md:text-base lg:text-xl mt-[6px] text-[#29273E] font-medium">
          Physical <br />
          checks
        </p>
      </div>
      <div>
        <div className="w-[70px]  rounded-[5px]  h-[63px] bg-[#DEDDEE] items-center justify-center flex">
          <img className="w-[28px] h-[28px] object-cover" src={secure} alt="" />
        </div>
        <p className=" text-base md:text-base lg:text-xl mt-[6px] text-[#29273E] font-medium">
          Safe and <br />
          secure
        </p>
      </div>
    </div>
  );
};
