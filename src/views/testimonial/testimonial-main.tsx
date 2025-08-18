"use client";
import React, { useLayoutEffect, useRef } from "react";
import Container from "@/components/container";
import { TESTIMONIALS } from "@/constant/data";
import Image from "next/image";
// import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const TestimonialMain = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      const items = gsap.utils.toArray<HTMLDivElement>(".testimonial-item");
      if (!items) return;
      items.forEach((item) => {
        const bg = item.querySelector(".content-bg");
        // gsap.set(item, { scale: 0.8 });
        const tl: GSAPTimeline = gsap.timeline();
        tl.to(bg, {
          scaleX: 0,
          duration: 1,
        });
        tl.from(item, {
          scale: 0.8,
          duration: 0.5,
        });
      });
    }, 2400);
    return () => clearTimeout(timeout);
  });
  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      const items = gsap.utils.toArray<HTMLDivElement>(".testimonial-item");
      if (!items) return;
      // let counter = 1;

      items.forEach((item, index) => {
        // const tl = gsap.timeline({});

        // // Appear animation
        // gsap.from(item, {
        //   y: 50,
        //   duration: 1,
        //   ease: "power2.out",
        //   scrollTrigger: {
        //     trigger: item,
        //     start: "top 75%", // when 25% of item is visible
        //     end: "top 60%", // start pin after entry
        //     scroller: "[data-scroll-container]",
        //   },
        // });
        gsap.to(item, {
          opacity: index === items.length - 1 ? 1 : 0,
          scale: 0.9,
          transformOrigin: "center center",
          scrollTrigger: {
            trigger: item,
            start: "top 15%",
            scroller: "[data-scroll-container]", // 👈 IMPORTANT
            end: index === items.length - 1 ? "bottom 2%" : "bottom 2%",
            pin: true,
            pinSpacing: false,
            scrub: true,
            // markers: true,
            // onEnter: () => {
            //   counter++;
            //   if (index !== items.length - 1) {
            //     ScrollTrigger.refresh();
            //   }
            //   console.log("Entered:", counter);
            // },
          },
        });
      });
    }, 500);
    return () => clearTimeout(timeout);
  });

  return (
    <div ref={mainRef} className="py-10">
      <Container>
        <div className="relative grid grid-cols-1 gap-10">
          {TESTIMONIALS.map((item) => (
            <div key={item.name} className="relative  overflow-hidden">
              <div
                className={`testimonial-item py-7  px-10 rounded-4xl flex flex-col lg:flex-row items-center gap-16 ${
                  item.reverse ? "lg:flex-row-reverse" : ""
                }`}
                style={{
                  background: item.reverse
                    ? "linear-gradient(to right, #CFAE91, #031A37)"
                    : "linear-gradient(to left, #CFAE91, #031A37)",
                }}
              >
                <div className="absolute origin-right z-10 rounded-4xl inset-0 h-full w-full bg-primary content-bg"></div>
                <div className="text-white grow">
                  <div className="lg:block flex flex-row justify-between items-center">
                    <div>
                      <div className="flex gap-1 mb-3 flex-row">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Image
                              key={i}
                              src={"/star.svg"}
                              alt="stars"
                              width={100}
                              height={100}
                              className="lg:w-[30px] w-[20px] h-[20px] lg:h-[30px]"
                            />
                          ))}
                      </div>
                      <h2 className="text-2xl lg:text-3xl mb-4">{item.name}</h2>
                    </div>
                    <div className="block lg:hidden w-[50px] shrink-0 h-[50px]">
                      <Image
                        src={item.ImageSrc}
                        width={600}
                        height={600}
                        quality={100}
                        className="w-full h-full object-cover rounded-full"
                        alt={item.name}
                      />
                    </div>
                  </div>
                  <p
                    className="lg:text-lg text-base"
                    dangerouslySetInnerHTML={{ __html: item.para }}
                  />
                </div>
                <div className="hidden lg:block w-[200px] shrink-0 h-[200px]">
                  <Image
                    src={item.ImageSrc}
                    width={600}
                    height={600}
                    quality={100}
                    className="w-full h-full object-cover rounded-full"
                    alt={item.name}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TestimonialMain;
