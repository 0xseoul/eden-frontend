import { Dispatch, ReactElement, SetStateAction } from "react";
import { FC } from "react";
import { ReactNode } from "react";
import { useContext, useEffect, useState, createContext } from "react";

interface IFooterContext {
  currentSection: string;
  setCurrentSection: Dispatch<SetStateAction<string>>;
}

const footerContextInit = {
  currentSection: "",
  setCurrentSection: () => {},
};

export const FooterContext = createContext<IFooterContext>(footerContextInit);

export const useFooter = (): IFooterContext => useContext(FooterContext);
interface IFooterProviderProps {
  children: ReactNode;
}

export const FooterProvider: FC<IFooterProviderProps> = ({
  children,
}): ReactElement => {
  const [currentSection, setCurrentSection] = useState<string>("");

  const value = { currentSection, setCurrentSection };
  return (
    <FooterContext.Provider value={value}>{children}</FooterContext.Provider>
  );
};
