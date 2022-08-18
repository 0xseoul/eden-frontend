import React, { FC } from "react";
import { FooterProvider } from "./FooterContext";

interface Props {
  children: React.ReactNode;
}
const ContextProvider: FC<Props> = ({ children }) => {
  return <FooterProvider>{children}</FooterProvider>;
};

export default ContextProvider;
