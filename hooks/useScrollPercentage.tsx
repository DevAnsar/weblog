import { useRef, useState, useEffect, RefObject } from "react";

export default function useScrollPercentage(): [
  RefObject<HTMLDivElement>,
  number
] {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPercentage, setScrollPercentage] = useState(NaN);

  const reportScroll = (node: HTMLDivElement) => {
    const per = getScrollPercentage(node);
    // console.log("per:",per)
    setScrollPercentage(per);
  };

  useEffect(() => {
    const node = scrollRef.current;
    if (node !== null) {
      document.addEventListener("scroll", () => reportScroll(node), {
        passive: true,
      });
      if (Number.isNaN(scrollPercentage)) {
        setScrollPercentage(getScrollPercentage(node));
      }
    }
    return () => {
      if (node !== null) {
        document.removeEventListener("scroll", () => reportScroll(node));
      }
    };
  }, []);

  return [scrollRef, Number.isNaN(scrollPercentage) ? 0 : scrollPercentage];
}

function getScrollPercentage(node: HTMLElement): number {
  // console.log("scrolling...");
  if (node === null) {
    return NaN;
  }
  let per: number = Math.round(
    ((document.documentElement.scrollTop - node.offsetTop) /
      node.clientHeight) *
      100
  );
  if (per < 0) per = 0;
  if (per > 100) per = 100;
  return per;
}
