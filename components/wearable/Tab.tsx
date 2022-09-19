import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { api } from "../../api";
import { ICONS } from "../../constants";
import useSearch from "../../hooks/useSearch";
import { IClothes } from "../../interfaces";
import {
  SET_SEARCHED_CLOTHES,
  SET_SEARCHING,
  SET_SEARCH_KEYWORD,
} from "../../reducers/inventory";
import { getAvatars, getWallet } from "../../reducers/user";
import { useTypedDispatch, useTypedSelector } from "../../store";

const styles = {
  tab: `flex px-[1.5rem] py-[1rem] w-full justify-between items-center pb-[2.5625rem]`,
  container: `flex gap-[1.2rem]`,
  searchbar: `w-[24rem] h-[3rem] bg-[#202122] flex items-center justify-center relative`,
  input: `w-full px-2`,
  icon: `absolute right-2`,
};

const Tab = () => {
  // const [keyword, setKeyword] = React.useState<string>("");
  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  //   setKeyword(e.target.value);
  const router = useRouter();
  const pathname = router.pathname;
  const isCustomizePage = pathname === "/wearable/[id]";
  // console.log(pathname);
  // /wearable/[id]
  // /wearable
  const dispatch = useTypedDispatch();
  const wallet = useTypedSelector(getWallet);

  // used in handleSearchClothes
  const handleCustomizePageSearch = async (
    setData: Dispatch<SetStateAction<any>>,
    _keyword: string
  ) => {
    const data = await api.searchClothes(_keyword, wallet);
    setData(data);
  };

  const handleSearchClothes = async (
    setData: Dispatch<SetStateAction<any>>,
    _keyword: string
  ): Promise<void> => {
    isCustomizePage && handleCustomizePageSearch(setData, _keyword);
  };

  const { data, keyword, setKeyword, loading, onChange } = useSearch({
    api: handleSearchClothes,
  });

  useEffect(() => {
    dispatch(SET_SEARCHED_CLOTHES(data as IClothes[]));
  }, [data]);

  useEffect(() => {
    dispatch(SET_SEARCH_KEYWORD(keyword));
    if (keyword.length === 0) dispatch(SET_SEARCHED_CLOTHES([]));
  }, [keyword]);

  useEffect(() => {
    dispatch(SET_SEARCHING(loading));
  }, [loading]);

  const avatars = useTypedSelector(getAvatars);

  const isSearching = keyword.length > 0;

  return (
    <div className={styles.tab}>
      <div className={styles.container}>
        <span className="font-light">Select your ADAM to customize</span>
        <span className="font-bold text-primary">
          {avatars.length} ADAM(S) Detected
        </span>
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
