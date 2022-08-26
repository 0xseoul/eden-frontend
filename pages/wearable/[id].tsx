import { useRouter } from "next/router";
import React from "react";
import WearableLayout from "../../components/layout/WearableLayout";
import AvatarCard from "../../components/wearable/AvatarCard";
import { ICONS } from "../../constants/icons";
import { WEARABLE_IMAGES } from "../../constants/image";

const styles = {
  container: `w-full h-full flex justify-center items-center min-h-[35rem] h-[35rem] mx-[1.5rem] gap-[2rem]`,
  avatarContainer: `w-[24rem] h-full`,
  filterContainer: `w-[11.25rem] bg-red-500 h-full`,
  inventoryContainer: `flex-1 bg-red-800 flex h-full`,
  inventoryCard: `flex-1`,
  icon: ``,
};

const Wearables = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <WearableLayout>
      <div className={styles.container}>
        <form className={styles.avatarContainer}>
          <AvatarCard src={WEARABLE_IMAGES.hero} w="24rem" h="24rem" />
          <span>Code Name</span>
          <span>ADAM #2946 //</span>
          <div className={styles.icon}>
            {/* <span><ICONS.</span> */}
            <span></span>
            <span></span>
            <span></span>
          </div>
        </form>
        <form className={styles.filterContainer}>filter</form>
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
