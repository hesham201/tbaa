"use client";

import React, { useRef } from "react";
// import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Container from "@/components/container";
import parse from "html-react-parser";
// import HeadingTwo from "@/components/heading-two";
import { WELCOME_TO } from "@/constant/data";
// import SplitType from "split-type";
import Button from "@/components/button";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
// import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);
const Mission = () => {
  const animatedRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]); // NEW for images
  useGSAP(() => {
    // Animate each item in the map individually
    itemRefs.current.forEach((ref) => {
      if (!ref) return;

      const textOutline = ref.querySelector(".text-outline");
      if (!textOutline) return;
      const dataDiv = ref.querySelector(".data-welcome");
      gsap.from(dataDiv, {
        y: 30,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: dataDiv,
          start: "top 60%",
          end: "top 0%",
        },
      });
      gsap.fromTo(
        ref.querySelector(".text-outline"),
        { x: 60 },
        {
          x: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textOutline,
            scrub: 2,
            start: "top 80%",
            end: "top 0%",
          },
        }
      );
    });
    imageRefs.current.forEach((imgWrapper, index) => {
      if (!imgWrapper) return;

      const img = imgWrapper.querySelector("img");
      if (!img) return;
      gsap.fromTo(
        imgWrapper,
        { x: index % 2 === 0 ? -50 : 50 },
        {
          x: index % 2 === 0 ? 50 : -50,
          scrollTrigger: {
            trigger: imgWrapper,
            start: "top bottom",
            end: "bottom top",
            // onEnter: () => console.log("▶️ Entered trigger area"),
            // onLeaveBack: () => console.log("↩️ Left going back"),
            // markers: true,
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        img,
        { y: "-20%", scale: 1.1 }, // Adjust x based on index for staggered effect
        {
          y: "20%",
          scale: 1,

          ease: "none",
          scrollTrigger: {
            trigger: imgWrapper,
            start: "top bottom",
            end: "bottom top",
            // onEnter: () => console.log("▶️ Entered trigger area"),
            // onLeaveBack: () => console.log("↩️ Left going back"),
            // markers: true,
            scrub: true,
          },
        }
      );
    });
  });
  // useLayoutEffect(() => {
  //   // let ctx = gsap.context(() => {}, animatedRef);
  //   const timeout = setTimeout(() => {}, 300);
  //   return () => clearTimeout(timeout);
  // });
  return (
    <div className="py-10 relative" ref={animatedRef}>
      <div className="absolute opacity-20 left-0 -top-8 w-[50%] h-[200px]">
        <Image
          src={"/baad-logo.webp"}
          className="w-full h-full object-contain"
          width={1000}
          height={1000}
          quality={100}
          alt="logo"
        />
      </div>
      <Container>
        <div className="flex flex-col gap-3 mb-6">
          {/* <p className="text-center text-white relative" id="upper-para">
            <span className="px-2 inline-block">
              <span id="para-id">{parse(WELCOME_TO.upperPara)}</span>
              <span
                id="span-id"
                className="absolute inset-0 origin-top w-full h-full scale-y-0 bg-primary"
              ></span>
            </span>
          </p> */}
          {/* <HeadingTwo className="text-center">
            {parse(WELCOME_TO.heading)}
          </HeadingTwo> */}
        </div>
      </Container>
      <div className="grid grid-cols-1 gap-3">
        {WELCOME_TO.data.map((item, index) => (
          <div
            style={{
              background:
                " linear-gradient(to bottom, white 0%, white 30.33%, rgb(207, 174, 145) 30.33%, rgb(207, 174, 145) 85%,white 85%, white 100%)",
            }}
            ref={(el) => {
              itemRefs.current[index] = el;
            }} // 🔥 Attach ref here
            key={item.headingTwo}
          >
            <Container>
              <div
                className={`flex flex-col lg:flex-row lg:justify-between gap-5 ${
                  item.reverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`py-10 text-midnight lg:py-22 px-4 lg:w-1/2 flex flex-col justify-center data-welcome gap-3 shrink-0 ${
                    item.reverse ? "" : "ps-5 lg:ps-14"
                  }`}
                >
                  <h3 className="text-7xl">
                    <span
                      className="inline-block text-outline"
                      //   data-scroll
                      //   data-scroll-direction="horizontal"
                      //   data-scroll-speed="-1"
                    >
                      {parse(item.heading)}
                    </span>{" "}
                    <br />
                    <span>{parse(item.headingTwo)}</span>
                  </h3>
                  <p>{parse(item.para)}</p>
                  <div className="flex justify-center lg:block">
                    <Button href={item.href}>{item.btn}</Button>
                  </div>
                </div>
                <div
                  ref={(el) => {
                    imageRefs.current[index] = el;
                  }}
                  // data-scroll
                  // data-scroll-direction="horizontal"
                  // data-scroll-speed={item.reverse ? "-1.7" : "1.7"}
                  className="relative lg:w-[35%] rounded-2xl h-[500px] overflow-hidden"
                >
                  <img
                    width={700}
                    height={700}
                    src={item.image}
                    className="absolute top-0 left-0 w-full h-auto min-h-full object-cover will-change-transform"
                    alt="image"
                  />
                </div>
              </div>
              {/* <div
              className="w-[45%] h-[500px] overflow-hidden relative"
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
            >
              <div className="image-inner w-full h-full will-change-transform">
                <img
                  src={item.image}
                  alt="image"
                  className="pointer-events-none"
                  style={{
                    width: "100%",
                    height: "600px", // taller than container (e.g., container is 500px)
                    objectFit: "none",
                    objectPosition: "center 60%",
                    willChange: "object-position",
                  }}
                />
              </div>
            </div> */}
            </Container>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;
