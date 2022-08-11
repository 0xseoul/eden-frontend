import type { NextPage } from "next";

const styles = {
  section: `flex-1 flex justify-center items-center flex-col`,
};
const Home: NextPage = () => {
  return <section className={styles.section}>this is home</section>;
};

export default Home;
