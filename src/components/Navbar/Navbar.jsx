import logo from "../../assets/home/logo.png";
const Navbar = () => {
  return (
    <div className="px-4 md:px-10 lg:px-32 py-5 max-w-[1440px] mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <img src={logo} className="w-[80px] md:w-[109px] " />
        </div>
        <div>
          <button
            className="px-4 md:px-6 lg:px-8 py-2 md:py-2 lg:py-3  
      lg:ml-[10px] mid-xl:ml-[0px] bg-[#7672CB] rounded-md
       text-white text-[15px] font-semibold z-10 "
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
