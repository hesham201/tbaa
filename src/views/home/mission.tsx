"use client";

import React, { useRef, useLayoutEffect } from "react";
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
// import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);
const Mission = () => {
  const animatedRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]); // NEW for images
  useLayoutEffect(() => {
    // let ctx = gsap.context(() => {}, animatedRef);
    const timeout = setTimeout(() => {
      // const tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: animatedRef.current,
      //     scroller: "[data-scroll-container]", // required for LocomotiveScroll
      //     start: "top 90%",
      //     end: "top 40%",
      //   },
      // });
      // const splitUpperMenu = new SplitType("#upper-para", {
      //   types: "words,chars",
      // });
      // const splitHeadingTwo = new SplitType("#heading-two-span", {
      //   types: "words,chars",
      // });
      // tl.to("#span-id", {
      //   scaleY: 1,
      //   zIndex: 0,
      // });
      // tl.to("#para-id", {
      //   color: "white",
      //   zIndex: 1,
      // });
      // tl.from(splitUpperMenu.words, {
      //   opacity: 0,
      //   y: 10,
      //   stagger: 0.2,
      // });
      // tl.to(splitHeadingTwo.chars, {
      //   color: "#987F51",
      //   stagger: 0.1,
      // });
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
            scroller: "[data-scroll-container]",
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
              scroller: "[data-scroll-container]",
              scrub: 2,
              start: "top 80%",
              end: "top 0%",
            },
          }
        );
      });
      imageRefs.current.forEach((imgWrapper) => {
        if (!imgWrapper) return;

        const img = imgWrapper.querySelector("img");
        if (!img) return;

        gsap.fromTo(
          img,
          { y: "-20%", scale: 1.1 },
          {
            y: "20%",
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: imgWrapper,
              scroller: "[data-scroll-container]", // or remove if you're not using locomotive-scroll
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
    }, 300);
    // imageRefs.current.forEach((imgWrapper) => {
    //   if (!imgWrapper) return;

    //   const image = imgWrapper.querySelector("img");
    //   console.log(image);
    //   if (!image) return;
    //   gsap.set(image, {
    //     objectPosition: "center 60%",
    //   });

    //   gsap.to(image, {
    //     objectPosition: "center 30%", // animate upward
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: imgWrapper,
    //       scroller: "[data-scroll-container]",
    //       start: "top bottom",
    //       end: "bottom top",
    //       scrub: true,
    //     },
    //   });

    //   // Optional: Hover Movement
    //   const handleMouseMove = (e: MouseEvent) => {
    //     const rect = imgWrapper.getBoundingClientRect();
    //     const x = e.clientX - rect.left;
    //     const y = e.clientY - rect.top;
    //     const moveX = ((x - rect.width / 2) / rect.width) * 10;
    //     const moveY = ((y - rect.height / 2) / rect.height) * 10;

    //     gsap.to(image, {
    //       x: moveX,
    //       y: moveY,
    //       duration: 0.3,
    //       ease: "power2.out",
    //     });
    //   };

    //   const handleMouseEnter = () => {
    //     gsap.to(image, {
    //       scale: 1.02,
    //       duration: 0.5,
    //       ease: "power2.out",
    //     });
    //   };

    //   const handleMouseLeave = () => {
    //     gsap.to(image, {
    //       scale: 1,
    //       x: 0,
    //       y: 0,
    //       duration: 0.5,
    //       ease: "power2.out",
    //     });
    //   };

    //   imgWrapper.addEventListener("mousemove", handleMouseMove);
    //   imgWrapper.addEventListener("mouseenter", handleMouseEnter);
    //   imgWrapper.addEventListener("mouseleave", handleMouseLeave);

    //   // Cleanup
    //   return () => {
    //     imgWrapper.removeEventListener("mousemove", handleMouseMove);
    //     imgWrapper.removeEventListener("mouseenter", handleMouseEnter);
    //     imgWrapper.removeEventListener("mouseleave", handleMouseLeave);
    //   };
    // });
    // const onLoad = () => {
    //   ScrollTrigger.refresh(); // ensures all positions are recalculated
    // };

    // window.addEventListener("load", onLoad);

    // // Force refresh even if load missed
    // setTimeout(() => ScrollTrigger.refresh(), 1000);
    // return () => {
    //   window.removeEventListener("load", onLoad);
    // };
    return () => clearTimeout(timeout);
  });
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
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed={item.reverse ? "-1.7" : "1.7"}
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
