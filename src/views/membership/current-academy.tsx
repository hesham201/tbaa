"use client";
import Container from "@/components/container";
import { MEMBERSHIP_SAME_SECTION } from "@/constant/data";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CurrentAcademy = () => {
  const sectionRef = useRef(null);
  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".org-block").forEach((block, index) => {
      const heading = block.querySelector(".org-heading");
      const para = block.querySelector(".org-para");
      const images = block.querySelectorAll(".org-image");
      const orgsImage = block.querySelector(".orgs-image");

      // const isReversed = block.classList.contains("flex-row-reverse");
      if (orgsImage) {
        gsap.fromTo(
          orgsImage,
          {
            x: index ? -200 : 200,
          },
          {
            x: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: block,
              start: "top 85%",
              end: "top 5%",
              scrub: true,
            },
          }
        );
      }
      gsap.from([heading, para], {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: block,
          start: "top 85%",
        },
      });

      gsap.fromTo(
        images,
        { y: "-20%", scale: 1.1 },
        {
          y: "20%",
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: block,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  });

  return (
    <div ref={sectionRef} className="py-10">
      <Container>
        <div className="grid gap-7">
          {MEMBERSHIP_SAME_SECTION.map((item) => (
            <div
              key={item.heading}
              className={`org-block flex flex-col lg:flex-row text-midnight gap-8 items-center ${
                item.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full lg:w-[calc(50%-16px)]">
                <h2 className="org-heading text-4xl mb-4">{item.heading}</h2>
                <p
                  className="org-para text-xl"
                  dangerouslySetInnerHTML={{ __html: item.para }}
                />
              </div>
              <div className="w-full lg:w-[calc(50%-16px)] h-[500px] relative">
                <div
                  className={`relative h-full w-[80%] rounded-2xl overflow-hidden ${
                    item.reverse ? "me-auto" : "ms-auto"
                  }`}
                >
                  <img
                    src={item.image}
                    className={`org-image absolute inset-0 w-full min-h-full object-cover will-change-transform `}
                    alt=""
                  />
                </div>
                <div
                  className={`orgs-image absolute top-1/2 -translate-y-1/2 ${
                    item.reverse ? "right-[4.5%]" : "left-[4.5%]"
                  } w-[35%] h-[40%] lg:h-[50%] object-cover  rounded-xl border-8 border-white z-10`}
                >
                  <img
                    src={item.imageOne}
                    alt="image"
                    className="w-full relative h-full object-center object-cover rounded-2xl"
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

export default CurrentAcademy;
