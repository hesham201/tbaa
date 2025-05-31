"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import "locomotive-scroll/dist/locomotive-scroll.min.css";

const LocomotiveProvider = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scrollInstance: any; // eslint-disable-line

    gsap.registerPlugin(ScrollTrigger);

    const initLocoScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      if (!scrollRef.current) return;

      scrollInstance = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });
      scrollInstance.on("scroll", ScrollTrigger.update);
      // Set up ScrollTrigger proxy
      ScrollTrigger.scrollerProxy(scrollRef.current, {
        scrollTop(value) {
          return arguments.length
            ? scrollInstance.scrollTo(value, 0, 0)
            : scrollInstance.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: scrollRef.current.style.transform ? "transform" : "fixed",
      });

      // Update ScrollTrigger on locomotive scroll
      scrollInstance.on("scroll", ScrollTrigger.update);

      ScrollTrigger.addEventListener("refresh", () => scrollInstance.update());

      // This is key to syncing on load
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    };

    initLocoScroll();

    return () => {
      scrollInstance?.destroy();
      ScrollTrigger.removeEventListener("refresh", () =>
        scrollInstance?.update()
      );
    };
  }, []);

  return (
    <main ref={scrollRef} data-scroll-container className="">
      {children}
    </main>
  );
};

export default LocomotiveProvider;
