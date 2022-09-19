import Link from "next/link";
import React, { useCallback } from "react";
import WearableLayout from "../../components/layout/WearableLayout";
import AvatarCardV3 from "../../components/wearable/AvatarCard-v3";
import { TMP_IMAGES, WEARABLE_IMAGES } from "../../constants";
import { getAvatars, getWallet } from "../../reducers/user";
import { useTypedSelector } from "../../store";

const styles = {
  container: `flex flex-1 h-[600px] max-h-[600px] w-full`,
  grid: `grid grid-cols-4 w-full gap-6 p-6 overflow-y-scroll auto-rows-[330px]  wearable-custom-scrollbar-container`,
  cardContainer: `flex flex-col wearable-inventory-avatar-container min-h-[330px]`,
};

const Wearable = () => {
  const [cardRef, setCardRef] = React.useState<HTMLDivElement | null>(null);
  const avatars = useTypedSelector(getAvatars);
  // const arr = Array.from({ length: 10 }, (_, i) => i + 1);
  // const wallet = useTypedSelector(getWallet);

  const cardComponent = useCallback(
    () =>
      avatars?.map((item, index) => (
        <div className={styles.cardContainer} key={item._id} ref={setCardRef}>
          <Link href={`/wearable/${item.token_id}`}>
            <div
              className={`flex cursor-pointer h-[${cardRef?.clientWidth}px] w-[${cardRef?.clientWidth}px]`}
            >
              <AvatarCardV3
                src={TMP_IMAGES.avatars[1].src}
                // src={WEARABLE_IMAGES.hero}
                w={`${cardRef?.clientWidth}px`}
                h={`${cardRef?.clientWidth}px`}
              />
            </div>
          </Link>
          <div className="pt-6">ADAM #{item.token_id}</div>
        </div>
      )),
    [avatars]
  );

  return (
    <WearableLayout>
      <div className={styles.container}>
        <div className={styles.grid}>{cardComponent()}</div>
      </div>
    </WearableLayout>
  );
};

export default Wearable;
