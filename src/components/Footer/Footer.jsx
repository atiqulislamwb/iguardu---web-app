import React from "react";
import FooterItem from "../FooterItem/FooterItem";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import logo from "../../assets/logo.svg";

const Footer = () => {
  const datas = [
    {
      item1: "About us",
      item2: "Contact us",
      item3: "How it works",
    },
    {
      item1: "Complaints",
      item2: "Secure contacts",
      item3: "Terms of use",
    },
    {
      item1: "Privacy notice",
      item2: "Guaranteed T&Cs",
      item3: "Sitemap",
    },
    {
      item1: "Post a job",
      item2: "Trade sign up",
      item3: "Find trades",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto ">
      <div className=" bg-[#29273E] pt-56 pb-10 lg:pb-28 px-3 md:px-8 lg:px-24 relative">
        {/*  */}
        <div
          className="container mx-auto bg-[#5248AA] py-6
       md:py-10 lg:py-12 px-3 md:px-6 lg:px-36 rounded-[10px]
        flex flex-col lg:flex-row-reverse items-center gap-5 
        lg:gap-40 absolute top-[-1%] left-[50%] translate-x-[-50%]
         translate-y-[-50%]"
        >
          <div className="flex-1">
            <img className="mx-auto" src={logo} alt="logo" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl nekst md:text-3xl lg:text-4xl mb-3 text-[#F8FAF7] font-bold">
              We are here to help
            </h2>
            <p className="text-base md:text-lg mb-4 text-[#F8FAF7] text-justify">
              Reach out today for expert guidance and personalized solutions. We
              are here to help you achieve your goals.
            </p>
            <button className="px-5 md:px-8 lg:px-10 py-2 md:py-3 lg:py-4 border border-[#FFF] rounded-lg text-sm md:text-base font-bold text-[#FFF] hover:text-[#5248AA] hover:bg-[#FFF] duration-300">
              CONTACT US
            </button>
          </div>
        </div>
        {/*  */}
        <div className="flex gap-5 md:gap-0 flex-col md:flex-row items-center justify-between text-base md:text-lg text-center md:text-start text-[#FFF] mb-12 mg:mb-16 lg:mb-28">
          {datas.map((data, index) => (
            <FooterItem data={data} key={index}></FooterItem>
          ))}
        </div>
        <div className="flex gap-9 mb-8 justify-center md:justify-normal">
          <p className="text-lg font-bold text-[#FFF]">Follow us</p>
          <div className="flex gap-4">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
          </div>
        </div>
        <hr className="h-[1px] bg-[#888798]" />
        <p className="text-[#FFF] font-semibold text-center my-4">
          <span className="me-3">&copy;</span> 2023 Igardu - All rights reserved
        </p>
        <hr className="h-[1px] bg-[#888798]" />
      </div>
    </div>
  );
};

export default Footer;
