"use client";
import Container from "@/components/container";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);
declare global {
  interface Window {
    LOCO_SCROLL?: {
      update: () => void;
      start: () => void;
      stop: () => void;
    };
  }
}

const MembershipAcademy = () => {
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

      gsap.fromTo(
        ".purpose-video img",
        { y: "-20%", scale: 1.1 },
        {
          y: "20%",
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".purpose-video",
            scroller: "[data-scroll-container]", // or remove if you're not using locomotive-scroll
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);
  return (
    <>
      <div ref={sectionRef} className="py-5">
        <Container>
          <div>
            <div className="max-w-[700px] mx-auto">
              <h2 className="purpose-heading text-center text-5xl mb-5">
                Membership of the Academy
              </h2>
              <p className="purpose-paragraph  text-lg mb-3">
                Membership is open to all qualified members of the Dental
                Profession, including Dental Surgeons, Dental
                Technicians/Technologists, Nurses, Hygienists, Therapists and
                Practice Managers, registered with the General Dental Council.
              </p>
              <p className="purpose-paragraph   text-lg">
                The Academy has several membership types; Full or Associate for
                UK residents and an International Membership for those members
                residing abroad. There are also Corporate, Honorary and Life
                Memberships. Current membership fees are £500.00 per annum.
              </p>
              <p className="purpose-paragraph   text-lg">
                Full membership of the Academy is a distinctive honour and is
                bestowed upon persons who have presented to the Academy and have
                been validated by their peers and those who have made notable
                contributions in the field of aesthetic dentistry through
                education, research or clinical practice.
              </p>
            </div>
            <div className="purpose-video rounded-4xl overflow-hidden mt-6 max-w-[800px] mx-auto relative h-[500px]">
              <img
                className="absolute top-0 left-0 w-full h-auto min-h-full object-cover will-change-transform"
                src="/scimeet2019_50.jpg"
                alt="image"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MembershipAcademy;
