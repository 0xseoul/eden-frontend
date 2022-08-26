import { useRouter } from "next/router";
import React from "react";
import WearableLayout from "../../components/layout/WearableLayout";
import Card from "../../components/wearable/Card";
import { ICONS } from "../../constants/icons";
import { WEARABLE_IMAGES } from "../../constants/image";

const styles = {
  container: `w-full h-full flex justify-center items-center min-h-[40rem] h-[40rem] mx-[1.5rem] gap-[2rem]`,
  avatarContainer: `w-[24rem] h-full`,
  filterContainer: `w-[11.25rem] bg-red-500 h-full`,
  inventoryContainer: `flex-1 bg-red-800 flex h-full`,
  inventoryCard: `flex-1`,
};

const Wearables = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <WearableLayout>
      <div className={styles.container}>
        <form className={styles.avatarContainer}>
          <Card src={WEARABLE_IMAGES.hero} />
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
