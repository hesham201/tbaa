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

      // PIN HEADER USING SCROLLTRIGGER
      ScrollTrigger.create({
        trigger: "#pinned-header",
        start: "top top",
        end: "+=99999",
        pin: true,
        pinSpacing: false,
        scroller: scrollEl,
      });
      ScrollTrigger.create({
        trigger: "#pinned-modal",
        start: "top top",
        end: "+=99999",
        pin: true,
        pinSpacing: false,
        scroller: scrollEl,
      });

      window.LOCO_SCROLL = scrollInstance;

      await scrollInstance.update();
      ScrollTrigger.refresh();

      window.addEventListener("load", () => {
        scrollInstance.update();
        ScrollTrigger.refresh();
      });

      // Optional: pause & resume scroll for layout timing
      scrollInstance.stop();
      setTimeout(() => {
        scrollInstance.start();
      }, 2000);

      setTimeout(() => {
        scrollInstance.update();
        ScrollTrigger.refresh();
      }, 500);
    };

    const timeout = setTimeout(() => {
      initLoco();
    }, 100);

    return () => {
      clearTimeout(timeout);
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
      <div id="pinned-header" className="z-[10000] w-full bg-white shadow-2xl">
        <Header />
      </div>
      <main>{children}</main>
      <Footer />
      <div
        id="pinned-modal"
        className="z-[1] fixed top-0 left-0 w-fit h-fit"
      ></div>
    </div>
  );
};

export default LocomotiveProvider;
