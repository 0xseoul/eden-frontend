import React, { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const styles = {
  layout:
    "flex flex-col max-w-wearable-max h-full w-full justify-center items-center flex-1 mt-header mb-footer",
};
const WearableLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <section className={styles.layout}>
      <div className="h-full flex-1">{children}</div>
    </section>
  );
};

export default WearableLayout;
