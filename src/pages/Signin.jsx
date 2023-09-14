import SigninForm from "../components/Signin/SigninForm";
import SignInRightSide from "../components/Signin/SignInRightSide";

const Signin = () => {
  return (
    <div className=" ">
      <div className="flex h-[100vh] overflow-hidden p-5 md:p-0 ">
        <div className="w-full  md:w-1/2">
          <SigninForm />
        </div>
        <div className="hidden md:block  w-1/2">
          <SignInRightSide />
        </div>
      </div>
    </div>
  );
};

export default Signin;
