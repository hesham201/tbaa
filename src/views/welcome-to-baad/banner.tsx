"use client";
import Container from "@/components/container";
import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { useRef } from "react";
import Button from "@/components/button";
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
      height: "520px", // ← use an exact value
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
    // tl.to(".text-bg", {
    //   scaleY: 1,
    //   transformOrigin: "bottom",
    // });
  }, []);
  return (
    <div
      ref={headerRef}
      className="bg-[linear-gradient(to_bottom,#031A37_0%,#031A37_50%,transparent_50%,transparent_100%)] py-10 pt-[120px]"
    >
      <Container>
        <div className="flex flex-row gap-7 items-center">
          <div className="min-h-[200px] md:h-[460px] lg:h-[550px]  w-[45%] shrink-0 overflow-hidden">
            <div className="video-main-div relative scale-x-0 h-0 overflow-hidden origin-top  transition-all ">
              <div className="absolute z-10 inset-0 h-full w-full bg-primary video-bg"></div>
              <div className="video-div-main relative">
                <img
                  src="/welcome-banner.jpg"
                  alt="welcome video"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <h1 className="text-primary mb-3 text-[50px]" id="home-h1">
              Welcome to BAAD 2026 – Where Excellence in Aesthetic Dentistry
              Meets Inspiration
            </h1>
            <div className="flex flex-col gap-4">
              <p>
                Join us on 30–31 January 2026 for the British Academy of
                Aesthetic Dentistry’s flagship Annual Scientific Meeting – an
                unmissable two-day event bringing together the world’s leading
                clinicians, cutting-edge techniques, and the spirit of shared
                learning. Set in a stunning venue, this year’s programme, “The
                Thrill of the Drill – Who’s BAAD”, features an exceptional
                line-up of international speakers covering the latest advances
                in restorative, orthodontic, periodontal, surgical, and
                interdisciplinary care. Through thought- provoking lectures,
                lively debates, and engaging discussions, delegates will gain
                practical insights, broaden their clinical perspective, and
                connect with a vibrant community of like-minded professionals.
                From transformative masterclasses to memorable social events –
                including our themed and gala dinners – BAAD 2026 promises
                education, inspiration, and the opportunity to be part of a
                unique ‘dental family’ united by a passion for excellence.
              </p>
              <div className="">
                <Button href="/">Book Now</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
