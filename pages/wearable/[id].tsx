import { useLazyQuery, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { CSSProperties, FC } from "react";
import { api } from "../../api";
import AutoHeightImage from "../../components/common/AutoHeightImage";
import { CuttinEdgeBtn } from "../../components/common/Buttons";
import WearableLayout from "../../components/layout/WearableLayout";
import AvatarCard from "../../components/wearable/AvatarCard";
import AvatarCardV2 from "../../components/wearable/AvatarCard-v2";
import FilterBtn from "../../components/wearable/FilterBtn";
import InventoryCard from "../../components/wearable/InventoryCard";
import { ICONS } from "../../constants/icons";
import { WEARABLE_IMAGES } from "../../constants/image";
import {
  GET_AVATAR,
  GET_AVAT_AND_INVENTORY,
  GET_FILTERD_CLOTHES,
} from "../../GraphQL/Queries";
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
  avatarContainer: `w-[24rem] h-full flex flex-col`,
  filterContainer: `w-[11.25rem] h-full`,
  inventoryContainer: `flex-1 flex h-full overflow-y-auto wearable-custom-scrollbar-container `,
  inventoryWrapper: `flex-1 flex h-full flex-col`,
  grid: `grid grid-cols-3 auto-rows-[270px] w-full`,
  inventoryCard: `flex-1`,
  icon: `flex gap-[0.5rem] mt-2`,
  iconWrapper: `cursor-pointer`,
  downloadBtnContainer: `fixed bottom-0 left-[50%] translate-x-[-50%] z-50`,
};

const cssStyles = {
  downloadBtn: {
    background:
      "linear-gradient(92.73deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.04) 100%)",
    backdropFilter: "blur(32px)",
  } as CSSProperties,
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
];

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

  const handleClickFilter = async (type: string) => {
    dispatch(SET_CLICKED_FILTER(type));
    const data = await api.filterClothes(type, wallet);
    dispatch(SET_FILTERD_CLOTHES(data));
  };

  const filterListComponents = filterList.map((filter) => {
    const isClicked = filter.type === clickedFilter;
    if (isClicked) console.log(filter.type);
    return (
      <FilterBtn
        text={filter.name}
        key={filter.name}
        onClick={() => handleClickFilter(filter.type)}
        isClicked={isClicked}
      />
    );
  });

  // const arr = Array.from({ length: 10 }, (_, i) => i);
  // console.log(clothes);

  const inventoryItem = () => {
    if (searchKeyword.length > 0) return searchedClothes;
    if (clickedFilter !== "all_items") return filteredClothes;
    return clothes;
  };
  const inventoryListComponents = inventoryItem()?.map((item, index) => (
    <InventoryCard
      src={item.image_url}
      // src={WEARABLE_IMAGES.shoes}
      name={item.name}
      // name="Louis Vuitton x Nike Air Force 1 Green | Size 7"
      key={item._id}
      itemNumber={`#${item.hash_number}`}
    />
  ));
  return (
    <>
      <WearableLayout>
        <div className={styles.container}>
          <form className={styles.avatarContainer}>
            <div className="flex flex-col">
              <AvatarCardV2
                src={
                  data?.getAvatar?.overlapped_image_url ?? WEARABLE_IMAGES.hero
                }
                w="24rem"
                h="24rem"
              />
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
          <form className="flex flex-col items-start justify-start h-full">
            <ul className={styles.filterContainer}>{filterListComponents}</ul>
            <div className="w-full">
              {/* TODO: cuttnig button container */}
              <CuttinEdgeBtn tw="bg-primary text-black">SAVE</CuttinEdgeBtn>
            </div>
          </form>
          <section className={styles.inventoryWrapper}>
            <form className={styles.inventoryContainer}>
              <div className={styles.grid}>{inventoryListComponents}</div>
            </form>
            <div>
              <div className="flex justify-end w-full">
                <div className="flex w-[228px] wearable-reset-button overflow-hidden cursor-pointer">
                  <span className="btn-icon h-[3rem] w-[3rem] flex items-center justify-center">
                    <ICONS.lock />
                  </span>
                  <div className="uppercase btn-text h-[3rem] flex-1 flex items-center justify-center font-black text-c-gray300">
                    <span className="translate-y-0.5">RESET</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </WearableLayout>
      <div className={styles.downloadBtnContainer}>
        <div className="w-[420px] h-[70px] bg-[#202122] flex justify-center items-center cursor-pointer wearable-download-btn-top">
          <span>Download Complate</span>
        </div>
      </div>
    </>
  );
};

export default Wearables;
