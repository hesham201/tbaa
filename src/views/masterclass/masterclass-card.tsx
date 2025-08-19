"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MASTER_CLASSES } from "@/constant/data";
import Container from "@/components/container";
import Link from "next/link";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function MasterClasses() {
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  useGSAP(() => {
    containerRefs.current.forEach((container) => {
      if (!container) return;

      gsap.from(container, {
        yPercent: 10,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: container,
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
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  });

  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-10">
          {MASTER_CLASSES.map((item, i) => (
            <div
              key={i}
              ref={(el) => {
                containerRefs.current[i] = el;
              }}
              className="relative h-[400px] overflow-hidden rounded-xl"
              data-scroll
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
          ))}
        </div>
      </Container>
    </div>
  );
}
