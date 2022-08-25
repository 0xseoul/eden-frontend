import React from "react";
import { ICONS } from "../../constants/icons";

const styles = {
  section: `flex justify-between w-full`,
  titleContainer: `flex flex-col w-[24rem]`,
  iconContainer: `flex cursor-pointer`,
  titleTop: `flex flex-row text-lg font-light`,
  titleBottom: `flex flex-row text-xs justify-between`,
  titleItem: `flex gap-[0.75rem]`,
  titleItemContainer: `flex gap-[1.5rem]`,
  subtitle: `text-c-gray200`,
  icon: `w-[3rem] h-[3rem] flex items-center justify-center`,
};

const Top = () => {
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
              <span>0x583...B23c</span>
            </div>
          </div>
          <div className={styles.titleItemContainer}>
            <div className={`${styles.titleItem} gap-[4px]`}>
              <span className={styles.subtitle}>Avatar</span>
              <span>6</span>
            </div>
            <div className={`${styles.titleItem} gap-[4px]`}>
              <span className={styles.subtitle}>Item</span>
              <span>2</span>
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
