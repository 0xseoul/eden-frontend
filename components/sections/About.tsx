import React, { FC } from "react";
import { MAIN_IMAGES } from "../../constants/image";
import AutoHeightImage from "../common/AutoHeightImage";

const styles = {
  section: `min-h-screen w-full flex justify-center items-center relative`,
  wrapper: `flex w-full max-w-[1200px]`,
  container: `flex items-center justify-center`,
  box: `flex-1 flex items-center justify-center`,
  textWrapper: `max-w-[17.625rem] flex flex-col gap-8`,
};

interface HighlightProps {
  children: React.ReactNode;
  className?: string;
}

const Highlight: FC<HighlightProps> = ({ children, className }) => (
  <span className={`${className} font-black`}>{children}</span>
);

const About = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={`${styles.box} !justify-start pl-14`}>
          <div className={styles.textWrapper}>
            <span
              style={{ fontWeight: 900 }}
              className="text-xl leading-[76.8px]"
            >
              WHO <br />
              WE ARE
            </span>
            <span className="text-sm font-normal leading-[24px]">
              Studio <Highlight>0XSEOUL</Highlight> uses NFT,
              <Highlight>blockchain</Highlight>
              authentication and <Highlight>augmented reality</Highlight>,
              combined with manufacturing expertise to create wearable digital
              fashion <Highlight>collectibles</Highlight> and{" "}
              <Highlight>avatars</Highlight>.
            </span>
          </div>
        </div>
        {/* 447 + 282 + 471 */}
        <div className={`${styles.box} !justify-end pr-14`}>
          <div className="w-[471px]">
            <AutoHeightImage src={MAIN_IMAGES.logo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
