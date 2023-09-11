import React, { useState } from "react";
import img1 from "../assets/signupquestion/img1.png";
import img2 from "../assets/signupquestion/img2.png";
import client from "../assets/signupquestion/client.png";
import guard from "../assets/signupquestion/guard.png";
import { Link } from "react-router-dom";

const SingUpQuestion = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
  };

  const handleSubmit = () => {
    console.log(selectedOption);
  };

  return (
    <div className="relative h-[100vh] overflow-hidden px-5 md:px-0 ">
      <div className="hidden md:block w-[200px] md:w-[300px] lg:w-[402px] bottom-0 left-0 absolute h-[100px] md:h-[140] lg:h-[196px]">
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
          Join as a client or security guard
        </p>
        {/* Client button */}
        <button
          onClick={() => handleOptionSelect("client")}
          className={`w-full md:w-[411px] h-[90px] md:h-[109px] p-3 mt-[50px] rounded-md border-2 border-[#E1E0EF] ${
            selectedOption === "client" ? "border-[#5248AA]" : ""
          }`}
        >
          <div className="flex justify-around items-center">
            <div className=" rounded-md p-3 bg-[#E5E3F2]">
              <img
                src={client}
                className="w-[34px] h-[31px] object-contain"
                alt="Client"
              />
            </div>
            <p className="text-[18px] font-semibold text-[#29273E]">
              I’m a client, hiring for <br /> a security guard
            </p>
            <div className="w-[25px] h-[25px] flex justify-center items-center  border-[1px] rounded-full border-[#E8E8F3]">
              {selectedOption === "client" && (
                <div className="w-[15px] h-[15px] rounded-full bg-[#483E9C] "></div>
              )}
            </div>
          </div>
        </button>
        {/* Guard button */}
        <button
          onClick={() => handleOptionSelect("guard")}
          className={`w-full md:w-[411px]  h-[90px]  md:h-[109px] p-3 mt-[40px] rounded-md border-2 border-[#E1E0EF] ${
            selectedOption === "guard" ? "border-[#5248AA]" : ""
          }`}
        >
          <div className="flex justify-around items-center">
            <div className=" rounded-md p-3 bg-[#E5E3F2]">
              <img
                src={guard}
                className="w-[34px] h-[31px] object-contain"
                alt="Guard"
              />
            </div>
            <p className="text-[18px] font-semibold text-[#29273E]">
              I’m a security guard <br />
              looking for work
            </p>
            <div className="w-[25px] h-[25px] flex justify-center items-center border-[1px] rounded-full border-[#E8E8F3]">
              {selectedOption === "guard" && (
                <div className="w-[15px] h-[15px] rounded-full bg-[#483E9C] "></div>
              )}
            </div>
          </div>
        </button>

        {/* submit button */}
        <Link to="/">
          <button
            onClick={handleSubmit}
            className="w-full md:w-[411px] h-[61px] text-xl text-white items-center p-3 mt-[40px] rounded-md bg-[#483E9C] hover:border-[2px] border-[#483E9C] hover:bg-white hover:text-[#483E9C] duration-300"
          >
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingUpQuestion;
