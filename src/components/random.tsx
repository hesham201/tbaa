"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Random = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: animatedRef.current,
          scroller: "[data-scroll-container]", // required for LocomotiveScroll
          // markers: true,
          start: "top 90%",
          end: "top 40%",
          toggleActions: "play none none reset",
        },
      });

      tl.to(animatedRef.current, { height: "2px" })
        .to(animatedRef.current, { width: "100%" })
        .to(animatedRef.current, { height: "100%" });
    }, 300); // Delay for LocomotiveScroll to initialize

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-[80%] h-[80%] m-auto" ref={containerRef}>
      <div ref={animatedRef} className="w-0 h-0 relative">
        <Image
          src="/p1.jpg"
          data-scroll
          data-scroll-speed="5"
          alt="image"
          width={400}
          height={400}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Random;
