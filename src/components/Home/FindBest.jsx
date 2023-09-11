import React from "react";
import circleArrow from "../../assets/home/circle-arrow.png";
const FindBest = () => {
  return (
    <div className="w-full mb-[600px] md:mb-[10px]">
      <p className="text-[27px] md:text-[35px] text-[#29273E]  mb-[20px] md:mb-[100px] leading-[48px]  mt-[50px] md:mt-[240px] font-bold text-center">
        Find a best candidate have <br /> never been {""}
        <span className="text-[#5248AA]">so easy</span>
      </p>
      <div className="lg:pl-[120px] lg:pr-[120px]  max-h-[270px] md:mt-[50px] mx-auto">
        <div className="flex flex-col md:flex-row w-full mx-auto">
          <div
            className="w-15/15 md:w-3/15 shadow-md md:shadow-none mb-[20px] md:mb-[0px]
          "
          >
            <div className="h-[90px] shadow-md w-[90px] mx-auto rounded-full flex justify-center items-center bg-[#493E9C]">
              <p className="text-[35px] text-white font-semibold leading-[52px]">
                1
              </p>
            </div>
            <p className="text-[#29273E] text-[20px]  text-center  font-bold leading-[30px] mt-4">
              Post your job
            </p>
            <p className="text-[#818186] text-[18px] text-center font-normal leading-[29px] mt-3">
              Enter your requirements for the job you need undertaken
            </p>
          </div>
          <div className=" hidden md:w-1/15 md:block">
            <img
              src={circleArrow}
              className="w-[107px] h-[23px] object-contain"
            />
          </div>
          <div
            className="w-15/15 md:w-3/15 shadow-md md:shadow-none mb-[20px] md:mb-[0px]
          "
          >
            <div className="h-[90px] shadow-md  w-[90px] mx-auto rounded-full flex justify-center items-center bg-[#493E9C]">
              <p className="text-[35px] text-white font-semibold leading-[52px]">
                2
              </p>
            </div>
            <p className="text-[#29273E] text-[20px]  text-center  font-bold leading-[30px] mt-4">
              Job is sent to trades
            </p>
            <p className="text-[#818186] text-[18px] text-center font-normal leading-[29px] mt-3">
              Your job is sent out instantly to tradespeople local to you.
            </p>
          </div>
          <div className=" hidden md:w-1/15 md:block">
            <img
              src={circleArrow}
              className="w-[107px] h-[23px] object-contain"
            />
          </div>
          <div
            className="w-15/15 md:w-3/15 shadow-md md:shadow-none mb-[20px] md:mb-[0px]
          "
          >
            <div className="h-[90px] shadow-md  w-[90px] mx-auto rounded-full flex justify-center items-center bg-[#493E9C]">
              <p className="text-[35px] text-white font-semibold leading-[52px]">
                3
              </p>
            </div>
            <p className="text-[#29273E] text-[20px]  text-center  font-bold leading-[30px] mt-4">
              Choose tradespeople
            </p>
            <p className="text-[#818186] text-[18px] text-center font-normal leading-[29px] mt-3">
              Choose the best tradespeople that fits your requirements.
            </p>
          </div>
          <div className=" hidden md:w-1/15 md:block">
            <img
              src={circleArrow}
              className="w-[107px] h-[23px] object-contain"
            />
          </div>
          <div
            className="w-15/15 md:w-3/15 shadow-md md:shadow-none mb-[20px] md:mb-[0px]
               "
          >
            <div className="h-[90px] shadow-md  w-[90px] mx-auto rounded-full flex justify-center items-center bg-[#493E9C]">
              <p className="text-[35px] text-white font-semibold leading-[52px]">
                4
              </p>
            </div>
            <p className="text-[#29273E] text-[20px]  text-center  font-bold leading-[30px] mt-4">
              Get instant responses
            </p>
            <p className="text-[#818186] text-[18px] text-center font-normal leading-[29px] mt-3">
              Get responses from local tradespeople interested in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindBest;
