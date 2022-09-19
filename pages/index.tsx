import React, { FC, useEffect, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import MainBanner from "../components/sections/MainBanner";
import About from "../components/sections/About";
import Avatar from "../components/sections/Avatar";
import Roadmap from "../components/sections/Roadmap";
import Story from "../components/sections/Story";
import Faq from "../components/sections/Faq";
import Wearable from "../components/sections/Wearable";
import { useFooter } from "../contexts/FooterContext";
import { SECTION_NAME_ARR } from "../constants";

interface Props {
  children: React.ReactNode;
}
const MySection: FC<Props> = ({ children }) => {
  return (
    <div className="section">
      <div>{children}</div>
    </div>
  );
};

const ScrollSection: FC<Props> = ({ children }) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const onScroll = (e: any) => {
    if (!container) return;
    const { scrollTop } = e.target;
    const multiple = 2 / 3;
    setScrollPercent((scrollTop / container?.clientHeight) * multiple);
  };

  useEffect(() => {
    // console.log(scrollPercent);
    const dom = document.querySelector(".avatar-container");
    if (!dom) return;
    const scrollLeft = scrollPercent * dom.clientWidth;
    // const scrollWidth = dom.scrollWidth;
    // const scrollLeftPercent = scrollLeft / scrollWidth;
    dom.scrollTo({
      left: scrollLeft,
      behavior: "auto",
    });
  }, [scrollPercent]);

  return (
    <div className="section" onScroll={onScroll} ref={setContainer}>
      <div>{children}</div>
    </div>
  );
};

const anchors = SECTION_NAME_ARR;

const FullpageWrapper = () => {
  const { setCurrentSection } = useFooter();
  return (
    <ReactFullpage
      anchors={anchors}
      navigation={true}
      navigationTooltips={anchors}
      scrollOverflow={true}
      bigSectionsDestination="bottom"
      scrollOverflowReset={true}
      afterLoad={(origin, destination, direction) => {
        setCurrentSection(destination.anchor.toString());
      }}
      render={({ state, fullpageApi }) => {
        fullpageApi?.reBuild();
        // console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console
        return (
          <div>
            <MySection>
              <MainBanner />
            </MySection>
            <MySection>
              <About />
            </MySection>
            <ScrollSection>
              <Avatar />
            </ScrollSection>
            <MySection>
              <Roadmap />
            </MySection>
            <MySection>
              <Story />
            </MySection>
            <MySection>
              <Faq />
            </MySection>
            <MySection>
              <Wearable />
            </MySection>
          </div>
        );
      }}
    />
  );
};

export default FullpageWrapper;
