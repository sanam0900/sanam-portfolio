import { useEffect, useState } from "react";
import "./styles/ScrollProgress.css";

const ScrollProgress = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const smoothContent = document.getElementById("smooth-content");
    const smoothWrapper = document.getElementById("smooth-wrapper");

    const getTarget = () => smoothContent || document.documentElement;
    const getScroller = () => smoothWrapper || window;

    const onScroll = () => {
      const target = getTarget();
      const totalHeight = target.scrollHeight - window.innerHeight;
      const scrollTop =
        smoothWrapper ? smoothWrapper.scrollTop : window.scrollY;
      const pct = totalHeight > 0 ? (scrollTop / totalHeight) * 100 : 0;
      setWidth(Math.min(pct, 100));
    };

    const scroller = getScroller();
    scroller.addEventListener("scroll", onScroll);
    return () => scroller.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="scroll-progress" style={{ width: `${width}%` }} />;
};

export default ScrollProgress;
