import React from "react";
import circleArrow from "../../assets/home/circle-arrow.png";
const FindBest = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="mb-6 md:mb-16 lg:mb-32 mt-16 md:mt-20 lg:mt-40 px-4 md:px-10 lg:px-32">
        <p className="text-2xl md:text-3xl lg:text-5xl text-[#29273E] mb-8 md:mb-14 lg:mb-28 font-bold text-center">
          Find a best candidate have <br /> never been
          <span className="text-[#5248AA]"> so easy</span>
        </p>
        <div className="">
          <div className="flex flex-col md:flex-row w-full mx-auto">
            <div className="w-15/15 md:w-3/15 shadow-md md:shadow-none py-5 md:py-0 mb-10 md:mb-0">
              <div className="h-[80px] lg:h-[90px] shadow-md w-[80px] lg:w-[90px] mx-auto rounded-full flex justify-center items-center bg-[#493E9C]">
                <p className="text-[35px] text-white font-semibold leading-[52px]">
                  1
                </p>
              </div>
              <p className="text-[#29273E] text-base md:text-lg lg:text-xl text-center  font-bold mt-4">
                Post your job
              </p>
              <p className="text-[#818186] text-sm md:text-base lg:text-lg text-center mt-3">
                Enter your requirements for the job you need undertaken
              </p>
            </div>
            <div className=" hidden md:w-1/15 md:block">
              <img
                src={circleArrow}
                className="w-[107px] h-[23px] object-contain"
              />
            </div>
            <div className="w-15/15 md:w-3/15 shadow-md md:shadow-none py-5 md:py-0 mb-10 md:mb-0">
              <div className="h-[80px] lg:h-[90px] shadow-md w-[80px] lg:w-[90px] mx-auto rounded-full flex justify-center items-center bg-[#493E9C]">
                <p className="text-[35px] text-white font-semibold leading-[52px]">
                  2
                </p>
              </div>
              <p className="text-[#29273E] text-base md:text-lg lg:text-xl text-center  font-bold mt-4">
                Job is sent to trades
              </p>
              <p className="text-[#818186] text-sm md:text-base lg:text-lg text-center mt-3">
                Your job is sent out instantly to tradespeople local to you.
              </p>
            </div>
            <div className=" hidden md:w-1/15 md:block">
              <img
                src={circleArrow}
                className="w-[107px] h-[23px] object-contain"
              />
            </div>
            <div className="w-15/15 md:w-3/15 shadow-md md:shadow-none py-5 md:py-0 mb-10 md:mb-0">
              <div className="h-[80px] lg:h-[90px] shadow-md w-[80px] lg:w-[90px] mx-auto rounded-full flex justify-center items-center bg-[#493E9C]">
                <p className="text-[35px] text-white font-semibold leading-[52px]">
                  3
                </p>
              </div>
              <p className="text-[#29273E] text-base md:text-lg lg:text-xl text-center  font-bold mt-4">
                Choose tradespeople
              </p>
              <p className="text-[#818186] text-sm md:text-base lg:text-lg text-center mt-3">
                Choose the best tradespeople that fits your requirements.
              </p>
            </div>
            <div className=" hidden md:w-1/15 md:block">
              <img
                src={circleArrow}
                className="w-[107px] h-[23px] object-contain"
              />
            </div>
            <div className="w-15/15 md:w-3/15 shadow-md md:shadow-none py-5 md:py-0 mb-10 md:mb-0">
              <div className="h-[80px] lg:h-[90px] shadow-md w-[80px] lg:w-[90px] mx-auto rounded-full flex justify-center items-center bg-[#493E9C]">
                <p className="text-[35px] text-white font-semibold leading-[52px]">
                  1
                </p>
              </div>
              <p className="text-[#29273E] text-base md:text-lg lg:text-xl text-center  font-bold mt-4">
                Get instant responses
              </p>
              <p className="text-[#818186] text-sm md:text-base lg:text-lg text-center mt-3">
                Get responses from local tradespeople interested in
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindBest;
