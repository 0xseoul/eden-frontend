import { useRouter } from "next/router";
import React, { CSSProperties, FC } from "react";
import AutoHeightImage from "../../components/common/AutoHeightImage";
import { CuttinEdgeBtn } from "../../components/common/Buttons";
import WearableLayout from "../../components/layout/WearableLayout";
import AvatarCard from "../../components/wearable/AvatarCard";
import AvatarCardV2 from "../../components/wearable/AvatarCard-v2";
import FilterBtn from "../../components/wearable/FilterBtn";
import InventoryCard from "../../components/wearable/InventoryCard";
import { ICONS } from "../../constants/icons";
import { WEARABLE_IMAGES } from "../../constants/image";

const styles = {
  container: `w-full h-full flex justify-center items-center min-h-[40rem] h-[40rem] mx-[1.5rem] gap-[2rem]`,
  avatarContainer: `w-[24rem] h-full flex flex-col`,
  filterContainer: `w-[11.25rem] h-full`,
  inventoryContainer: `flex-1 flex h-full overflow-y-auto wearable-custom-scrollbar-container `,
  inventoryWrapper: `flex-1 flex h-full flex-col`,
  grid: `grid grid-cols-3 auto-rows-[270px] w-full`,
  inventoryCard: `flex-1`,
  icon: `flex gap-[0.5rem] mt-2`,
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
  },
  {
    name: "Hair",
  },
  {
    name: "Clothing",
  },
  {
    name: "Eyes",
  },
  {
    name: "Mouth",
  },
  {
    name: "Off hand",
  },
  {
    name: "Eye wear",
  },
  {
    name: "Skin",
  },
  {
    name: "Background",
  },
];

const Wearables = () => {
  const router = useRouter();
  const { id } = router.query;
  const filterListComponents = filterList.map((filter) => (
    <FilterBtn text={filter.name} key={filter.name} />
  ));

  const arr = Array.from({ length: 10 }, (_, i) => i);
  const inventoryListComponents = arr.map((i) => (
    <InventoryCard
      src={WEARABLE_IMAGES.shoes}
      name="Louis Vuitton x Nike Air Force 1 Green | Size 7"
      key={`Wearable ${i}`}
      itemNumber="#111"
    />
  ));
  return (
    <WearableLayout>
      <div className={styles.container}>
        <form className={styles.avatarContainer}>
          <div className="flex flex-col">
            <AvatarCardV2 src={WEARABLE_IMAGES.hero} w="24rem" h="24rem" />
            {/* <AvatarCard src={WEARABLE_IMAGES.hero} w="24rem" h="24rem" /> */}
            <span className="text-xs text-c-gray300 mt-4">Code Name</span>
            <span>ADAM #2946 //</span>
            <div className={styles.icon}>
              <span>
                <ICONS.opensea />
              </span>
              <span>
                <ICONS.twitter />
              </span>
              <span>
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
            {/* <div className="bg-primary w-full font-black py-4 flex items-center justify-center cursor-pointer text-black">
              <span className="translate-y-0.5">SAVE</span>
            </div> */}
          </div>
        </form>
        <section className={styles.inventoryWrapper}>
          <form className={styles.inventoryContainer}>
            <div className={styles.grid}>{inventoryListComponents}</div>
          </form>
          <div>
            <div className="flex justify-end w-full">
              <div className="flex w-[228px] wearable-reset-button overflow-hidden">
                <span className="btn-icon h-[3rem] w-[3rem] flex items-center justify-center">
                  <ICONS.lock />
                </span>
                <div className="uppercase btn-text h-[3rem] flex-1 flex items-center justify-center">
                  <span>RESET</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </WearableLayout>
  );
};

export default Wearables;
