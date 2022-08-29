import { useRouter } from "next/router";
import React, { CSSProperties, FC } from "react";
import AutoHeightImage from "../../components/common/AutoHeightImage";
import WearableLayout from "../../components/layout/WearableLayout";
import AvatarCard from "../../components/wearable/AvatarCard";
import FilterBtn from "../../components/wearable/FilterBtn";
import InventoryCard from "../../components/wearable/InventoryCard";
import { ICONS } from "../../constants/icons";
import { WEARABLE_IMAGES } from "../../constants/image";

const styles = {
  container: `w-full h-full flex justify-center items-center min-h-[40rem] h-[40rem] mx-[1.5rem] gap-[2rem]`,
  avatarContainer: `w-[24rem] h-full flex flex-col`,
  filterContainer: `w-[11.25rem] h-full`,
  inventoryContainer: `flex-1 flex h-full overflow-y-auto wearable-custom-scrollbar-container `,
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

interface CardComponentProps {
  src: string;
  name: string;
}
const CardComponent: FC<CardComponentProps> = ({ src, name }) => {
  return (
    <div className={styles.inventoryCard}>
      <div className="p-2">
        <div className="w-full object-contain rounded-[8px] overflow-hidden border-[1px] border-primary">
          <AutoHeightImage src={src} />
        </div>
        <div>{name}</div>
      </div>
    </div>
  );
};

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
            <AvatarCard src={WEARABLE_IMAGES.hero} w="24rem" h="24rem" />
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
            <span
              className="w-full font-black py-4 flex items-center justify-center cursor-pointer"
              style={cssStyles.downloadBtn}
            >
              <span className="translate-y-0.5">DOWNLOAD IMAGE</span>
            </span>
          </div>
        </form>
        <form className="flex flex-col items-start justify-start h-full">
          <ul className={styles.filterContainer}>{filterListComponents}</ul>
          <div className="w-full">
            {/* TODO: cuttnig button container */}

            <div className="bg-primary w-full font-black py-4 flex items-center justify-center cursor-pointer text-black">
              <span className="translate-y-0.5">SAVE</span>
            </div>
          </div>
        </form>
        <form className={styles.inventoryContainer}>
          <div className={styles.grid}>
            {/* <div className={styles.inventoryCard}> */}
            {inventoryListComponents}

            {/* </div> */}
          </div>
        </form>
      </div>
    </WearableLayout>
  );
};

export default Wearables;
