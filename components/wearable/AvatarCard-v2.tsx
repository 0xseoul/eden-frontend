import React, { FC, useEffect, useState } from "react";
import { WEARABLE_IMAGES } from "../../constants";
import AutoHeightImage from "../common/AutoHeightImage";
interface Props {
  src: string;
  w?: string;
  h?: string;
  avatarId?: string;
}

const styles = {
  container: `flex flex-col justify-center items-center w-full`,
};
const AvatarCardV2: FC<Props> = ({ src, w, h, avatarId }) => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const size = () => {
    if (!w || !h) return "";
    return `${w && `w-[${w}]`} ${h && `h-[${h}]`}`;
  };

  // useEffect(() => {
  //   if (!container) return;
  //   // set css variable
  //   container.style.setProperty("--background-color", `url(${src})`);
  //   return () => {
  //     container.style.removeProperty("--background-color");
  //   };
  // }, [container]);

  return (
    <div className={styles.container} ref={setContainer}>
      <div
        className={`wearable-card-container-v2 w-[24rem] h-[24rem] ${size()}`}
      >
        <AutoHeightImage src={WEARABLE_IMAGES["avatar-frame"]} />
        <div className="w-full h-full" key={src}>
          <AutoHeightImage src={src} id={avatarId} />
        </div>
      </div>
    </div>
  );
};

export default AvatarCardV2;
