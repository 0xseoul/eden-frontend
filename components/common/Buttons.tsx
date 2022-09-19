import React, { FC } from "react";

interface CuttingEdgeBtnProps {
  children: React.ReactNode;
  cssStyles?: React.CSSProperties;
  tw?: string;
  onClick?: () => void;
}

export const CuttinEdgeBtn: FC<CuttingEdgeBtnProps> = ({
  cssStyles,
  children,
  tw,
  onClick,
}) => {
  return (
    <div className="cutting-button-container w-full" onClick={onClick}>
      <div
        className={`w-full font-black h-[3rem] flex items-center justify-center cursor-pointer button ${tw}`}
        style={cssStyles}
      >
        <span className="translate-y-0.5">{children}</span>
      </div>
    </div>
  );
};
