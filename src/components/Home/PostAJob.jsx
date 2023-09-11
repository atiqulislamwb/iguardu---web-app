import React from "react";
import leftImage from "../../assets/left.svg";
import rightImage from "../../assets/right.svg";
import man2 from "../../assets/man2.png";
import man3 from "../../assets/man3.png";
import man4 from "../../assets/man4.png";
import man5 from "../../assets/man5.png";
import man6 from "../../assets/man6.png";
import officer from "../../assets/officer.png";
import star from "../../assets/star.png";

const PostAJob = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="my-10 md:my-16 lg:my-48 px-4 md:px-10 lg:px-32 relative">
        {/*  */}
        <img
          className="hidden lg:block absolute top-[50%] left-[15%] translate-x-[-50%] translate-y-[-50%]"
          src={leftImage}
          alt=""
        />
        <img
          className="hidden lg:block absolute top-[50%] right-[2%] translate-x-[-50%] translate-y-[-50%]"
          src={rightImage}
          alt=""
        />
        <div className="absolute top-[10%] left-[22%] translate-x-[-50%] translate-y-[-50%] ps-1 md:ps-2 pt-1 md:pt-2 pe-4 md:pe-6 pb-1 md:pb-2  rounded-s-full bg-[#A5A4F7] bg-opacity-25">
          <img
            className="rounded-full border-2 border-[#FFF]"
            src={man2}
            alt=""
          />
        </div>
        <div className="absolute top-[70%] lg:top-[80%] right-[8%] translate-x-[-50%] translate-y-[-50%] ps-1 md:ps-2 pt-4 md:pt-6 pe-1 md:pe-2 pb-1 md:pb-2  rounded-b-full bg-[#A5A4F7] bg-opacity-25">
          <img
            className="rounded-full border-2 border-[#FFF]"
            src={man3}
            alt=""
          />
        </div>
        <div className="absolute top-[-5%] md:top-[1%] left-[11%] translate-x-[-50%] translate-y-[-50%] ps-2 pt-2 pe-2 pb-6  rounded-t-full bg-[#A5A4F7] bg-opacity-20">
          <img
            className="rounded-full border-2 border-[#FFF]"
            src={man4}
            alt=""
          />
        </div>
        <img
          className="absolute top-[97%] left-[82%] translate-x-[-50%] translate-y-[-50%] rounded-full border-2 border-[#FFF]"
          src={man5}
          alt=""
        />
        <img
          className="absolute top-[80%] md:top-[90%] right-[80%] translate-x-[-50%] translate-y-[-50%] rounded-full border-2 border-[#FFF]"
          src={man6}
          alt=""
        />

        <div className="flex flex-row gap-2 absolute top-[-7%] md:top-[5%] right-[-12%] md:right-[5%] lg:right-[15%] translate-x-[-50%] translate-y-[-50%]  border-2 border-[#FFF] p-3 drop-shadow-sm rounded-md">
          <div>
            <img className="rounded-full" src={officer} alt="" />
          </div>
          <div>
            <p className="text-[10px] font-semibold m-0 text-[#5248AA]">
              Herbert Alison
            </p>
            <p className="text-[8px] text-[#596F6C] mb-0.5">Security Officer</p>
            <img src={star} alt="" />
          </div>
        </div>

        {/*  */}
        <h2 className=" nekst text-3xl md:text-4xl lg:text-5xl text-center font-bold text-[#29273E]">
          More then <br />
          <span className="text-[#5248AA]">100000</span> people engaged
        </h2>
        <p className="text-base md:text-lg text-center text-[#818186] mt-3 lg:mt-5">
          Do you know what could beat the exciting felling of having a new
          computer? <br /> Make you own making your own computer from scratch is
          not only fun to do <br /> but cheaper as well.
        </p>
        <div className="text-center mt-8 lg:mt-12">
          <button className="mt-6 lg:mt-20 px-5 lg:px-10 py-3 lg:py-4 border border-[#5248AA] bg-[#5248AA] rounded-[5px] text-sm lg:text-base font-bold text-[#FFFFFF] uppercase hover:text-[#5248AA] hover:bg-[#FFFFFF] duration-300">
            post a job
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostAJob;
