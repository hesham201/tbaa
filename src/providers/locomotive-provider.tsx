"use client";
import { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.min.css";

const LocomotiveProvider = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scroll: any; // eslint-disable-line

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      if (scrollRef.current) {
        scroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
        });
      }
    })();

    return () => {
      scroll?.destroy(); // clean up on unmount
    };
  }, []);
  return (
    <main ref={scrollRef} data-scroll-container>
      {children}
    </main>
  );
};

export default LocomotiveProvider;
