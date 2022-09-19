import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AutoHeightImage from "../common/AutoHeightImage";
import { MAIN_IMAGES } from "../../constants";
import useOS from "../../hooks/useOS";

const styles = {
  section: `min-h-screen w-full flex justify-center items-center relative flex-col`,
  title: `text-primary font-black text-9xl uppercase`,
  content: `flex w-full items-center`,
  accordionWrapper: ``,
  accordion: `rounded-[0.5rem] w-[792px] min-h-[77px] flex flex-col justify-center p-6 gap-0 cursor-pointer transition-all`,
};

const windowStyles = {
  title: `text-8xl`,
  itemTitle: `text-sm`,
  accordion: `w-[692px] min-h-[57px] p-5`,
  console: `w-[486px] -translate-y-20`,
};

const cssStyles = {
  accordion: {
    background:
      "linear-gradient(91.89deg, rgba(0, 0, 0, 0.08) 0%, rgba(255, 255, 255, 0.08) 0.01%, rgba(255, 255, 255, 0.04) 100%)",
    backdropFilter: "blur(32px)",
  } as CSSProperties,

  accordianContent: (_isClicked: boolean, height: number): CSSProperties => {
    return {
      height: _isClicked ? `${height}px` : `0px`,
    } as CSSProperties;
  },
};

const contents = [
  {
    id: 1,
    title: "MINT SUPPLY AND PRICE",
    content:
      "If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated - click here to donate using PayPal. Thank you for your support.",
  },
  {
    id: 2,
    title: "MINT SUPPLY AND PRICE",
    content:
      "If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated - click here to donate using PayPal. Thank you for your support.",
  },
  {
    id: 3,
    title: "MINT SUPPLY AND PRICE",
    content:
      "If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated - click here to donate using PayPal. Thank you for your support.",
  },
  {
    id: 4,
    title: "MINT SUPPLY AND PRICE",
    content:
      "If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated - click here to donate using PayPal. Thank you for your support.",
  },
  {
    id: 5,
    title: "MINT SUPPLY AND PRICE",
    content:
      "If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated - click here to donate using PayPal. Thank you for your support.",
  },
];

const Faq = () => {
  const [clicked, setClicked] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const { currentOS } = useOS();
  const isWindow = currentOS === "Windows";
  // const isWindow = false;
  const height = ref.current?.offsetHeight ?? 0;
  console.log(height);
  const onClick = (id: number) =>
    clicked === id ? setClicked(0) : setClicked(id);

  return (
    <div className={styles.section}>
      <span className={`${styles.title} ${isWindow && windowStyles.title}`}>
        Faq
      </span>
      <div className={styles.content}>
        <div className="flex-1">
          <div className="relative w-[80%]">
            <div
              className={`absolute left-0 top-0 w-[100%] -translate-y-[60%] ${
                isWindow && windowStyles.console
              }`}
            >
              <AutoHeightImage src={MAIN_IMAGES.console} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-[1.35]">
          {contents.map((item) => {
            const isClicked = item.id === clicked;
            return (
              <div
                key={item.id}
                className={`${styles.accordion} ${
                  isWindow && windowStyles.accordion
                }`}
                style={{
                  ...cssStyles.accordion,
                  gap: isClicked ? "1.5rem" : "0rem",
                }}
                onClick={() => onClick(item.id)}
              >
                <div
                  className={`translate-y-0.5 text-md font-black ${
                    isWindow && windowStyles.itemTitle
                  }`}
                >
                  {item.title}
                </div>
                <div
                  className="relative overflow-hidden transition-all"
                  style={cssStyles.accordianContent(isClicked, height)}
                >
                  <motion.div
                    className="text-sm text-c-gray200 absolute t-0"
                    ref={ref}
                  >
                    {item.content}
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
