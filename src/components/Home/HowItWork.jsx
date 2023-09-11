import React from "react";
import platform from "../../assets/home/platform.png";
import check from "../../assets/home/check.png";
import secure from "../../assets/home/secure.png";
import quality from "../../assets/home/quality.png";
const HowItWork = () => {
  return (
    <div className="md:p-[60px] lg:p-[120px] mt-6 md:mt-0  bg-[#F7F7FB] ">
      <div className="flex gap-3 md:gap-14 flex-col-reverse md:flex-row ">
        <div className="w-full md:w-1/2">
          <p className="nekst font-normal text-center md:text-left  text-[25px] md:text-[35px] lg:text-[45px]  mt-[20px] leading-[45px] text-[#29273E]">
            Why people <span className=" text-[#5248AA]"> turn</span> to Iguard
            platform
          </p>
          <p className="font-normal  text-center md:text-left mt-[20px] md:mt-[40px] text-[18px] leading-[27px] text-[#818186]">
            Your Trusted Partner in Unlocking Career Potential, <br />{" "}
            Connecting Talent with Opportunities, and <br /> Navigating the Path
            to Professional Success.
          </p>
          <div className="mt-[30px]">
            <DummyCard />
          </div>
          <div className="mt-[50px] mb-[50px] md:[0px] flex items-center justify-center md:flex-none md:justify-start ">
            <button className="text-[#40378A] hover:text-white duration-300 hover:bg-[#40378A] text-[15px] px-[20px] bg-white  w-[200px] h-[60px] rounded-[5px] border-[2px] border-[#40378A] ">
              GET STARTED NOW
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-[300px] md:h-[560px] mt-6 md:mt-0 object-contain"
            src={platform}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWork;

const DummyCard = () => {
  return (
    <div className="flex items-center md:items-start justify-center md:justify-start gap-10  md:gap-10 lg:gap-16 ">
      <div>
        <div className="w-[70px] rounded-[5px] h-[63px] bg-[#DEDDEE] items-center justify-center flex">
          <img
            className="w-[28px] h-[28px] object-cover"
            src={quality}
            alt=""
          />
        </div>
        <p className=" sm:text-[14px] md:text-[16px] lg:text-[20px] mt-[6px] text-[#29273E] leading-[24px] font-medium">
          Proof of <br />
          quality
        </p>
      </div>
      <div>
        <div className="w-[70px]  rounded-[5px]  h-[63px] bg-[#DEDDEE] items-center justify-center flex">
          <img className="w-[28px] h-[28px] object-cover" src={check} alt="" />
        </div>
        <p className=" sm:text-[14px] md:text-[16px] lg:text-[20px] mt-[6px] text-[#29273E] leading-[24px] font-medium">
          Physical <br />
          checks
        </p>
      </div>
      <div>
        <div className="w-[70px]  rounded-[5px]  h-[63px] bg-[#DEDDEE] items-center justify-center flex">
          <img className="w-[28px] h-[28px] object-cover" src={secure} alt="" />
        </div>
        <p className=" sm:text-[14px] md:text-[16px] lg:text-[20px] mt-[6px] text-[#29273E] leading-[24px] font-medium">
          Safe and <br />
          secure
        </p>
      </div>
    </div>
  );
};
