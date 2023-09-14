import SignInRightSide from "../components/Signin/SignInRightSide";
import SignupForm from "../components/Singup/SignupForm";
import { useLocation } from "react-router-dom";
const Signup = () => {
  const location = useLocation();
  const role = location?.state;

  return (
    <div className="">
      <div className="flex h-[100vh] overflow-hidden p-5 md:p-0 ">
        <div className="w-full  md:w-1/2">
          <SignupForm role={role} />
        </div>
        <div className="hidden md:block  w-1/2">
          <SignInRightSide />
        </div>
      </div>
    </div>
  );
};

export default Signup;
