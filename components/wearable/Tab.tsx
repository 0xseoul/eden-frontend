import React from "react";
import { ICONS } from "../../constants/icons";

const styles = {
  tab: `flex px-[1.5rem] py-[1rem] w-full justify-between items-center`,
  container: `flex gap-[1.2rem]`,
  searchbar: `w-[24rem] h-[3rem] bg-[#202122] flex items-center justify-center relative`,
  text: ``,
  input: `w-full px-2`,
  icon: `absolute right-2`,
};

const Tab = () => {
  return (
    <div className={styles.tab}>
      <div className={styles.container}>
        <span className="font-light">Select your ADAM to customize</span>
        <span className="font-bold text-primary">5 ADAM(S) Detected</span>
      </div>
      <div className={styles.container}>
        <div className={styles.searchbar}>
          <input placeholder="search" className={styles.input} />
          <span className={styles.icon}>
            <ICONS.search />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tab;
