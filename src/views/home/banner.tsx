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
      <div className=" upper w-full bg-dark origin-bottom scale-y-0">
        <Container>
          <div className="pt-28 pb-44">
            <h1 className="text-white text-5xl" id="home-h1">
              The{" "}
              <span className="relative inline-block text-should-change transition-all">
                <span className="relative z-1">British</span>{" "}
                <span className="bg-primary absolute left-0 bottom-0 w-full h-full text-bg scale-y-0 origin-bottom"></span>
              </span>{" "}
              Academy of Aesthetic Dentistry
            </h1>
          </div>
        </Container>
      </div>
      <div className="-mt-24 relative">
        <Container>
          <div className="h-[450px]">
            <div className="video-main-div relative scale-x-0 h-0 overflow-hidden origin-top mx-auto max-w-[800px] transition-all ">
              <div className="absolute z-10 inset-0 h-full w-full bg-primary video-bg"></div>
              <div className="video-div-main relative">
                <p
                  className="absolute top-1/2 w-full px-2 text-center text-white -translate-y-1/2 video-para"
                  id="video-para"
                >
                  The British Academy of Aesthetic Dentistry (BAAD) Champions
                  excellence in aesthetic dentistry, bringing together leading
                  clinicians, technicians, and educators to promote the highest
                  standards of clinical care, education, and innovation. Through
                  world-class events, collaborative learning, and a commitment
                  to advancing aesthetic outcomes, BAAD supports professionals
                  dedicated to elevating dental artistry across the UK and
                  beyond.
                </p>
                <video src="/videos/header.mp4" loop autoPlay muted></video>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
