"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useLenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      gestureOrientation: "vertical",
      wheelMultiplier: 1, // optional
      touchMultiplier: 1.5, // optional
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return value !== undefined
          ? lenis.scrollTo(value)
          : lenis.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.defaults({ scroller: document.body });
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};

export default useLenisScroll;
