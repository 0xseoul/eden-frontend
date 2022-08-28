import { useRouter } from "next/router";
import React, { CSSProperties, FC } from "react";
import WearableLayout from "../../components/layout/WearableLayout";
import AvatarCard from "../../components/wearable/AvatarCard";
import { ICONS } from "../../constants/icons";
import { WEARABLE_IMAGES } from "../../constants/image";

const styles = {
  container: `w-full h-full flex justify-center items-center min-h-[35rem] h-[35rem] mx-[1.5rem] gap-[2rem]`,
  avatarContainer: `w-[24rem] h-full flex flex-col`,
  filterContainer: `w-[11.25rem] h-full`,
  inventoryContainer: `flex-1 bg-red-800 flex h-full`,
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

interface FilterBtnProps {
  text: string;
}
const FilterBtn: FC<FilterBtnProps> = ({ text }) => {
  return (
    <li className="flex p-4 items-center justify-start gap-2 filter-icon transition-all cursor-pointer">
      <span className="flex items-center justify-center">
        <ICONS.menu />
      </span>
      <div className="flex items-center justify-center translate-y-0.5">
        <div>{text}</div>
      </div>
    </li>
  );
};

const Wearables = () => {
  const router = useRouter();
  const { id } = router.query;
  const filterListComponents = filterList.map((filter) => (
    <FilterBtn text={filter.name} key={filter.name} />
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
          <div className="flex-1 flex items-end w-full justify-center">
            {/* TODO: cuttnig button container */}
            <span
              className="w-full font-black py-4 flex items-center justify-center cursor-pointer"
              style={cssStyles.downloadBtn}
            >
              DOWNLOAD IMAGE
            </span>
          </div>
        </form>
        <ul className={styles.filterContainer}>{filterListComponents}</ul>
        <form className={styles.inventoryContainer}>
          <div className={styles.inventoryCard}>1</div>
          <div className={styles.inventoryCard}>2</div>
          <div className={styles.inventoryCard}>3</div>
        </form>
      </div>
    </WearableLayout>
  );
};

export default Wearables;
