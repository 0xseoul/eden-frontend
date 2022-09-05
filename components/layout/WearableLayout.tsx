import React, { CSSProperties, FC } from "react";
import Tab from "../wearable/Tab";
import Top from "../wearable/Top";

interface LayoutProps {
  children: React.ReactNode;
}

const styles = {
  layout:
    "flex flex-col max-w-wearable-max h-full w-full justify-center items-center flex-1 mb-footer",
  background: `wearable-background fixed top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center `,
  overlay: `flex bg-black/80 w-full h-full fixed top-0 left-0 w-screen h-screen z-10`,
  container: `flex flex-1`,
};

const cssStyles = {
  container: {
    background: "rgba(32, 33, 34, 0.5)",
    backdropFilter: "blur(32px)",
  } as CSSProperties,
};

const WearableLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <section className={styles.layout}>
      <form className="h-full flex-1 z-30 w-full flex flex-col justify-center">
        <Top />
        <div style={cssStyles.container}>
          <Tab />
          <div className={styles.container}>{children}</div>
        </div>
      </form>
      <div className={styles.background} />
      <div className={styles.overlay} />
    </section>
  );
};

export default WearableLayout;
