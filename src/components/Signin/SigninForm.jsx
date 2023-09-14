import google from "../../assets/signin/google.png";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useContext, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import IconButton from "@mui/material/IconButton";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../../firebase/auth";
const auth = getAuth(app);
import { StateContext } from "../../context/context";
import useAuth from "../../hooks/useAuth";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useContext(StateContext);
  const { handleLogin } = useAuth();
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setLoading(true);
        const user = result.user;
        setUser(user);

        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="md:p-2 px-2 md:px-[10px] lg:mx-[80px] ">
      <div className="flex flex-col items-center justify-center">
        <p className="nekst text-center  font-normal mt-[30px] md:mt-[40px] w-full lg:w-[441px] text-[25px] md:text-[30px] lg:text-[40px] leading-[30px] md:leading-[45px]  text-[#29273E]">
          Welcome to iguardu
        </p>

        <p className="text-[15px]  md:text-[17px] leading-[27px]  text-[#818186] font-normal mt-[20px] md:mt-[30px] lg:mt-[40px] w-[100%]   lg:w-[441px]   mid-xl:w-[75%] ">
          Whether just starting out or looking to improve or grow your business,
          our expert advice can help you on the road to success.
        </p>

        {/* form */}

        <div className="mt-10 w-full lg:w-[441px]  flex-col gap-8 flex">
          <TextField
            label="Email"
            id="outlined-size-full"
            variant="outlined"
            fullWidth={true} // Set to true to make it full width
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AccountCircleIcon color="#3F358D" />
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

          <Link
            to="/forget-password"
            className="flex items-end justify-end mt-[-15px] "
          >
            <p className="text-[12px] text-[#5248AA]">Forget Password</p>
          </Link>
        </div>
        <div></div>
        {/* submit button */}

        <button
          onClick={() => {
            const data = {
              email,
              password,
            };
            handleLogin(data);
          }}
          className="w-full  lg:w-[441px] h-[61px] text-[14px] text-white items-center p-3 mt-[40px] rounded-md bg-[#483E9C] hover:border-[2px] border-[#483E9C] hover:bg-white hover:text-[#483E9C] duration-300"
        >
          Sign In
        </button>

        <div className="flex items-center justify-center mt-[50px]">
          <div className="w-[90px] md:w-[141px] h-[2px] bg-[#E2E1EB]"></div>
          <p className="text-[9px] md:text-[12px] mx-1 md:mx-[10px] leading-[14px] md:leading-[18px] text-[#646378] font-normal">
            Or Sign up with{" "}
          </p>
          <div className="w-[90px] md:w-[141px] h-[2px] bg-[#E2E1EB]"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full lg:w-[441px]  h-[61px] text-[14px] flex gap-4 items- justify-center p-4 mt-[40px] rounded-md border-[2px] hover:border-[#483E9C] border-[#A4A4AA]  duration-300"
        >
          <img
            src={google}
            className="w-[22px] h-[22px] object-cover "
            alt="google 1"
          />
          Sign In With Google
        </button>
        <Link to="/signup-question">
          <p className=" text-center mt-[30px] text-[18px] text-[#B9B8C0] leading-[27px]  font-medium ">
            Don't have an igardu account?{" "}
            <span className="text-[#483E9C]">Sign up </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SigninForm;
