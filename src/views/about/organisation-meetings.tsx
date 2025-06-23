"use client";
import Container from "@/components/container";
import { ABOUT_SAME_SECTION } from "@/constant/data";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OrganisationMeetings = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      gsap.utils.toArray<HTMLElement>(".org-block").forEach((block) => {
        const heading = block.querySelector(".org-heading");
        const para = block.querySelector(".org-para");
        const images = block.querySelectorAll(".org-image");

        gsap.from([heading, para], {
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: block,
            scroller: "[data-scroll-container]",
            start: "top 85%",
          },
        });

        gsap.from(images, {
          opacity: 0,
          scale: 0.95,
          duration: 1,
          delay: 0.2,
          stagger: 0.1,
          scrollTrigger: {
            trigger: block,
            scroller: "[data-scroll-container]",
            start: "top 85%",
          },
        });
      });
    }, 600);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div ref={sectionRef} className="py-10">
      <Container>
        <div className="grid gap-7">
          {ABOUT_SAME_SECTION.map((item) => (
            <div
              key={item.heading}
              className={`org-block flex flex-row gap-8 items-center ${
                item.reverse ? "flex-row-reverse" : ""
              }`}
            >
              <div className="w-[calc(50%-16px)]">
                <h2 className="org-heading text-4xl mb-4">{item.heading}</h2>
                <p className="org-para text-xl">{item.para}</p>
              </div>
              <div className="w-[calc(50%-16px)] h-[500px] relative">
                <img
                  src={item.image}
                  className={`org-image absolute inset-0 w-[80%] h-full object-cover ${
                    item.reverse ? "me-auto" : "ms-auto"
                  }`}
                  alt=""
                />
                <img
                  src={item.imageOne}
                  className={`org-image absolute top-1/2 -translate-y-1/2 ${
                    item.reverse ? "right-[4.5%]" : "left-[4.5%]"
                  } w-[35%] h-[50%] object-cover border border-8 border-white`}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OrganisationMeetings;
