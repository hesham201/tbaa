"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { EXECUTIVE_TEAM } from "@/constant/data";
import Container from "@/components/container";

gsap.registerPlugin(ScrollTrigger);

export default function ExecutiveTeam() {
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      containerRefs.current.forEach((container) => {
        if (!container) return;

        gsap.from(container, {
          yPercent: 30,
          opacity: 0.4,
          duration: 1,
          scrollTrigger: {
            trigger: container,
            scroller: "[data-scroll-container]",
            start: "top bottom",
            end: "bottom top",
          },
        });
        const image = container.querySelector("img");
        if (!image) return;

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
              end: "top 50%",
              scrub: true,
            },
          }
        );
      });
    }, 600);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-10">
          {EXECUTIVE_TEAM.map((item, i) => (
            <div
              key={i}
              ref={(el) => {
                containerRefs.current[i] = el;
              }}
              className="flex flex-col gap-3"
            >
              <div className="relative h-[350px] overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute top-0 origin-center left-0 w-full inset-0 h-full object-cover will-change-transform pointer-events-none"
                />
              </div>
              <div className="">
                <h3 className="text-lg font-bold text-primary">{item.jd}</h3>
                <p className="text-base text-midnight mt-2">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
