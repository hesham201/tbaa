"use client";
import Container from "@/components/container";
// import { useGSAP } from "@gsap/react";
import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { useRef } from "react";
import Image from "next/image";
import { IBanner } from "@/types";
const Banner = ({ data }: { data: IBanner }) => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    setTimeout(() => {
      const split = new SplitType("#home-h1", { types: "words,chars" });
      // const splitPara = new SplitType("#video-para", { types: "words,chars" });
      const tl: GSAPTimeline = gsap.timeline();
      tl.to(".video-main-div", {
        scaleX: 1,
        height: "10px",
        transformOrigin: "top",
        ease: "power2.out",
        duration: 0.8,
      });

      tl.to(".video-main-div", {
        height: "450px", // ← use an exact value
        ease: "power2.out",
        duration: 1,
      });
      tl.to(".video-bg", {
        opacity: 0,
      });
      tl.from(
        ".video-div-main",
        {
          opacity: 1,
          scale: 1.2,
        },
        ">"
      );
      // tl.from(splitPara.words, {
      //   opacity: 0,
      //   y: 10,
      // });
      tl.to(
        ".upper",
        {
          scaleY: 1,
          transformOrigin: "bottom",
          duration: 1,
          ease: "power2.out",
        },
        ">-2"
      );
      tl.from(split.words, {
        y: 20,
        opacity: 0,
        stagger: 0.2,
      });
    }, 300);
    // tl.to(".text-bg", {
    //   scaleY: 1,
    //   transformOrigin: "bottom",
    // });
  }, []);
  return (
    <div ref={headerRef}>
      <div className=" upper w-full bg-midnight origin-bottom scale-y-0 ">
        <Container>
          <div className="py-16 lg:w-[45%] ">
            <h1 className="text-primary mb-3 text-6xl" id="home-h1">
              {data.heading}
            </h1>
          </div>
        </Container>
      </div>
      <div className="-mt-[60px] lg:-mt-[140px] relative z-10">
        <div className="hidden lg:block absolute bottom-20 left-10 w-full h-[140px] opacity-20 z-20">
          <Image
            src={"/baad-logo.webp"}
            className="w-[40%] h-full object-contain"
            width={1000}
            height={1000}
            quality={100}
            alt="logo"
          />
        </div>
        <Container>
          <div className="flex h-[300px] lg:h-[380px] overflow-hidden">
            <div className="video-main-div relative scale-x-0 h-0 overflow-hidden origin-top ms-auto max-w-full lg:max-w-[52%] transition-all ">
              <div className="absolute z-10 inset-0 h-full w-full bg-primary video-bg"></div>
              <div className="video-div-main relative">
                <Image
                  src={data.image}
                  width={800}
                  height={800}
                  alt="image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
