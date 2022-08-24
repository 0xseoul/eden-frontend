import { useRouter } from "next/router";
import React from "react";
import WearableLayout from "../../components/layout/WearableLayout";
import { ICONS } from "../../constants/icons";
import { WEARABLE_IMAGES } from "../../constants/image";

const styles = {
  background: `wearable-background absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center `,
  overlay: `flex bg-black/80 w-full h-full absolute top-0 left-0 w-screen h-screen z-10`,
};

const Wearables = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <WearableLayout>
      <form className="flex bg-black/80 w-full h-full">
        <div className="z-20">{id}</div>
      </form>
      <div className={styles.background} />
      <div className={styles.overlay} />
    </WearableLayout>
  );
};

export default Wearables;
