import React, { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const WearableLayout: FC<LayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default WearableLayout;
