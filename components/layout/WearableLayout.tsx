import React, { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const styles = {
  layout:
    "flex flex-col max-w-wearable-max h-full w-full justify-center items-center flex-1 mt-header mb-footer",
  background: `wearable-background absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center `,
  overlay: `flex bg-black/80 w-full h-full absolute top-0 left-0 w-screen h-screen z-10`,
};
const WearableLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <section className={styles.layout}>
      <div className="h-full flex-1 z-30">{children}</div>
      <div className={styles.background} />
      <div className={styles.overlay} />
    </section>
  );
};

export default WearableLayout;
