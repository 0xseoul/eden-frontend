/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from "react";
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
class MySection extends React.Component<Props> {
  render() {
    const { children } = this.props;
    return (
      <div className="section">
        <h3>{children}</h3>
      </div>
    );
  }
}

const anchors = [
  "firstPage",
  "secondPage",
  "thirdPage",
  "fourthPage",
  "fifthPage",
  "sixthPage",
  "seventhPage",
];

const FullpageWrapper = () => {
  return (
    <>
      <ComponentsWithNoSSR />
      <ReactFullpage
        pluginWrapper={pluginWrapper}
        anchors={anchors}
        navigation={false}
        navigationTooltips={anchors}
        scrollOverflow={true}
        bigSectionsDestination="top"
        scrollOverflowReset={true}
        render={({ state, fullpageApi }) => {
          fullpageApi?.reBuild();
          console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console
          return (
            <div>
              <MySection>
                <MainBanner />
              </MySection>
              <MySection>
                <About />
              </MySection>
              <MySection>
                <Avatar />
              </MySection>
              <MySection>
                <Roadmap />
              </MySection>
              <MySection>
                {" "}
                <Story />
              </MySection>
              <MySection>
                {" "}
                <Faq />
              </MySection>
              <MySection>
                {" "}
                <Wearable />
              </MySection>
            </div>
          );
        }}
      />
    </>
  );
};

export default FullpageWrapper;

// ReactDOM.render(<FullpageWrapper />, document.getElementById("react-root"));
