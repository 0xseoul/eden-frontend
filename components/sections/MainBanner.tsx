import Image from "next/image";
import React, { CSSProperties } from "react";
import { MAIN_IMAGES } from "../../constants/image";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import AutoHeightImage from "../common/AutoHeightImage";

const styles = {
  section: `min-h-screen w-full flex justify-center items-center flex-col relative section-1`,
  imgContainer: `absolute top-0 left-0 right-0 bottom-0 z-1 object-contain`,
  text: `z-20 text-center text-xl leading-[4rem]`,
  overlay: `absolute top-0 left-0 right-0 bottom-0 max-h-screen z-10 bg-black opacity-50 `,
};

const cssStyle = {
  text: {
    textShadow: "0px 0px 20px rgba(255,255,255,0.6)",
    fontWeight: 900,
  } as CSSProperties,
};
const MainBanner = () => {
  const { width, height } = useWindowDimensions();
  return (
    <section className={styles.section}>
      <div className={`${styles.text} relative`} style={cssStyle.text}>
        DIGITAL FASHION
        <br />
        COLLECTIBLE STUDIO
      </div>
      <div className={styles.overlay} />
      <div className={`${styles.imgContainer} main__banner`}>
        <AutoHeightImage src={MAIN_IMAGES["main-hero"]} layout="fill" />
      </div>
    </section>
  );
};

export default MainBanner;
