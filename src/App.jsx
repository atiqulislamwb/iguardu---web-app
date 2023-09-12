import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

import SingUpQuestion from "./pages/SingUpQuestion";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ForgetPassword from "./pages/ForgetPassword";
import NewPassword from "./pages/NewPassword";
import SuccessPassword from "./pages/SuccessPassword";
function App() {
  return (
    <>
      <div className="w-[100vw] overflow-hidden px-4 md:p-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup-question" element={<SingUpQuestion />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/setnew-password" element={<NewPassword />} />
          <Route path="/success-password" element={<SuccessPassword />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
