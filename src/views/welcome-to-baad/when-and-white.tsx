"use client";
import Button from "@/components/button";
import Container from "@/components/container";
import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const WhenAndWhite = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const el = imageRef.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { yPercent: -20 }, // smoother than raw pixels
      {
        yPercent: 0,
        ease: "none", // with scrub, keep it linear
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      el.querySelector("img"),
      { y: "-20%" }, // Adjust x based on index for staggered effect
      {
        y: "20%",
        ease: "none", // with scrub, keep it linear
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
  });
  return (
    <div className="py-5 mt-28 bg-primary text-white">
      <Container>
        <div className="flex flex-row justify-between gap-9">
          <div>
            <h2 className="text-[50px] text-midnight mb-3">When And Where</h2>
            <div className="w-fit bg-white text-black p-2 mb-4">
              <p id="inner-text">FRIDAY 30TH & SATURDAY 31ST JANUARY 2026</p>
            </div>
            <p className="text-[22px] text-black mb-3">
              THE HILTON LONDON SYON PARK <br />
              PARK ROAD <br />
              ISLEWORTH <br />
              TW8 8JF
            </p>
            <div>
              <Button href="/book-nows">Book Now</Button>
            </div>
          </div>
          <div
            ref={imageRef}
            className="h-[350px] w-[45%] shrink-0 overflow-hidden rounded-lg">
            <img src="/when-and-white.jpg" alt="image" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhenAndWhite;
