import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import { NAV_ORDER } from "../../constants/navigation";
import { useFooter } from "../../contexts/FooterContext";

const styles = {
  section: `w-full flex fixed bottom-0 left-0 right-0 z-30 items-center flex-col text-xs px-[40px] py-[26px] gap-[2rem]`,
  row: `flex items-center  w-full`,
  container: `flex items-center`,
  navBtn: `cursor-pointer`,
};

interface NavProps {
  navItem: HTMLElement | null;
  children: React.ReactNode;
}
const NavBtn: FC<NavProps> = ({ navItem, children }) => {
  const { currentSection } = useFooter();
  const isActive = navItem?.textContent === currentSection;
  // console.log(`isActive ${isActive}`);
  // console.log(
  //   `currentSection : ${currentSection} || navItem : ${navItem?.textContent}`
  // );

  const onClick = () => {
    if (navItem) navItem.click();
    console.log(navItem?.textContent);
  };

  const style = {
    color: `#B6FF00`,
  };
  return (
    <div onClick={onClick}>
      <span
        className={`${styles.navBtn} transition-all ${
          isActive && "text-primary font-extrabold"
        } `}
      >
        {children}
      </span>
    </div>
  );
};
const Footer = () => {
  const [navDoms, setNavDoms] = useState<NodeListOf<Element> | null>(null);
  const router = useRouter();
  const currNavName = router.pathname;
  const isHome = currNavName === "/" || currNavName === "/full-page-test";

  useEffect(() => {
    const dom = document.querySelector("#fp-nav > ul");
    if (!dom) return;
    const navItems = dom.querySelectorAll("li > a");
    setNavDoms(navItems);
  }, []);

  return (
    <section className={styles.section}>
      <form
        className={`${styles.row} justify-between transition-all ${
          !isHome && "hidden"
        } `}
      >
        <div className="flex gap-[1.5rem] text-c-gray300">
          <NavBtn
            navItem={
              navDoms && (navDoms[NAV_ORDER["main-banner"]] as HTMLElement)
            }
          >
            Main
          </NavBtn>
          <NavBtn
            navItem={navDoms && (navDoms[NAV_ORDER.about] as HTMLElement)}
          >
            WHO WE ARE
          </NavBtn>
          <NavBtn
            navItem={navDoms && (navDoms[NAV_ORDER.roadamp] as HTMLElement)}
          >
            OUR ROADMAP
          </NavBtn>
          <NavBtn
            navItem={navDoms && (navDoms[NAV_ORDER.story] as HTMLElement)}
          >
            STORY
          </NavBtn>
          <NavBtn
            navItem={navDoms && (navDoms[NAV_ORDER.wearable] as HTMLElement)}
          >
            WEARABLES
          </NavBtn>
        </div>
        <div>tag</div>
      </form>
      <form className={styles.row}>ⓒ 2022. 0xSEOUL</form>
    </section>
  );
};

export default Footer;
