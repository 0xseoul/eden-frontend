import React, { useEffect } from "react";
import { ICONS } from "../../constants/icons";

const styles = {
  tab: `flex px-[1.5rem] py-[1rem] w-full justify-between items-center pb-[2.5625rem]`,
  container: `flex gap-[1.2rem]`,
  searchbar: `w-[24rem] h-[3rem] bg-[#202122] flex items-center justify-center relative`,
  input: `w-full px-2`,
  icon: `absolute right-2`,
};

const Tab = () => {
  const [keyword, setKeyword] = React.useState<string>("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  const isSearching = keyword.length > 0;

  return (
    <div className={styles.tab}>
      <div className={styles.container}>
        <span className="font-light">Select your ADAM to customize</span>
        <span className="font-bold text-primary">5 ADAM(S) Detected</span>
      </div>
      <div className={styles.container}>
        <div className={styles.searchbar}>
          <input
            placeholder="search"
            className={styles.input}
            onChange={onChange}
            value={keyword}
          />
          <span className={styles.icon}>
            {isSearching ? (
              <span onClick={() => setKeyword("")} className="cursor-pointer">
                <ICONS.searchInactive />
              </span>
            ) : (
              <ICONS.search />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tab;
