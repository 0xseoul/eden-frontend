import Link from "next/link";
import React, { CSSProperties } from "react";
import { MAIN_IMAGES } from "../../constants/image";
import AutoHeightImage from "../common/AutoHeightImage";
const styles = {
  section: `min-h-screen w-full flex justify-center items-center relative`,
  imgContainer: `absolute top-0 left-0 right-0 bottom-0 object-contain -z-10 flex items-center justify-center`,
  btn: `bg-primary w-[168px] h-[48px] text-[#202122] font-bold cursor-pointer flex items-center justify-center`,
};
// width: 1380px;
const cssStyles = {
  btn: {
    clipPath: "polygon(0 0, 95% 1%, 100% 15%, 100% 100%, 5% 100%, 0 85%)",
  } as CSSProperties,
};
const Wearable = () => {
  return (
    <div className={styles.section}>
      <div className="flex flex-col -translate-x-60">
        <span className="text-8xl font-black uppercase leading-[115px]">
          WEARABLES
        </span>
        <div>
          <Link href="/wearable">
            <div className={styles.btn} style={cssStyles.btn}>
              MY INVENTORY
            </div>
          </Link>
        </div>
      </div>
      <div className={`${styles.imgContainer}`}>
        <div className="w-[1380px]">
          <AutoHeightImage src={MAIN_IMAGES["wearable-banner"]} layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default Wearable;
