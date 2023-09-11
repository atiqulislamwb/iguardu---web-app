import google from "../../assets/signin/google.png";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LockIcon from "@mui/icons-material/Lock";
import IconButton from "@mui/material/IconButton";
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

export default SignupForm;