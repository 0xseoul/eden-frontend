import React, { CSSProperties, useEffect } from "react";
import { MAIN_IMAGES } from "../../constants/image";
import useElementScroll from "../../hooks/useElementScroll";
import useScrolling from "../../hooks/useScroll";

// wrapper: `flex flex-col items-center justify-center h-screen max-h-screen max-w-full`,
const styles = {
  wrapper: `flex flex-col items-center justify-center h-screen max-h-screen max-w-full section-3`,
  section: `min-h-[400vh] flex bg-white flex-col justify-start items-center max-w-full`,
  container: `max-h-screen w-full max-w-[100%] flex justify-center items-center relative sticky top-0`,
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
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <form className={styles.container}>
          <div className={styles.text}>
            10,000 ADAMS <br />
            PFP COLLECTION
          </div>
          <div className="max-w-screen w-screen h-screen scroll-hidden ">
            <section
              className={`${styles.avatarContainer} scroll-hidden  avatar-container`}
            >
              {imgFlatten.map((img) => (
                <div
                  className={styles.avatar}
                  style={cssStyles.avatar(img)}
                  key={img}
                />
              ))}
            </section>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Avatar;
