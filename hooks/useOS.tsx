import React, { useEffect } from "react";

type IOsType = "Windows" | "MacOS" | "UNIX" | "Linux" | "Unknown OS";

const useOS = () => {
  const [currentOS, setCurrentOS] = React.useState<IOsType | null>(null);
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  const getOS = (os: string): IOsType => {
    if (os.indexOf("Win") !== -1) return "Windows";
    if (os.indexOf("Mac") !== -1) return "MacOS";
    if (os.indexOf("X11") !== -1) return "UNIX";
    if (os.indexOf("Linux") !== -1) return "Linux";
    return "Unknown OS";
  };
  useEffect(() => {
    setCurrentOS(getOS(navigator.platform));
    // console.log(getOS(navigator.platform));

    // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(navigator.userAgent.includes("Mobile"));
  }, [navigator]);

  return { currentOS, isMobile };
};

export default useOS;
