import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const CommonLayout = ({ children }) => {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CommonLayout;
