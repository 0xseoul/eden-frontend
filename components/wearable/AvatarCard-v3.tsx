import React, { FC, useEffect, useState } from "react";
import { WEARABLE_IMAGES } from "../../constants";
import AutoHeightImage from "../common/AutoHeightImage";
interface Props {
  src: string;
  w?: string;
  h?: string;
}

const styles = {
  container: `flex flex-col justify-center items-center w-full relative`,
  overlay: `absolute top-0 left-0 w-full h-full flex justify-center items-center transition-all avatarcard-overlay`,
};
const AvatarCardV3: FC<Props> = ({ src, w, h }) => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const size = () => {
    if (!w || !h) return "";
    return `${w && `w-[${w}]`} ${h && `h-[${h}]`}`;
  };

  const cssStyles = {
    cardContainer: {
      width: w,
      height: h,
    },
  };

  return (
    <div className={styles.container} ref={setContainer}>
      <div
        className={`wearable-card-container-v2 w-full h-full ${size()}`}
        style={cssStyles.cardContainer}
      >
        <AutoHeightImage src={WEARABLE_IMAGES["avatar-frame"]} />
        <AutoHeightImage src={src} />
        <div className={styles.overlay} style={{ zIndex: 2 }} />
      </div>
    </div>
  );
};

export default AvatarCardV3;
