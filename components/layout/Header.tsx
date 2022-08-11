import Image from "next/image";
import React from "react";
import { MAIN_IMAGES } from "../../constants/image";
import { HEADER_HEIGHT } from "../../constants/style";

const styles = {
  section: `min-h-[${HEADER_HEIGHT}] w-full flex] fixed top-0 left-0 right-0 z-10`,
  container: `px-[2.5rem] py-[3rem] flex`,
  logo: `cursor-pointer text-lg text-primary font-black `,
};
const Header = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.logo}>EDEN</div>
      </div>
    </section>
  );
};

export default Header;
