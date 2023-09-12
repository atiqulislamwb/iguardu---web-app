import google from "../../assets/signin/google.png";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="md:p-10 px-3 md:px-[100px] overflow-y-auto">
      <div className="flex flex-col items-center justify-center p-4 ">
        <p className="nekst text-center  font-normal mt-[30px] md:mt-[50px] w-full text-[25px] md:text-[30px] lg:text-[40px] leading-[30px] md:leading-[45px]  text-[#29273E]">
          Start Your Journey
        </p>

        <p className="text-[15px] md:text-[18px] leading-[27px]  text-[#818186] font-normal mt-[20px] md:mt-[30px] lg:mt-[40px] w-[100%] md:w-[90%] lg:w-[60%] mid-xl:w-[75%] mx-auto">
          Whether just starting out or looking to improve or grow your business,
          our expert advice can help you on the road to success.
        </p>

        {/* form */}

        <div className="mt-10 w-full md:w-[411px] flex-col gap-8 flex">
          <TextField
            label="Email"
            id="outlined-size-full"
            variant="outlined"
            fullWidth={true} // Set to true to make it full width
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AccountCircleIcon />
                </InputAdornment>
              ),
              style: {
                "&.Mui-focused": {
                  borderColor: "#3F358D",
                },
              },
            }}
            value={email}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            id="password"
            variant="outlined"
            fullWidth
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
              style: {
                "&.Mui-focused": {
                  borderColor: "#483E9C",
                },
              },
            }}
          />
        </div>

        {/* submit button */}

        <button className="w-full md:w-[411px] h-[61px] text-[14px] text-white items-center p-3 mt-[40px] rounded-md bg-[#483E9C] hover:border-[2px] border-[#483E9C] hover:bg-white hover:text-[#483E9C] duration-300">
          Create an account
        </button>

        <div className="flex items-center justify-center mt-[50px]">
          <div className=" w-[50px] md:w-[100px] lg:w-[141px] h-[2px] bg-[#E2E1EB]"></div>
          <p className="text-[12px] mx-[10px] leading-[18px] text-[#646378] font-normal">
            Or Sign up with{" "}
          </p>
          <div className="w-[50px] md:w-[100px] lg:w-[141px] h-[2px] bg-[#E2E1EB]"></div>
        </div>

        <button className="w-full md:w-[411px] h-[61px] text-[14px] flex gap-4 items- justify-center p-4 mt-[40px] rounded-md border-[2px] hover:border-[#483E9C] border-[#A4A4AA]  duration-300">
          <img
            src={google}
            className="w-[22px] h-[22px] object-cover "
            alt="google 1"
          />
          Sign In With Google
        </button>
        <Link to="/sign-in">
          <p className=" text-center mt-[30px] text-[15px] md:text-[18px] text-[#B9B8C0] leading-[27px]  font-medium ">
            Have an account ? <span className="text-[#483E9C]">Sign In </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;
