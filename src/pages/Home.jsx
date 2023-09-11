import Banner from "../components/Home/Banner";
import FindBest from "../components/Home/FindBest";
import Jobs from "../components/Home/Jobs";
import ForClient from "../components/Home/ForClient";
import HowItWork from "../components/Home/HowItWork";
import PostAJob from "../components/Home/PostAJob";
import FindGreatWork from "../components/Home/FindGreatWork";
import CommonLayout from "../Layout/CommonLayout";

const Home = () => {
  return (
    <CommonLayout>
      <div className="">
        <Banner />
        <FindBest />
        <div className="bg-[#F7F7FB] ">
          <Jobs />
        </div>
        <ForClient />
        <div className="bg-[#F7F7FB] ">
          <HowItWork />
        </div>
        <PostAJob />
        <div className="bg-[#F7F7FB] ">
          <FindGreatWork />
        </div>
      </div>
    </CommonLayout>
  );
};

export default Home;
