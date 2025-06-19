"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MASTER_CLASSES } from "@/constant/data";
import Container from "@/components/container";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function MasterClasses() {
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      containerRefs.current.forEach((container) => {
        if (!container) return;

        const image = container.querySelector("img");
        // const first = container.querySelector(".first");
        // const second = container.querySelector(".second");
        if (!image) return;
        // if (first) {
        //   gsap.to(first, {
        //     x: "20px",
        //     scrollTrigger: {
        //       trigger: first,
        //       start: "top bottom",
        //       end: "bottom top",
        //       scrub: true,
        //     },
        //   });
        // }

        // if (second) {
        //   gsap.to(second, {
        //     x: "-20px",
        //     scrollTrigger: {
        //       trigger: second,
        //       start: "top bottom",
        //       end: "bottom top",
        //       scrub: true,
        //     },
        //   });
        // }
        gsap.fromTo(
          image,
          {
            y: "-10%", // Start position (slightly above)
            scale: 1.2,
          },
          {
            y: "10%", // End position (slightly below)
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              scroller: "[data-scroll-container]", // Remove if not using Locomotive Scroll
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    }, 800);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <Container>
        <div className="flex flex-row flex-wrap py-10">
          {MASTER_CLASSES.map((item, i) => (
            <div
              //   data-scroll
              //   data-scroll-direction="horizontal"
              //   data-scroll-speed="-1"
              key={i}
              ref={(el) => {
                containerRefs.current[i] = el;
              }}
              className={`relative w-[50%]  ${
                i % 2 === 0 ? "flex" : "flex justify-end"
              }`}
              // data-scroll
            >
              <div
                className={`relative w-[80%] h-[400px] overflow-hidden rounded-xl mb-5 ${
                  i % 2 === 0 ? "first" : "second"
                }`}
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed={`${i % 2 === 0 ? "-2" : "2"}`}
              >
                <Image
                  src={item.image}
                  alt={item.description}
                  width={1000}
                  height={1000}
                  className="absolute top-0 left-0 w-full h-full object-cover will-change-transform pointer-events-none"
                  priority
                />
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="absolute bottom-6 left-6 right-6 text-white z-20">
                  <h3 className="text-lg font-bold">{item.year}</h3>
                  <p className="text-sm mt-2">{item.description}</p>
                  {item.link && (
                    <div className="mt-2">
                      <Link
                        href={item.link}
                        className="border border-white py-1 px-4"
                      >
                        Download Flyer
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
