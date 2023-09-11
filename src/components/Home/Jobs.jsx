import React from "react";
import guard from "../../assets/home/guard.png";
import shield from "../../assets/home/shield.png";
const Jobs = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="bg-[#F7F7FB] px-4 md:px-10 lg:px-32 py-10 md:py-16 lg:py-32">
        <div className="flex flex-col md:flex-row gap-5 lg:gap-28">
          <div className="flex-1">
            <img src={guard} className="lg:mx-auto" />
          </div>
          <div className="flex-1">
            <p className="text-base md:text-lg lg:text-xl font-medium uppercase text-[#5248AA]">
              For Security guard
            </p>
            <h2 className="mt-2 lg:mt-3 mb-4 lg:mb-7 text-3xl md:text-4xl lg:text-5xl nekst text-[#29273E]">
              Over <span className=" text-[#5248AA]"> 50,000 </span> jobs
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-[#818186]">
              Whether just starting out or looking to improve or grow your
              business, our expert advice can help you on the road to success.
            </p>
            <div className="mt-4 lg:mt-7">
              <div className="flex gap-3">
                <img
                  src={shield}
                  className="w-[43px] h-[43px] object-contain"
                />
                <div>
                  <p className="text-base md:text-lg lg:text-xl font-semibold text-[#29273E]">
                    Trust and credibility get verified and recommened
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mt-3 lg:mt-6">
                <img
                  src={shield}
                  className="w-[43px] h-[43px] object-contain"
                />
                <div>
                  <p className="text-base md:text-lg lg:text-xl font-semibold text-[#29273E]">
                    Expand Your Reach faster and better clients
                  </p>
                </div>
              </div>
            </div>
            <button className="mt-6 lg:mt-12 px-5 lg:px-10 py-3 lg:py-4 border border-[#5248AA] rounded-[5px] text-sm lg:text-base font-bold text-[#5248AA] uppercase hover:text-[#FFFFFF] hover:bg-[#5248AA] duration-300">
              register now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
