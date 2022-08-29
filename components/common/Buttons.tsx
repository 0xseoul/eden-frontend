import React, { FC } from "react";

interface CuttingEdgeBtnProps {
  children: React.ReactNode;
  cssStyles?: React.CSSProperties;
  tw?: string;
}

export const CuttinEdgeBtn: FC<CuttingEdgeBtnProps> = ({
  cssStyles,
  children,
  tw,
}) => {
  return (
    <div className="cutting-button-container w-full">
      <div
        className={`w-full font-black py-4 flex items-center justify-center cursor-pointer button ${tw}`}
        style={cssStyles}
      >
        <span className="translate-y-0.5">{children}</span>
      </div>
    </div>
  );
};
