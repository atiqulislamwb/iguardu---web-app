import client from "../../assets/home/client.png";

import { IoIosArrowForward } from "react-icons/io";

const ForClient = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="my-6 md:my-16 lg:my-32 px-4 md:px-10 lg:px-32 bg-[#fff]">
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-5 lg:gap-28 ">
          <div className="flex-1">
            <img src={client} className="lg:mx-auto" />
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
            <div className="mt-6">
              <button className="text-base md:text-lg lg:text-xl font-semibold px-4  w-full  md:w-[300px] lg:w-[452px] cursor-pointer h-12 lg:h-14 rounded-[5px] bg-white hover:bg-[#5248AA] duration-500  border-[1px] border-[#5248AA] hover:text-[#fff] ">
                <div className=" flex mx-auto items-center justify-between md:w-[250px] lg:w-[350px]">
                  Save time stress free
                  <IoIosArrowForward />
                </div>
              </button>
            </div>
            <div className="mt-4 lg:mt-6">
              <button className="text-base md:text-lg lg:text-xl font-semibold px-4  w-full  md:w-[300px] lg:w-[452px] cursor-pointer h-12 lg:h-14 rounded-[5px] bg-white hover:bg-[#5248AA] duration-500  border-[1px] border-[#5248AA] hover:text-[#fff] ">
                <div className=" flex mx-auto items-center justify-between md:w-[250px] lg:w-[350px]">
                  Save time stress free
                  <IoIosArrowForward />
                </div>
              </button>
            </div>
            <div className="mt-4 lg:mt-6">
              <button className="text-base md:text-lg lg:text-xl font-semibold px-4  w-full  md:w-[300px] lg:w-[452px] cursor-pointer h-12 lg:h-14 rounded-[5px] bg-white hover:bg-[#5248AA] duration-500  border-[1px] border-[#5248AA] hover:text-[#fff] ">
                <div className=" flex mx-auto items-center justify-between md:w-[250px] lg:w-[350px]">
                  Save time stress free
                  <IoIosArrowForward />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForClient;
