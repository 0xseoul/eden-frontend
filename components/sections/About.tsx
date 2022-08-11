import React from "react";
import { MAIN_IMAGES } from "../../constants/image";
import AutoHeightImage from "../common/AutoHeightImage";

const styles = {
  section: `min-h-screen w-full flex justify-center items-center relative`,
  container: `flex items-center justify-center`,
  box: `flex-1`,
};
const About = () => {
  return (
    <div className={styles.section}>
      <div className={styles.box}>
        <span>
          WHO <br />
          WE ARE
        </span>
        <span>
          Studio 0XSEOUL uses NFT, blockchain authentication and augmented
          reality, combined with manufacturing expertise to create wearable
          digital fashion collectibles and avatars.
        </span>
      </div>
      <div className={styles.box}>
        <AutoHeightImage src={MAIN_IMAGES.logo} />
      </div>
    </div>
  );
};

export default About;
