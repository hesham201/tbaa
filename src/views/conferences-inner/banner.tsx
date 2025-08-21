"use client";
import Container from "@/components/container";
import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { useRef } from "react";
import { IBanner } from "@/types";

const Banner = ({ data }: { data: IBanner }) => {
  const headerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const split = new SplitType("#home-h1", { types: "words,chars" });
    const splitPara = new SplitType("#video-para", { types: "words,chars" });
    const tl: GSAPTimeline = gsap.timeline();
    gsap.fromTo(
      ".video-div-main img",
      { y: "20%", scale: 1.1 }, // Adjust x based on index for staggered effect
      {
        y: "-20%",
        scale: 1,

        ease: "none",
        scrollTrigger: {
          trigger: ".video-div-main",
          start: "top bottom",
          end: "bottom top",
          // onEnter: () => console.log("▶️ Entered trigger area"),
          // onLeaveBack: () => console.log("↩️ Left going back"),
          // markers: true,
          scrub: true,
        },
      }
    );
    gsap.to(".logo-faded", {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 0.5,
    });
    tl.to(".video-main-div", {
      scaleX: 1,
      height: "10px",
      transformOrigin: "top",
      ease: "power2.out",
      duration: 0.8,
    });

    tl.to(".video-main-div", {
      height: "600px", // ← use an exact value
      ease: "power2.out",
      duration: 1,
    });
    tl.to(".video-bg", { opacity: 0 });
    tl.from(".video-div-main", { opacity: 1, scale: 1.2 }, ">");
    tl.from(splitPara.words, { opacity: 0, y: 10 });
    tl.to(
      ".upper",
      { scaleY: 1, transformOrigin: "bottom", duration: 1, ease: "power2.out" },
      ">-2"
    );
    tl.from(split.words, { y: 20, opacity: 0, stagger: 0.2 });
  }, []);

  return (
    <div
      ref={headerRef}
      className="relative bg-[linear-gradient(to_bottom,#031A37_0%,#031A37_60%,transparent_60%,transparent_100%)] py-10 pt-[150px]"
    >
      <Container>
        <div className="relative flex flex-col lg:flex-row gap-7">
          <div className="flex flex-col gap-10">
            <h1
              className="text-primary mb-3 text-[40px] lg:text-[50px]"
              id="home-h1"
            >
              {data.heading}
            </h1>
          </div>

          <div className="min-h-[200px] md:h:[460px] lg:h-[600px] w-full lg:w-[45%] shrink-0 overflow-hidden">
            <div className="video-main-div relative scale-x-0 h-0 overflow-hidden origin-top transition-all">
              <div className="absolute z-10 inset-0 h-full w-full bg-primary video-bg"></div>
              <div className="video-div-main relative">
                <img
                  src={data.image}
                  alt="welcome video"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="hidden lg:block absolute bottom-20 left-10 w-full h-[140px] opacity-20 z-20">
            <img
              src={"/baad-logo.webp"}
              className="w-[40%] h-full object-contain logo-faded"
              style={{ clipPath: "inset(0% 0% 0% 100%)" }}
              alt="logo"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
