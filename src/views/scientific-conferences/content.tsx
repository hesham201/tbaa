"use client";
import Container from "@/components/container";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Content = () => {
  const sectionRef = useRef(null);
  useLayoutEffect(() => {
    const timeOut = setTimeout(() => {
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
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <>
      <div ref={sectionRef} className="py-10">
        <Container>
          <div className="text-midnight">
            {/* <div className="max-w-[900px] mx-auto"> */}
            <p className="purpose-paragraph  text-lg mb-3">
              The Academy arranges an annual scientific conference usually in
              combination with an annual general meeting. It is an opportunity
              to promote, foster and share with other members their professional
              knowledge and experiences, for the benefit of the community
              through its educational presentations.
            </p>
            <p className="purpose-paragraph  text-lg">
              Educational presentations are given by highly respected
              professionals at excellent venues with superior facilities.
              Meetings are open to everyone interested in Aesthetic Dentistry,
              although members benefit from considerable cost reductions.
            </p>
            <p className="purpose-paragraph  text-lg">
              There is an accompanying trade exhibition with the latest
              equipment and services, plus a full social programme to complete
              the occasion.
            </p>
          </div>
          {/* </div> */}
        </Container>
      </div>
    </>
  );
};

export default Content;
