import React, { CSSProperties, FC } from "react";
import { ICONS, WEARABLE_IMAGES } from "../../../constants";
import { IGetAvatar } from "../../../interfaces";
import { CuttinEdgeBtn } from "../../common/Buttons";
import AvatarCardV2 from "../AvatarCard-v2";
const styles = {
  container: `w-full h-full flex justify-center items-center min-h-[38.5rem] h-[38.5rem] mx-[1.5rem] my-[1.5rem] gap-[2rem]`,
  avatarContainer: `w-[24rem] h-full flex flex-col`,
  icon: `flex gap-[0.5rem] mt-2`,
  iconWrapper: `cursor-pointer`,
};

const cssStyles = {
  downloadBtn: {
    background:
      "linear-gradient(92.73deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.04) 100%)",
    backdropFilter: "blur(32px)",
  } as CSSProperties,
};

interface Props {
  // data: { getAvatar: IGetAvatar };
  id: string | string[] | undefined;
  children: React.ReactNode;
}
const AvatarContainer: FC<Props> = ({ children, id }) => {
  return (
    <form className={styles.avatarContainer}>
      <div className="flex flex-col">
        {children}
        {/* <AvatarCard src={WEARABLE_IMAGES.hero} w="24rem" h="24rem" /> */}
        <span className="text-xs text-c-gray300 mt-4">Code Name</span>
        {/* eslint-disable-next-line */}
        <span>ADAM #{id} //</span>
        <div className={styles.icon}>
          <span className={styles.iconWrapper}>
            <ICONS.opensea />
          </span>
          <span className={styles.iconWrapper}>
            <ICONS.twitter />
          </span>
          <span className={styles.iconWrapper}>
            <ICONS.discord />
          </span>
        </div>
      </div>
      <div className="flex-1 flex items-end w-full justify-center mt-[69px]">
        {/* TODO: cuttnig button container */}
        <CuttinEdgeBtn cssStyles={cssStyles.downloadBtn}>
          DOWNLOAD IMAGE
        </CuttinEdgeBtn>
      </div>
    </form>
  );
};

export default AvatarContainer;
