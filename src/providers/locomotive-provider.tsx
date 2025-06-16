"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import "locomotive-scroll/dist/locomotive-scroll.min.css";
import Footer from "@/layout/footer";
import Header from "@/layout/header";
import { usePathname } from "next/navigation";

const LocomotiveProvider = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    let scrollInstance: any; // eslint-disable-line

    gsap.registerPlugin(ScrollTrigger);

    const initLoco = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const scrollEl = scrollRef.current;
      if (!scrollEl) return;

      scrollInstance = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
      });

      scrollInstance.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(scrollEl, {
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
        pinType: scrollEl.style.transform ? "transform" : "fixed",
      });

      ScrollTrigger.addEventListener("refresh", () => scrollInstance.update());

      window.LOCO_SCROLL = scrollInstance;

      // Initial update
      await scrollInstance.update();
      ScrollTrigger.refresh();

      // Additional update after content load
      window.addEventListener("load", () => {
        scrollInstance.update();
        ScrollTrigger.refresh();
      });
      scrollInstance.stop();
      setTimeout(() => {
        scrollInstance.start(); // resume scroll
      }, 1000);
      // Optional slight delay update
      setTimeout(() => {
        scrollInstance.update();
        ScrollTrigger.refresh();
      }, 500);
    };

    setTimeout(() => {
      initLoco();
    }, 200);

    return () => {
      if (scrollInstance) scrollInstance.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.removeEventListener("refresh", () =>
        scrollInstance?.update()
      );
      window.LOCO_SCROLL = undefined;
    };
  }, [pathname]);

  return (
    <div
      ref={scrollRef}
      id="main-scroll-con"
      data-scroll-container
      className="scroll-container"
    >
      <div
        data-scroll
        data-scroll-sticky
        className="sticky top-0 z-100 bg-white shadow-2xl"
        data-scroll-target="#main-scroll-con"
      >
        <Header />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LocomotiveProvider;
