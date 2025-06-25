"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import "locomotive-scroll/dist/locomotive-scroll.min.css";
import Footer from "@/layout/footer";
import Header from "@/layout/header";
import { usePathname } from "next/navigation";

const LocomotiveProvider = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useLayoutEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let loco: any;
    let onRefresh: () => void;

    gsap.registerPlugin(ScrollTrigger);

    async function initLoco() {
      const { default: LocomotiveScroll } = await import("locomotive-scroll");
      const el = scrollRef.current;
      if (!el) return;

      loco = new LocomotiveScroll({ el, smooth: true });
      // wire up ScrollTrigger
      ScrollTrigger.scrollerProxy(el, {
        scrollTop(v) {
          return arguments.length
            ? loco.scrollTo(v, { duration: 0, disableLerp: true })
            : loco.scroll.instance.scroll.y;
        },
        getBoundingClientRect: () => ({
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }),
        pinType: el.style.transform ? "transform" : "fixed",
      });

      // default scroller so you never forget
      ScrollTrigger.defaults({ scroller: el });

      // keep Loco in sync
      onRefresh = () => loco.update();
      ScrollTrigger.addEventListener("refresh", onRefresh);

      // pin header & modal
      ScrollTrigger.create({
        trigger: "#pinned-header",
        start: "top top",
        end: "+=99999",
        pin: true,
        pinSpacing: false,
      });
      ScrollTrigger.create({
        trigger: "#pinned-modal",
        start: "top top",
        end: "+=99999",
        pin: true,
        pinSpacing: false,
      });

      loco.on("scroll", ScrollTrigger.update);

      await loco.update();
      ScrollTrigger.refresh();
    }

    initLoco();

    return () => {
      if (onRefresh) ScrollTrigger.removeEventListener("refresh", onRefresh);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      if (loco) loco.destroy();
    };
  }, [pathname]);

  return (
    <div ref={scrollRef} id="main-scroll-con" data-scroll-container>
      <div id="pinned-header" className="z-[10000] w-full bg-white shadow-2xl">
        <Header />
      </div>
      <main>{children}</main>
      <Footer />
      <div id="pinned-modal" className="z-[1] fixed top-0 left-0" />
    </div>
  );
};

export default LocomotiveProvider;
