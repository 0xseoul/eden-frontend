import React, { FC, useEffect, useState } from "react";
import { MAIN_IMAGES } from "../../constants";
import useIntersection from "../../hooks/useIntersection";
import AutoHeightImage from "../common/AutoHeightImage";

const styles = {
  section: `min-h-screen w-full flex justify-center items-center relative section-2`,
  wrapper: `flex w-full max-w-[1200px] gap-[27rem]`,
  container: `flex items-center justify-center`,
  box: `flex-1 flex items-center justify-center`,
  textWrapper: `max-w-[17.625rem] flex flex-col gap-8`,
};

// const cssStyles = {
//   shadow: {
//     animationDelay: "0.1s !important",
//   } as CSSProperties,
// };
// gap 447 ->

interface HighlightProps {
  children: React.ReactNode;
  className?: string;
}

const Highlight: FC<HighlightProps> = ({ children, className }) => (
  <span className={`${className} font-black`}>{children}</span>
);

const About = () => {
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const [shadowOnce, setShadowOnce] = useState<boolean>(false);
  const { isIntersecting } = useIntersection(container);
  useEffect(() => {
    if (isIntersecting) setShadowOnce(true);
  }, [isIntersecting]);
  return (
    <div className={styles.section} ref={setContainer}>
      <div className={styles.wrapper}>
        <div className={`${styles.box} !justify-end`}>
          <div
            className={`${styles.textWrapper} invisible ${
              shadowOnce && "shadow-down !visible"
            }`}
          >
            <span
              style={{ fontWeight: 900 }}
              className="text-xl leading-[76.8px]"
            >
              <span>
                WHO <br />
                WE ARE
              </span>
            </span>
            <span className="text-sm font-normal leading-[24px]">
              <span>
                Studio <Highlight>0XSEOUL</Highlight> uses NFT,{" "}
                <Highlight>blockchain</Highlight> authentication and{" "}
                <Highlight>augmented reality</Highlight>, combined with
                manufacturing expertise to create wearable digital fashion{" "}
                <Highlight>collectibles</Highlight> and{" "}
                <Highlight>avatars</Highlight>.
              </span>
            </span>
          </div>
        </div>
        {/* 447 + 282 + 471 */}
        <div className={`${styles.box} !justify-start`}>
          <div className="w-[471px]">
            <AutoHeightImage src={MAIN_IMAGES.logo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
