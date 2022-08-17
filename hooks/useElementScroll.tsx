import React, { useRef } from "react";
import { throttle } from "lodash";

const useElementScroll = () => {
  const [scrollTop, setScrollTop] = React.useState<number>(0);
  const [isScroll, setIsScroll] = React.useState<boolean>(false);

  const throttled = useRef(
    throttle((newValue: number, _scrollTop: number) => {
      setScrollTop(newValue);
      // TODO: 이거 저장 현재 퍼센트 매우매우 중요
      // const scrollPercent = newValue / (totalUrls.length * 50);
      const diff = newValue - _scrollTop; //음수면 위로 양수면 아래로
      diff > 0 ? setIsScroll(true) : setIsScroll(false);
    }, 200)
  );

  const onScroll = (e: any) => {
    throttled.current(e.target.scrollTop, scrollTop);
  };
  return { onScroll, isScroll, scrollTop };
};

export default useElementScroll;
