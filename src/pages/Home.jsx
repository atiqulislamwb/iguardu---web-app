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
      <div className="max-w-[1440px] mx-auto">
        <Banner />
        <FindBest />
        <Jobs />
        <ForClient />
        <HowItWork />
        <PostAJob />
        <FindGreatWork />
      </div>
    </CommonLayout>
  );
};

export default Home;
