import type { NextPage } from "next";
import About from "../components/sections/About";
import Avatar from "../components/sections/Avatar";
import Faq from "../components/sections/Faq";
import MainBanner from "../components/sections/MainBanner";
import Roadmap from "../components/sections/Roadmap";
import Story from "../components/sections/Story";
import Wearable from "../components/sections/Wearable";
const styles = {
  section: `flex-1 flex justify-center items-center flex-col w-full`,
};
const Home: NextPage = () => {
  return (
    <section className={styles.section}>
      <MainBanner />
      <About />
      <Avatar />
      <Roadmap />
      <Story />
      <Faq />
      <Wearable />
    </section>
  );
};

export default Home;
