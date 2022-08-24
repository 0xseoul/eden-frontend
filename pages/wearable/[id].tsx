import { useRouter } from "next/router";
import React from "react";
import WearableLayout from "../../components/layout/WearableLayout";

const Wearables = () => {
  const router = useRouter();
  const { id } = router.query;
  return <WearableLayout>{id}</WearableLayout>;
};

export default Wearables;
