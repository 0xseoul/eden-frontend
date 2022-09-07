import Link from "next/link";
import React, { useEffect } from "react";
import WearableLayout from "../../components/layout/WearableLayout";
import AvatarCardV3 from "../../components/wearable/AvatarCard-v3";
import { WEARABLE_IMAGES } from "../../constants/image";

const styles = {
  container: `flex flex-1 h-[600px] max-h-[600px] w-full`,
  grid: `grid grid-cols-4 w-full gap-6 p-6 overflow-y-scroll auto-rows-[330px]  wearable-custom-scrollbar-container`,
  cardContainer: `flex flex-col wearable-inventory-avatar-container min-h-[330px]`,
};

const index = () => {
  const arr = Array.from({ length: 10 }, (_, i) => i + 1);
  // eslint-disable-next-line
  const [cardWidth, setCardWidth] = React.useState<number>(0);

  // eslint-disable-next-line
  useEffect(() => {
    const dom = document.querySelector(".wearable-inventory-avatar-container");
    if (!dom) return;
    console.log(dom.clientWidth);
    setCardWidth(dom.clientWidth);
  }, []);

  const cardComponent = arr.map((item, index) => (
    <div className={styles.cardContainer} key={item}>
      <Link href={`/wearable/1`}>
        <div
          className={`flex cursor-pointer h-[${cardWidth}px] w-[${cardWidth}px]`}
        >
          <AvatarCardV3
            src={WEARABLE_IMAGES.hero}
            w={`${cardWidth}px`}
            h={`${cardWidth}px`}
          />
        </div>
      </Link>
      <div className="pt-6">ADAM #5384</div>
    </div>
  ));

  return (
    <WearableLayout>
      <div className={styles.container}>
        <div className={styles.grid}>{cardComponent}</div>
      </div>
    </WearableLayout>
  );
};

export default index;
