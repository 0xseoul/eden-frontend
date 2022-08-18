/* eslint-disable import/no-extraneous-dependencies */
import React, { FC, useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import dynamic from "next/dynamic";
// import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
// easings.min.js
// import "fullpage.js/vendors/easings"; // Optional. When using scrollOverflow:true
import MainBanner from "../components/sections/MainBanner";
import About from "../components/sections/About";
import Avatar from "../components/sections/Avatar";
import Roadmap from "../components/sections/Roadmap";
import Story from "../components/sections/Story";
import Faq from "../components/sections/Faq";
import Wearable from "../components/sections/Wearable";
import useElementScroll from "../hooks/useElementScroll";
import { useFooter } from "../contexts/FooterContext";
import { SECTION_NAME_ARR } from "../constants/navigation";

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
const pluginWrapper = () => {
  require("fullpage.js/vendors/easings.js"); // Optional. Required when using the "scrollHorizontally" extension.
};
// import "fullpage.js/vendors/easings"; // Optional. When using scrollOverflow:true

const ComponentsWithNoSSR = dynamic(
  // typescript에서 props를 전달할때 interface를 정의해줍니다.

  () => import("../components/common/FullpageCssComponent"), // Component로 사용할 항목을 import합니다.
  { ssr: false } // ssr옵션을 false로 설정해줍니다.
);

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
  // const { children } = this.props;
  // const { isScroll, onScroll, scrollTop } = useElementScroll();
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  // console.log(container?.clientHeight);
  const onScroll = (e: any) => {
    if (!container) return;
    const { scrollTop } = e.target;
    setScrollPercent(((scrollTop / container?.clientHeight) * 2) / 3);
  };

  useEffect(() => {
    // console.log(scrollPercent);
    const dom = document.querySelector(".avatar-container");
    if (!dom) return;
    const scrollLeft = scrollPercent * dom.clientWidth;
    const scrollWidth = dom.scrollWidth;
    const scrollLeftPercent = scrollLeft / scrollWidth;
    // console.log(scrollLeftPercent);
    dom.scrollTo({
      left: scrollLeft,
      behavior: "auto",
    });
    // document.querySelector(".avatar-container").scrollLeft // 이거는 리덕스든 뭐든 써야할듯
    // document.querySelector(".avatar-container").scrollWidth
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
      pluginWrapper={pluginWrapper}
      anchors={anchors}
      navigation={true}
      navigationTooltips={anchors}
      scrollOverflow={true}
      bigSectionsDestination="bottom"
      scrollOverflowReset={true}
      afterLoad={(origin, destination, direction) => {
        // console.log(origin, destination, direction);
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

// ReactDOM.render(<FullpageWrapper />, document.getElementById("react-root"));
