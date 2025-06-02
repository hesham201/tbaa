"use client";
import Container from "@/components/container";
import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { useRef } from "react";
const Banner = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    const split = new SplitType("#home-h1", { types: "words,chars" });
    const splitPara = new SplitType("#video-para", { types: "words,chars" });
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
    tl.from(splitPara.words, {
      opacity: 0,
      y: 10,
    });
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
    tl.to(".text-bg", {
      scaleY: 1,
      transformOrigin: "bottom",
    });
  }, []);
  return (
    <div ref={headerRef}>
      <div className=" upper w-full bg-dark origin-bottom scale-y-0 ">
        <Container>
          <div className="py-16 w-[45%] ">
            <h1 className="text-primary mb-3 text-6xl" id="home-h1">
              The{" "}
              <span className="relative inline-block text-should-change transition-all">
                <span className="relative z-1">British</span>{" "}
                <span className="bg-white absolute left-0 bottom-0 w-full h-full text-bg scale-y-0 origin-bottom"></span>
              </span>{" "}
              Academy of Aesthetic Dentistry
            </h1>
            <p className="text-xl text-white  video-para" id="video-para">
              Championing excellence in aesthetic dentistry to promote the
              highest standard of clinical care, education and innovation by
              bringing together the industry’s brightest minds.
            </p>
          </div>
        </Container>
      </div>
      <div className="-mt-[280px] relative z-10">
        <Container>
          <div className="h-[300px] lg:h-[450px]">
            <div className="video-main-div relative scale-x-0 h-0 overflow-hidden origin-top ms-auto max-w-[52%] transition-all ">
              <div className="absolute z-10 inset-0 h-full w-full bg-primary video-bg"></div>
              <div className="video-div-main relative">
                <video
                  src="/videos/header.mp4"
                  className="w-full h-full"
                  loop
                  autoPlay
                  muted
                ></video>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
