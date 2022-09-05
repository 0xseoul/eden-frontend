import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ICONS } from "../../constants/icons";
import { MAIN_IMAGES } from "../../constants/image";
import { HEADER_HEIGHT } from "../../constants/style";

const styles = {
  section: `min-h-[${HEADER_HEIGHT}] w-full flex] fixed top-0 left-0 right-0 z-50 transition-all`,
  container: `px-[2.5rem] py-[3rem] flex justify-between items-center`,
  logo: `cursor-pointer text-lg text-primary font-black `,
  icon: `cursor-pointer`,
};
const Header = () => {
  const router = useRouter();
  const currNavName = router.pathname;
  const isWearable = currNavName.includes("/wearable");
  const isHome = currNavName === "/";
  return (
    <section className={`${styles.section} ${isWearable && "relative"}`}>
      <div className={`${styles.container} ${isWearable && "!justify-center"}`}>
        <div className={`${styles.logo} ${isWearable && "text-white"}`}>
          <Link href="/">EDEN</Link>
        </div>
        {isHome && (
          <div className="flex gap-8">
            <div className="text-c-gray300 font-black uppercase cursor-pointer">
              join us
            </div>
            <div className="flex gap-4">
              <span className={styles.icon}>
                <ICONS.twitter2 />
              </span>
              <span className={styles.icon}>
                <ICONS.discord2 />
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
