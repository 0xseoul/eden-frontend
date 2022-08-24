import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { MAIN_IMAGES } from "../../constants/image";
import { HEADER_HEIGHT } from "../../constants/style";

const styles = {
  section: `min-h-[${HEADER_HEIGHT}] w-full flex] fixed top-0 left-0 right-0 z-50 transition-all`,
  container: `px-[2.5rem] py-[3rem] flex`,
  logo: `cursor-pointer text-lg text-primary font-black `,
};
const Header = () => {
  const router = useRouter();
  const currNavName = router.pathname;
  const isWearable = currNavName.includes("/wearable");
  return (
    <section className={styles.section}>
      <div className={`${styles.container} ${isWearable && "justify-center"}`}>
        <div className={`${styles.logo} ${isWearable && "text-white"}`}>
          <Link href="/">EDEN</Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
