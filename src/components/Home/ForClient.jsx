import React from "react";
import client from "../../assets/home/client.png";
import arrow from "../../assets/home/down-arrow.png";

const ForClient = () => {
  return (
    <div className=" md:p-[60px]  lg:p-[120px] mt-[50px]  mx-auto bg-[#fff]">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center ">
        <div className="w-full md:w-3/6">
          <div className="w-10/12 mt-3">
            <p className="uppercase text-[20px] leading-[24px] text-[#5248AA] font-medium">
              For Clients
            </p>
            <p className="nekst font-normal text-[40px]  mt-[10px] leading-[45px] text-[#29273E]">
              Find <span className=" text-[#5248AA]"> talent</span> your way
            </p>
            <p className="font-normal mt-[30px] text-[18px] leading-[27px] text-[#818186]">
              Whether just starting out or looking to improve or grow your
              business, <br /> our expert advice can help you on the road to
              success.
            </p>
            <div className="mt-6">
              <button className="px-4  w-full  md:w-[300px] lg:w-[452px] cursor-pointer h-[60px] rounded-[5px] bg-white hover:bg-[#5248AA] duration-500  border-[1px] border-[#5248AA] hover:text-[#fff] ">
                <div className="text-[15px] md:text-[20px] text-[#29273E] hover:text-white leading-[40px] font-semibold  flex mx-auto items-center justify-between md:w-[250px] lg:w-[350px]  h-[40px] ">
                  Post a job and hire a pro
                  <img
                    src={arrow}
                    className="w-[20px] h-[20px] object-contain hover:text-white"
                  />
                </div>
              </button>
            </div>
            <div className="mt-6">
              <button className=" px-4 w-full =md:w-[300px] lg:w-[452px] cursor-pointer h-[60px] rounded-[5px] bg-white hover:bg-[#5248AA] duration-500  border-[1px] border-[#5248AA] hover:text-[#fff] ">
                <div className="text-[15px] text-center md:text-[20px] text-[#29273E] hover:text-white leading-[40px] font-semibold  flex mx-auto items-center justify-between md:w-[250px] lg:w-[350px]  h-[40px] ">
                  Find the best talents
                  <img
                    src={arrow}
                    className="w-[20px] h-[20px] object-contain hover:bg-white"
                  />
                </div>
              </button>
            </div>
            <div className="mt-6">
              <button className=" px-4  w-full  md:w-[300px] lg:w-[452px] cursor-pointer h-[60px] rounded-[5px] bg-white hover:bg-[#5248AA] duration-500  border-[1px] border-[#5248AA] hover:text-[#fff] ">
                <div className="text-[15px] md:text-[20px] text-[#29273E] hover:text-white leading-[40px] font-semibold  flex mx-auto items-center justify-between md:w-[250px] lg:w-[350px]  h-[40px] ">
                  Save time stress free
                  <img
                    src={arrow}
                    className="w-[20px] h-[20px] object-contain hover:bg-white"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/6">
          <img
            src={client}
            className="w-full h-[300px] md:h-[483px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ForClient;
