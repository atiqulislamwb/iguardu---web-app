import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SingUpQuestion from "./pages/SingUpQuestion";
import Signin from "./pages/Signin";
function App() {
  return (
    <>
      <div className="w-[100vw] overflow-hidden px-4 md:p-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup-question" element={<SingUpQuestion />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
