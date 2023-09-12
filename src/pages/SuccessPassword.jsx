import img1 from "../assets/signupquestion/img1.png";
import img2 from "../assets/signupquestion/img2.png";

import { Link } from "react-router-dom";

const SuccessPassword = () => {
  return (
    <div className="relative h-[100vh]  overflow-hidden px-5 md:px-0 ">
      <div className="hidden md:block w-[200px] md:w-[250px] lg:w-[300px] mid-xl:w-[400px] absolute bottom-0 left-0  h-[100px] md:h-[140] lg:h-[196px]">
        <img
          src={img1}
          className="w-full h-full object-contain"
          alt="Image 1"
        />
      </div>
      <div className="hidden md:block w-[50px] md:w-[100px] lg:w-[224px] absolute top-0 right-0 h- md:h-[300px] lg:h-[459px]">
        <img
          src={img2}
          className="w-full h-full object-contain"
          alt="Image 2"
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <p className="nekst text-center  font-normal mt-[100px] text-[25px] md:text-[30px] lg:text-[40px] leading-[45px]  text-[#29273E]">
          Successfully <br /> password reset?
        </p>
        {/*form */}

        {/* submit button */}

        <button className="w-full md:w-[411px] h-[50px] md:h-[61px] text-md md:text-md text-white items-center p-3 mt-[40px] rounded-md bg-[#483E9C] hover:border-[2px] border-[#483E9C] hover:bg-white hover:text-[#483E9C] duration-300">
          Reset Password
        </button>
        <Link to="/sign-in">
          <p className=" text-left mt-[40px] text-[18px]  text-[#B9B8C0] leading-[27px]  font-medium ">
            Back to? <span className="text-[#483E9C]">Sign in </span>
          </p>
        </Link>
      </div>

      <div className="mt-[100px] flex flex-col items-center justify-center ">
        <div className="flex gap-3 items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-[#BDB9DC]"></div>
          <div className="w-3 h-3 rounded-full bg-[#BDB9DC]"></div>
          <div className="w-3 h-3 rounded-full bg-[#483E9C]"></div>
        </div>
      </div>
    </div>
  );
};
export default SuccessPassword;
