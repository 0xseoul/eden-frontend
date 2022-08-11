import type { NextPage } from "next";
import MainBanner from "../components/sections/MainBanner";

const styles = {
  section: `flex-1 flex justify-center items-center flex-col w-full`,
};
const Home: NextPage = () => {
  return (
    <section className={styles.section}>
      <MainBanner />
    </section>
  );
};

export default Home;
