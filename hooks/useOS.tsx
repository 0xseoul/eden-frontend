import React, { useEffect } from "react";

const useOS = () => {
  const [currentOS, setCurrentOS] = React.useState<string | null>(null);
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  useEffect(() => {
    setCurrentOS(navigator.platform);
    // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(navigator.userAgent.includes("Mobile"));
  }, [navigator]);

  return { currentOS, isMobile };
};

export default useOS;
