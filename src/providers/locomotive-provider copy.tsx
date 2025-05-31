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
        multiplier: 1, // Optional: adjust scroll speed
        class: "is-reveal", // Optional: custom class
      });

      // Sync GSAP with Locomotive
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

      scrollInstance.on("scroll", ScrollTrigger.update);

      // Ensure updates when ScrollTrigger refreshes
      ScrollTrigger.addEventListener("refresh", () => {
        scrollInstance.update();
      });

      // ⚠️ Wait for images/content to load before refreshing
      window.addEventListener("load", () => {
        setTimeout(() => {
          scrollInstance.update();
          ScrollTrigger.refresh();
        }, 300); // delay ensures all content is painted
      });

      // Manual fallback (extra safeguard)
      setTimeout(() => {
        scrollInstance.update();
        ScrollTrigger.refresh();
      }, 1000);
    };

    initLocoScroll();

    return () => {
      if (scrollInstance) scrollInstance.destroy();
      ScrollTrigger.removeEventListener("refresh", () =>
        scrollInstance?.update()
      );
    };
  }, []);

  return (
    <main ref={scrollRef} data-scroll-container>
      {children}
    </main>
  );
};

export default LocomotiveProvider;
