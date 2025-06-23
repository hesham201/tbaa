"use client";
import Container from "@/components/container";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Purpose = () => {
  const sectionRef = useRef(null);
  useLayoutEffect(() => {
    const timeOut = setTimeout(() => {
      gsap.from(".purpose-heading", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".purpose-heading",
          scroller: "[data-scroll-container]",
          start: "top 80%",
        },
      });

      gsap.from(".purpose-paragraph", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".purpose-paragraph",
          scroller: "[data-scroll-container]",
          start: "top 85%",
        },
      });

      gsap.from(".purpose-video", {
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: ".purpose-video",
          scroller: "[data-scroll-container]",
          start: "top 90%",
        },
      });
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);
  return (
    <div ref={sectionRef}>
      <Container>
        <div>
          <div className="max-w-[700px] mx-auto">
            <h2 className="purpose-heading text-center text-5xl mb-5">
              Purpose
            </h2>
            <p className="purpose-paragraph text-center text-lg mb-3">
              The Academy&apos;s primary purpose is to promote and foster dental
              health for the benefit of the community.
            </p>
            <p className="purpose-paragraph  text-center text-lg">
              In particular, the Academy helps to facilitate the integration of
              natural dental aesthetics into the total spectrum of oral health
              care and to provide a leadership role for the profession by
              defining the highest professional, scientific, artistic and
              ethical standards through research, publications and educational
              presentations.
            </p>
          </div>
          <div className="purpose-video rounded-4xl overflow-hidden mt-6 max-w-[800px] mx-auto relative h-[600px]">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/5LhqI5IRXTo?si=LtpZM77yKKWMYrCG"
              title="YouTube video player"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Purpose;
