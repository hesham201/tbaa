"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Container from "@/components/container";

gsap.registerPlugin(ScrollTrigger);

const Content = () => {
  const bgWrapperRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    if (!bgWrapperRef.current || !bgImageRef.current) return;
    const timeout = setTimeout(() => {
      gsap.fromTo(
        bgImageRef.current,
        {
          y: "-10%", // Start position (slightly above)
          scale: 1.2,
        },
        {
          y: "10%", // End position (slightly below)
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: bgWrapperRef.current,
            scroller: "[data-scroll-container]", // Remove if not using Locomotive Scroll
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
      gsap.from("#our-events-heading", {
        y: 50,
        opacity: 1,
        duration: 0.3,
        scrollTrigger: {
          trigger: "#our-events-heading",
          scroller: "[data-scroll-container]", // Remove if not using Locomotive Scroll
          start: "top 76%",
          end: "bottom top",
        },
      });
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      ref={bgWrapperRef}
      className="py-5 mt-5 lg:py-10 relative overflow-hidden"
    >
      <img
        ref={bgImageRef}
        src="/exective-text-BG.webp"
        width={1920}
        height={1080}
        alt="Our Events"
        className="absolute top-0 left-0 w-full h-full object-cover will-change-transform pointer-events-none"
      />
      <div className="relative z-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[50vh]">
            <div
              className="flex flex-col justify-center gap-6 text-white"
              id="our-events-heading"
            >
              <p className="text-lg">
                The British Academy of Aeshetic Dentistry is the leading
                authority of aesthetic dentistry in the UK and Europe. Our
                members include world-class dentists, technicians, therapists
                and specialists on our panel who stand at the pinnacle of their
                respective fields and share a commitment to dental excellence.
                BAAD dentists are pioneers in finding innovative ways to
                progress in the dental field.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Content;
