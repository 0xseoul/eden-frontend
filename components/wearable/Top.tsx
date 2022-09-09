import React from "react";
import { ICONS } from "../../constants/icons";
import { getAvatars, getClothes, getWallet } from "../../reducers/user";
import { useTypedSelector } from "../../store";
import { cutWallet } from "../../utils/common";

const styles = {
  section: `flex justify-between w-full pb-[3rem]`,
  titleContainer: `flex flex-col w-[24rem]`,
  iconContainer: `flex`,
  titleTop: `flex flex-row text-lg font-light`,
  titleBottom: `flex flex-row text-xs justify-between`,
  titleItem: `flex gap-[0.75rem]`,
  titleItemContainer: `flex gap-[1.5rem]`,
  subtitle: `text-c-gray200`,
  icon: `w-[3rem] h-[3rem] flex items-center justify-center  cursor-pointer`,
};

const Top = () => {
  const wallet = useTypedSelector(getWallet);
  const avatars = useTypedSelector(getAvatars);
  const clothes = useTypedSelector(getClothes);
  return (
    <div className={styles.section}>
      <form className={styles.titleContainer}>
        <div className={styles.titleTop}>
          <span>WEARABLES</span>
        </div>
        <div className={styles.titleBottom}>
          <div className={styles.titleItemContainer}>
            <div className={styles.titleItem}>
              <span className={styles.subtitle}>Account</span>
              <span>{cutWallet(wallet)}</span>
            </div>
          </div>
          <div className={styles.titleItemContainer}>
            <div className={`${styles.titleItem} gap-[4px]`}>
              <span className={styles.subtitle}>Avatar</span>
              <span>{avatars.length}</span>
            </div>
            <div className={`${styles.titleItem} gap-[4px]`}>
              <span className={styles.subtitle}>Item</span>
              <span>{clothes.length}</span>
            </div>
          </div>
        </div>
      </form>
      <form className={styles.iconContainer}>
        <span className={styles.icon}>
          <ICONS.arrow />
        </span>
        <span className={`${styles.icon} rotate-180`}>
          <ICONS.arrow />
        </span>
        <span className={styles.icon}>
          <ICONS.close />
        </span>
      </form>
    </div>
  );
};

export default Top;
