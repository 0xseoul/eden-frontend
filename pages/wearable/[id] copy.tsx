import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";
import { api } from "../../api";
import WearableLayout from "../../components/layout/WearableLayout";
import AvatarCardV2 from "../../components/wearable/AvatarCard-v2";
import FilterBtn from "../../components/wearable/FilterBtn";
import InventoryCard from "../../components/wearable/InventoryCard";
import AvatarContainer from "../../components/wearable/[id]/AvatarContainer";
import FilterContainer from "../../components/wearable/[id]/FilterContainer";
import ItemsContainer from "../../components/wearable/[id]/ItemsContainer";
import { WEARABLE_IMAGES } from "../../constants";
import { GET_AVATAR } from "../../GraphQL/Queries";
import {
  getClickedFilter,
  getFilteredClothes,
  getSearchedClothes,
  getSearching,
  getSearchKeyword,
  SET_CLICKED_FILTER,
  SET_FILTERD_CLOTHES,
} from "../../reducers/inventory";
import { getClothes, getWallet } from "../../reducers/user";
import { useTypedDispatch, useTypedSelector } from "../../store";

const styles = {
  container: `w-full h-full flex justify-center items-center min-h-[38.5rem] h-[38.5rem] mx-[1.5rem] my-[1.5rem] gap-[2rem]`,
  downloadBtnContainer: `fixed bottom-0 left-[50%] translate-x-[-50%] z-50`,
  downloadBtnWrapper: `w-[420px] h-[70px] bg-[#202122] flex justify-center items-center cursor-pointer wearable-download-btn-top`,
};

const filterList = [
  {
    name: "All Items",
    type: "all_items",
  },
  {
    name: "Hair",
    type: "hair",
  },
  {
    name: "Clothing",
    type: "clothing",
  },
  {
    name: "Eyes",
    type: "eyes",
  },
  {
    name: "Mouth",
    type: "mouth",
  },
  {
    name: "Off hand",
    type: "off_hand",
  },
  {
    name: "Eye wear",
    type: "eye_wear",
  },
  {
    name: "Skin",
    type: "skin",
  },
  {
    name: "Background",
    type: "background",
  },
] as const;

const Wearables = () => {
  // 2개 query
  // 아바타 정보 + 인벤토리 정보
  const dispatch = useTypedDispatch();
  const router = useRouter();
  const { id } = router.query;
  const wallet = useTypedSelector(getWallet);
  const clothes = useTypedSelector(getClothes);
  const searchedClothes = useTypedSelector(getSearchedClothes);
  const searching = useTypedSelector(getSearching);
  const searchKeyword = useTypedSelector(getSearchKeyword);
  const clickedFilter = useTypedSelector(getClickedFilter);
  const filteredClothes = useTypedSelector(getFilteredClothes);
  const { data, loading, error } = useQuery(GET_AVATAR, {
    variables: { token_id: Number(id) },
  });

  // const { data, loading, error } = useQuery(GET_AVAT_AND_INVENTORY, {
  //   variables: { tokenId: Number(id), walletAddress: wallet },
  // });
  // GET_AVATAR

  // console.log(data, loading);

  const handleClickFilter = useCallback(
    async (type: string) => {
      dispatch(SET_CLICKED_FILTER(type));
      const _data = await api.filterClothes(type, wallet);
      dispatch(SET_FILTERD_CLOTHES(_data));
    },
    [wallet]
  );

  const filterListComponents = useCallback(
    () =>
      filterList.map((filter) => {
        const isClicked = filter.type === clickedFilter;
        // if (isClicked) console.log(filter.type);
        return (
          <FilterBtn
            text={filter.name}
            key={filter.name}
            onClick={() => handleClickFilter(filter.type)}
            isClicked={isClicked}
          />
        );
      }),
    [clickedFilter]
  );

  const inventoryItem = useCallback(() => {
    if (searchKeyword.length > 0) return searchedClothes;
    if (clickedFilter !== "all_items") return filteredClothes;
    return clothes;
  }, [searchKeyword, clickedFilter, searchedClothes, filteredClothes]);

  const inventoryListComponents = useCallback(
    () =>
      inventoryItem()?.map((item, index) => (
        <InventoryCard
          // src={item?.image_url ?? ""}
          src={WEARABLE_IMAGES.shoes}
          name={item?.name ?? "Louis Vuitton x Nike Air Force 1 Green | Size 7"}
          // name="Louis Vuitton x Nike Air Force 1 Green | Size 7"
          key={item?._id ?? "id"}
          itemNumber={`#${item?.hash_number ?? 0}`}
          isActivated={false}
          onClick={() => console.log("click")}
        />
      )),
    [inventoryItem]
  );

  return (
    <>
      <WearableLayout>
        <div className={styles.container}>
          <AvatarContainer id={id}>
            <AvatarCardV2
              // src={canvas.toImgSrc ?? WEARABLE_IMAGES.hero}
              src={
                data?.getAvatar?.overlapped_image_url ?? WEARABLE_IMAGES.hero
              }
              w="24rem"
              h="24rem"
            />
          </AvatarContainer>
          <FilterContainer>{filterListComponents()}</FilterContainer>
          <ItemsContainer>{inventoryListComponents()}</ItemsContainer>
        </div>
      </WearableLayout>
      <div className={styles.downloadBtnContainer}>
        <div className={styles.downloadBtnWrapper}>
          <span>Download Complate</span>
        </div>
      </div>
    </>
  );
};

export default Wearables;
