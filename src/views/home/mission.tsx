"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Container from "@/components/container";
import parse from "html-react-parser";
import HeadingTwo from "@/components/heading-two";
import { WELCOME_TO } from "@/constant/data";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);
const Mission = () => {
  const animatedRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: animatedRef.current,
        scroller: "[data-scroll-container]", // required for LocomotiveScroll
        markers: true,
        start: "top 90%",
        end: "top 40%",
      },
    });
    const splitUpperMenu = new SplitType("#upper-para", {
      types: "words,chars",
    });
    const splitHeadingTwo = new SplitType("#heading-two-span", {
      types: "words,chars",
    });
    tl.to("#span-id", {
      scaleY: 1,
      zIndex: 0,
    });
    tl.to("#para-id", {
      color: "white",
      zIndex: 1,
    });
    tl.from(splitUpperMenu.words, {
      opacity: 0,
      y: 10,
      stagger: 0.2,
    });
    tl.to(splitHeadingTwo.chars, {
      color: "#987F51",
      stagger: 0.1,
    });
  });
  return (
    <div className="py-10" ref={animatedRef}>
      <Container>
        <div className="flex flex-col gap-3">
          <p className="text-center text-white relative" id="upper-para">
            <span className="px-2 inline-block">
              <span id="para-id">{parse(WELCOME_TO.upperPara)}</span>
              <span
                id="span-id"
                className="absolute inset-0 origin-top w-full h-full scale-y-0 bg-primary"
              ></span>
            </span>
          </p>
          <HeadingTwo className="text-center">
            {parse(WELCOME_TO.heading)}
          </HeadingTwo>
        </div>
        {WELCOME_TO.data.map((item) => (
          <div className="flex flex-row gap-5" key={item.headingTwo}>
            <div>
              <h3 className="text-4xl">
                <span
                  className="inline-block text-outline"
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="-1"
                >
                  {parse(item.heading)}
                </span>{" "}
                <br />
                <span>{parse(item.headingTwo)}</span>
              </h3>
              <p>{parse(item.para)}</p>
            </div>
            <div>
              <Image src={item.image} alt="image" width={100} height={100} />
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Mission;
