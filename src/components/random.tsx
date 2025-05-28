"use client";
import React, { useEffect } from "react";
import Image from "next/image";
// import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Random = () => {
  console.log(document.querySelector("[data-scroll-container]"));
  const galleryRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const tl: GSAPTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".hmm",
          scroller: "[data-scroll-container]", // required for locomotive
          markers: true,
          start: "top 90%",
          end: "top 40%",
        },
      });
      tl.to(".hmm", {
        height: "2px",
      });
      tl.to(".hmm", {
        width: "100%",
      });
      tl.to(".hmm", {
        height: "100%",
      });
    }, 300); // Wait for LocomotiveScroll to initialize

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-[80%] h-[80%] m-auto" ref={galleryRef}>
      <div className="w-0 h-0 relative hmm">
        <Image
          src={"/p1.jpg"}
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
