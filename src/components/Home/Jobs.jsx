import React from "react";
import guard from "../../assets/home/guard.png";
import shield from "../../assets/home/shield.png";
const Jobs = () => {
  return (
    <div className="bg-[#F7F7FB] mt-[100px] ">
      <div className="flex flex-col md:flex-row items-start md:gap-[100px] justify-start lg:p-[120px] ">
        <div className="w-full md:w-3/6">
          <img
            src={guard}
            className="w-full h-[300px] mt-8 md:mt-0 md:h-[508px] object-contain"
          />
        </div>
        <div className="w-full md:w-3/6 mt-[20px] px-10">
          <p className="font-normal  uppercase text-center md:text-left md:text-[20px] leading-[30px] text-[#5248AA]">
            For Security guard
          </p>
          <p className="  nekst text-[40px] text-center md:text-left  mt-[10px] leading-[45px] text-[#29273E]">
            Over <span className=" text-[#5248AA]"> 50,000 </span> jobs
          </p>
          <p className="font-normal mt-[30px] text-center md:text-left text-[18px] leading-[27px] text-[#818186]">
            Whether just starting out or looking to improve or grow your
            business, our expert advice can help you on the road to success.
          </p>
          <div className="mt-[20px]">
            <div className="flex gap-3">
              <img src={shield} className="w-[43px] h-[43px] object-contain" />
              <div>
                <p className=" text-[20px]  leading-[30px] text-[#29273E] font-medium">
                  Trust and credibility get verified and <br /> recommened
                </p>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <img src={shield} className="w-[43px] h-[43px] object-contain" />
              <div>
                <p className=" text-[20px] leading-[30px] text-[#29273E] font-medium">
                  Expand Your Reach faster and better <br /> clients
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[25px] mb-[25px] md:mb-[0px]">
            <button className="text-[#40378A] hover:text-white duration-300 hover:bg-[#40378A] text-[15px] px-[20px] bg-white  w-[200px] h-[60px] rounded-[5px] border-[2px] border-[#40378A] ">
              REGISTER NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
