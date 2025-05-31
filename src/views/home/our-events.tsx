"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Button from "@/components/button";
import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";

gsap.registerPlugin(ScrollTrigger);

const OurEvents = () => {
  const bgWrapperRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    if (!bgWrapperRef.current || !bgImageRef.current) return;
    const timeout = setTimeout(() => {
      gsap.fromTo(
        bgImageRef.current,
        {
          y: "-10%", // Start position (slightly above)
          scale: 1.2,
        },
        {
          y: "10%", // End position (slightly below)
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: bgWrapperRef.current,
            scroller: "[data-scroll-container]", // Remove if not using Locomotive Scroll
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
      gsap.from("#our-events-heading", {
        y: 50,
        opacity: 1,
        duration: 0.3,
        scrollTrigger: {
          trigger: "#our-events-heading",
          scroller: "[data-scroll-container]", // Remove if not using Locomotive Scroll
          start: "top 80%",
          end: "bottom top",
        },
      });
      gsap.from("#buttons-events ", {
        y: 10,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: "#buttons-events",
          scroller: "[data-scroll-container]", // Remove if not using Locomotive Scroll
          start: "top 80%",
          end: "bottom top",
        },
      });
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div ref={bgWrapperRef} className="py-5 lg:py-10 relative overflow-hidden">
      <img
        ref={bgImageRef}
        src="/our-events.png"
        width={1920}
        height={1080}
        alt="Our Events"
        className="absolute top-0 left-0 w-full h-full object-cover will-change-transform pointer-events-none"
      />
      <div className="relative z-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[70vh]">
            <div className="flex flex-col justify-center gap-6 text-white">
              <HeadingTwo className="mb-3" id="our-events-heading">
                Our Events
              </HeadingTwo>
              <p className="text-lg">
                The British Academy of Aesthetic Dentistry hosts a range of
                events designed to inspire, educate, and connect professionals
                across the dental field. From immersive hands-on workshops to
                prestigious annual conferences, our events foster the sharing of
                ideas and the pursuit of excellence in clinical practice.
              </p>
              <p className="text-lg">
                Whether you&apos;re a seasoned expert or an emerging
                practitioner, BAAD events offer unrivaled opportunities for
                growth, collaboration, and innovation.
              </p>
              <div
                className="flex flex-wrap items-center flex-row gap-3 justify-center lg:justify-start"
                id="buttons-events"
              >
                <Button href="/">Book Now</Button>
                <Button href="/">Past Masterclasses</Button>
                <Button href="/">Past Scientific Conferences</Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default OurEvents;
