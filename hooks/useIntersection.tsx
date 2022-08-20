import { useEffect, useState } from "react";

const useIntersection = (target: any, threshold?: number) => {
  const _threshold = threshold || 0.61;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const onIntersect = async (
    [entry]: IntersectionObserverEntry[],
    observer: any
  ) => {
    if (!isIntersecting && entry.isIntersecting) {
      observer.unobserve(entry.target);
      // console.log("intersecting");
      // if (stopCondition) return;
      setIsIntersecting(true);
      // await getNextItems();
      observer.observe(entry.target);
    }
    if (!entry.isIntersecting) {
      setIsIntersecting(false);
      // console.log("not intersecting");
    }
  };

  useEffect(() => {
    let observer: any;
    if (target) {
      // console.log(target);
      observer = new IntersectionObserver(onIntersect, {
        threshold: _threshold,
      });
      // console.log(observer);
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target, isIntersecting]);
  return { isIntersecting };
};

export default useIntersection;
