"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Button from "@/components/button";
import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const SuperHero = () => {
  const bgWrapperRef = useRef<HTMLDivElement>(null);
  const bgWrapperRef2 = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);
  const bgImageRef2 = useRef<HTMLImageElement>(null);
  useGSAP(() => {
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
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
    // gsap.fromTo(
    //   bgImageRef2.current,
    //   {
    //     y: "-10%", // Start position (slightly above)
    //     scale: 1.2,
    //   },
    //   {
    //     y: "10%", // End position (slightly below)
    //     scale: 1,
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: bgWrapperRef2.current,
    //       start: "top bottom",
    //       end: "bottom top",
    //       scrub: true,
    //     },
    //   }
    // );
    gsap.from("#our-events-heading", {
      y: 50,
      opacity: 1,
      duration: 0.3,
      scrollTrigger: {
        trigger: "#our-events-heading",
        start: "top 76%",
        end: "bottom top",
      },
    });
    gsap.from("#buttons-events ", {
      y: 10,
      opacity: 1,
      duration: 0.5,
      scrollTrigger: {
        trigger: "#buttons-events",
        start: "top 80%",
        end: "bottom top",
      },
    });
  });
  useLayoutEffect(() => {
    if (!bgWrapperRef.current || !bgImageRef.current) return;
    const timeout = setTimeout(() => {}, 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div ref={bgWrapperRef} className="py-5 lg:py-10 relative overflow-hidden">
      <img
        ref={bgImageRef}
        src="/our-events.png"
        width={1920}
        height={1080}
        alt="Our Events"
        className="absolute top-0 left-0 w-full h-full object-cover will-change-transform pointer-events-none"
      />
      <div className="relative z-10">
        <Container>
          <div
            className="flex flex-col lg:flex-row grow gap-12 items-center lg:min-h-[70vh]"
            ref={bgWrapperRef2}
          >
            <div
              className="flex flex-col justify-center gap-6 text-white"
              id="our-events-heading"
            >
              <h3>2026</h3>
              <HeadingTwo className="mb-3">
                Who’s BAAD: The Thrill Of The Drill
              </HeadingTwo>
              <p className="text-lg">
                Venue: The Hilton Syon Park, Park Road, Islesworth, TW8 8JF{" "}
                <br />
                Date: Friday 30th & Saturday 31st January 2026
              </p>
              <div
                className="flex flex-wrap items-center flex-row gap-3 justify-center lg:justify-start"
                id="buttons-events"
              >
                <Button href="/2026-sc">Learn More</Button>
                <Button href="/BAAD-2025-Conference-Flyer-2.pdf">
                  Download the BAAD Programme
                </Button>
              </div>
            </div>
            <div className="relative w-full hidden lg:block lg:w-[35%] overflow-hidden rounded-2xl shrink-0 h-[600px]">
              <img
                ref={bgImageRef2}
                src="/baad-super-hero.png"
                className="absolute top-0 left-0 w-full h-full object-cover will-change-transform pointer-events-none"
                alt=""
                style={{ visibility: "hidden" }}
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SuperHero;
