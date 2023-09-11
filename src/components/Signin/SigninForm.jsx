import React from "react";
import { Link } from "react-router-dom";
import google from "../../assets/signin/google.png";
import TextField from "@mui/material/TextField";

const SigninForm = () => {
  return (
    <div className="md:p-10 px-3 md:px-[100px]   ">
      <div className="flex flex-col items-center justify-center">
        <p className="nekst text-center  font-normal mt-[50px] text-[25px] md:text-[30px] lg:text-[40px] leading-[45px]  text-[#29273E]">
          Welcome to iguardu
        </p>

        <p className="text-[18px] leading-[27px] text-[#818186] font-normal mt-[40px] text-center w-[80%]">
          Whether just starting out or looking to improve or grow your business,
          our expert advice can help you on the road to success.
        </p>

        {/* form */}

        <div className="mt-10">
          <TextField
            label="Eamil"
            id="outlined-size-normal"
            defaultValue="Normal"
          />
        </div>

        {/* submit button */}

        <button className="w-full md:w-[411px] h-[61px] text-[14px] text-white items-center p-3 mt-[40px] rounded-md bg-[#483E9C] hover:border-[2px] border-[#483E9C] hover:bg-white hover:text-[#483E9C] duration-300">
          Sign In
        </button>

        <div className="flex items-center justify-center mt-[50px]">
          <div className="min-w-[90px]  max-w-[141px] h-[2px] bg-[#E2E1EB]"></div>
          <p className="text-[12px] mx-[10px] leading-[18px] text-[#646378] font-normal">
            Or Sign up with{" "}
          </p>
          <div className="min-w-[90px]  max-w-[141px] h-[2px] bg-[#E2E1EB]"></div>
        </div>

        <button className="w-full md:w-[411px] h-[61px] text-[14px] flex gap-4 items- justify-center p-4 mt-[40px] rounded-md border-[2px] hover:border-[#483E9C] border-[#A4A4AA]  duration-300">
          <img
            src={google}
            className="w-[22px] h-[22px] object-cover "
            alt="google 1"
          />
          Sign In With Google
        </button>
        <p className=" text-center mt-[30px] text-[18px] text-[#B9B8C0] leading-[27px]  font-medium ">
          Don't have an igardu account?{" "}
          <span className="text-[#483E9C]">Sign up </span>
        </p>
      </div>
    </div>
  );
};

export default SigninForm;
