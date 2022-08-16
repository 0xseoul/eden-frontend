/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
// import ReactDOM from "react-dom";

// import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import MainBanner from "../components/sections/MainBanner";
import About from "../components/sections/About";
import Avatar from "../components/sections/Avatar";
import Roadmap from "../components/sections/Roadmap";
import Story from "../components/sections/Story";
import Faq from "../components/sections/Faq";
import Wearable from "../components/sections/Wearable";
// import "./styles.css";

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

const anchors = ["firstPage", "secondPage", "thirdPage"];

const FullpageWrapper = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    sectionsColor={[]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        <div>
          <MySection>
            <MainBanner />
          </MySection>
          <MySection>
            <About />
          </MySection>
          {/* <MySection>
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
          </MySection> */}
        </div>
      );
    }}
  />
);

export default FullpageWrapper;

// ReactDOM.render(<FullpageWrapper />, document.getElementById("react-root"));
