import React, { CSSProperties } from "react";
import { MAIN_IMAGES } from "../../constants/image";
import AutoHeightImage from "../common/AutoHeightImage";

const styles = {
  section: `min-h-screen w-full max-w-[100%] flex justify-center items-center relative`,
  avatarContainer: `min-w-full h-full flex justify-start items-center absolute`,
  text: `absolute text-white text-center text-3xl z-10 font-black leading-[153px]`,
  avatar: `bg-gray-200 h-full w-[20%] min-w-[20%]`,
};

const cssStyles = {
  avatar: (imgSrc: string): CSSProperties =>
    ({
      backgroundImage: `url(${imgSrc}) `,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    } as CSSProperties),
};

const imgFlatten = Object.values(MAIN_IMAGES.avatars);

const Avatar = () => {
  return (
    <section className={styles.section}>
      {/* <div className={styles.text}>text</div> */}
      <div className={styles.text}>
        10,000 ADAMS <br />
        PFP COLLECTION
      </div>
      <div className="max-w-screen w-screen h-screen scroll-hidden">
        <section className={`${styles.avatarContainer} scroll-hidden`}>
          {imgFlatten.map((img) => (
            <div
              className={styles.avatar}
              style={cssStyles.avatar(img)}
              key={img}
            />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Avatar;
