import banner from "../../assets/home/right-banner.png";
import person from "../../assets/home/person.png";
import star from "../../assets/home/star.png";
const Banner = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="relative px-4 md:px-10 lg:px-32 mt-0 md:mt-12 lg:mt-24">
        <div className="flex flex-col md:flex-row-reverse gap-40 md:gap-10 lg:gap-20   ">
          <div className="w-full md:w-1/2  relative">
            <img
              src={banner}
              className=" lg:w-[100%] object-contain lg:h-[661px]  md:absolute md:-z-50 md:top-[-40%] lg:top-[2%] mid-xl:top-[18%]  
            md:left-[4%] lg:left-[53%] mid-xl:left-[59%] lg:translate-x-[-50%] lg:translate-y-[-50%]"
            />
            <div
              className="absolute 
           bottom-[-35%] md:bottom-[10%] lg:bottom-[-15%] left-[10%] top-[70%] md:top-[30%] lg:top-[22%] lg:left-[10%] md:left-[20%]
            mid-xl:left-[28%] mid-xl:top-[65%]"
            >
              <Card />
            </div>
          </div>
          <div className="flex-1">
            <p className="mt-4 md:mt-0 lg:mt-0 text-sm md:text-base lg:text-lg font-medium text-[#5248AA]">
              No longer looking for job
            </p>
            <div className="my-4 lg:my-8 nekst text-2xl md:text-3xl lg:text-4xl mid-xl:text-[55px] leading-[40px] xl:leading-[50px] mid-xl:leading-[64px] text-[#29273E]">
              <p>Your Gateway to</p>
              <p className="py-0.5 md:py-1 lg:py-2">Exciting Security</p>
              <p>Opportunities</p>
            </div>
            <p className="text-sm md:text-md lg:text-lg text-justify pe-0 lg:pe-10 mb-4 md:mb-8 lg:mb-10 text-[#314f4b]">
              Secure Your Future on SafeHire – Where Protection Meets
              Opportunity! Explore Top Jobs, Protect What Matters, and Build
              Your Dream Career in the World of Security. Your Future Starts
              Here!
            </p>
            <div className="flex gap-3 md:gap-1">
              <button
                className=" md:me-6 lg:me-9 px-7 md:px-8 lg:px-14 py-2 md:py-3 lg:py-4 border border-[#5248AA] bg-[#5248AA] rounded-md text-sm lg:text-base 
            font-semibold lg:font-bold text-[#FFFFFF] hover:text-[#5248AA] hover:bg-[#FFFFFF] duration-300"
              >
                POST A JOB
              </button>
              <button className="px-4 md:px-3 lg:px-10 py-2 md:py-3 lg:py-4 border border-[#5248AA] rounded-md text-sm lg:text-base font-semibold lg:font-bold text-[#5248AA] hover:text-[#FFFFFF] hover:bg-[#5248AA] duration-300">
                GUARD SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

const Card = () => {
  return (
    <div className=" w-60  lg:w-72 lg:h-56 bg-white shadow-md p-6 mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={person} className="w-[36px] h-[36px] object-contain" />
          <div>
            <p className="text-[12px] font-bold text-[#242424]  ">
              The Jolly Grog
            </p>
            <p className="text-[10px] font-[400] text-[#242424]  ">
              {" "}
              your location
            </p>
          </div>
        </div>
        <div>
          <button className=" items-center bg-[#EBEAF4]  w-[50px] h-[23px] rounded-[25px] ">
            <p className="text-[#40378A] font-medium text-[7px]">Full time</p>
          </button>
        </div>
      </div>
      <p className="text-[14px] text-[#242424] font-bold mt-6  ">
        The Jolly Grog
      </p>
      <p className="text-[10px] text-[#6C6969] font-normal mt-3 leading-[15px] ">
        have similar duties to security guards, but they use more independent
        judgment on the job and have a wider range of duties.
      </p>
      <div className="flex justify-between items-center mt-4">
        <img src={star} className="w-[73px] h-[12px] object-contain" />
        <button className=" items-center bg-[#40378A]  w-[77px] h-[23px] rounded-[25px] ">
          <p className="text-white font-medium text-[7px]">Full time</p>
        </button>
      </div>
    </div>
  );
};
