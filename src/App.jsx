import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

import SingUpQuestion from "./pages/SingUpQuestion";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
function App() {
  return (
    <>
      <div className="w-[100vw] overflow-hidden px-4 md:p-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup-question" element={<SingUpQuestion />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
