import React, { CSSProperties, FC, useEffect, useMemo, useState } from "react";
import { WEARABLE_IMAGES } from "../../constants";
import AutoHeightImage from "../common/AutoHeightImage";
import { CuttinEdgeBtn } from "../common/Buttons";
interface Props {
  src: string;
  w?: string;
  h?: string;
}

const styles = {
  container: `flex flex-col justify-center items-center w-full relative`,
  overlay: `absolute top-0 left-0 w-full h-full flex justify-center items-center transition-all avatarcard-overlay duration-300`,
};

const cssStyles = {
  downloadBtn: {
    background:
      "linear-gradient(92.73deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.04) 100%)",
    backdropFilter: "blur(32px)",
    padding: "1rem",
    wordBreak: "keep-all",
  } as CSSProperties,
};
const AvatarCardV3: FC<Props> = ({ src, w, h }) => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const size = () => {
    if (!w || !h) return "";
    return `${w && `w-[${w}]`} ${h && `h-[${h}]`}`;
  };

  const cardContainerCss = useMemo(() => {
    return { width: w, height: h };
  }, [w, h]);

  return (
    <div className={styles.container} ref={setContainer}>
      <div
        className={`wearable-card-container-v2 w-full h-full ${size()}`}
        style={cardContainerCss}
      >
        <AutoHeightImage src={WEARABLE_IMAGES["avatar-frame"]} />
        <AutoHeightImage src={src} />
        <div className={styles.overlay} style={{ zIndex: 2 }}>
          <span className="w-[80%] h-full flex items-center justify-center opacity-0">
            <CuttinEdgeBtn
              cssStyles={cssStyles.downloadBtn}
              tw="-translate-y-[50%]"
            >
              VIEW
            </CuttinEdgeBtn>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AvatarCardV3;
