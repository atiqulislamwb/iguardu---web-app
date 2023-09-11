import React from "react";
import img1 from "../../assets/signin/1.png";
import img2 from "../../assets/signin/2.png";
import img3 from "../../assets/signin/3.png";
import iguardu from "../../assets/signin/iguardu.png";

const SignInRightSide = () => {
  return (
    <div className="my-background w-full h-full relative">
      <div className="absolute inset-0 mt-[50%] ml-[45%] ">
        <img src={iguardu} className="w-22 h-20 object-cover " alt="Image 1" />
      </div>

      <div className=" w-[50px] md:w-[100px] lg:w-[224px] absolute top-0 right-0 h- md:h-[300px] lg:h-[459px]">
        <img
          src={img3}
          className="w-full h-full object-contain"
          alt="Image 3"
        />
      </div>
      {/* <div className=" w-[200px] md:w-[300px] lg:w-[402px] bottom-0  h-[140] lg:h-[196px]">
        <img src={img2} className="w-full h-full object-cover" alt="Image 2" />
      </div> */}
    </div>
  );
};

export default SignInRightSide;
