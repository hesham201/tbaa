"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Container from "@/components/container";
import Image from "next/image";
import React from "react";
gsap.registerPlugin(ScrollTrigger);
const Content = () => {
  const bgWrapperRef = useRef<HTMLDivElement>(null);
  // const bgWrapperRef2 = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);
  // const bgImageRef2 = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      if (!bgWrapperRef.current || !bgImageRef.current) return;
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
      //       scroller: "[data-scroll-container]", // Remove if not using Locomotive Scroll
      //       start: "top bottom",
      //       end: "bottom top",
      //       scrub: true,
      //     },
      //   }
      // );
    }, 300);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="">
      <div className="py-10">
        <Container>
          <div className="flex flex-col text-center gap-4 text-lg">
            <p>To Qualify for associate membership, an applicant must have:</p>
            <p>
              1) Attended two scientific meetings and paid the required dues
            </p>
            <p>
              2) To supply a photograph, CV and nomination from two charter/
              full or life members in good standing who know the nominee well,
              both personally and professionally. This must be supplied in
              advance of the next annual scientific conference.
            </p>
            <p>
              3) Receive a three-fourths affirmative vote, by secret ballot, of
              the Executive Council and threefourths affirmative vote of the
              charter/full and life members present and voting at the Annual
              General Assembly
            </p>
          </div>
        </Container>
      </div>
      <div
        ref={bgWrapperRef}
        className="relative overflow-hidden w-full h-[60vh]"
      >
        <Image
          ref={bgImageRef}
          src={"/couple.webp"}
          width={800}
          height={800}
          alt="image"
          className="absolute top-0 left-0 w-full h-full object-cover will-change-transform pointer-events-none"
        />
      </div>
    </div>
  );
};

export default Content;
