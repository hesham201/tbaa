"use client";
import Container from "@/components/container";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import VideoModal from "@/components/popup-modal";
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

const Purpose = () => {
  const sectionRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
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
      gsap.fromTo(
        ".purpose-video img.thumbnail",
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
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);
  const handleOpenModal = () => {
    setShowModal(true);
    if (window.LOCO_SCROLL) window.LOCO_SCROLL.stop(); // 👈 Stop Locomotive Scroll
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTimeout(() => {
      if (window.LOCO_SCROLL) window.LOCO_SCROLL.start(); // 👈 Resume after a short delay
    }, 100); // Allow DOM repaint
  };
  return (
    <>
      <div ref={sectionRef} className="py-7">
        <Container>
          <div>
            <div className="max-w-[700px] mx-auto">
              <h2 className="purpose-heading text-center text-5xl mb-5">
                Purpose
              </h2>
              <p className="purpose-paragraph  text-lg mb-3">
                The Academy&apos;s primary purpose is to promote and foster
                dental health for the benefit of the community.
              </p>
              <p className="purpose-paragraph   text-lg">
                In particular, the Academy helps to facilitate the integration
                of natural dental aesthetics into the total spectrum of oral
                health care and to provide a leadership role for the profession
                by defining the highest professional, scientific, artistic and
                ethical standards through research, publications and educational
                presentations.
              </p>
            </div>
            <div className="purpose-video rounded-4xl overflow-hidden mt-6 max-w-[800px] mx-auto relative h-[500px]">
              <img
                width={1000}
                height={1000}
                className="absolute thumbnail top-0 left-0 w-full h-auto min-h-full object-cover will-change-transform"
                src="/thumbnailv1.webp"
                alt=""
              />
              <div
                className="absolute top-0 cursor-pointer left-0 w-full h-full flex justify-center items-center z-[12]"
                onClick={handleOpenModal}
              >
                <Image
                  src={"/play.svg"}
                  width={60}
                  height={60}
                  alt="play button"
                  className="relative cursor-pointer z-[100]"
                />
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px]">
                  <div className="absolute w-[150px] h-[150px] bg-[rgba(0,0,0,0.1)] opacity-0 rounded-full left-0 top-0 z-[1] animate-waves "></div>
                  <div
                    className="absolute w-[150px] h-[150px] bg-[rgba(0,0,0,0.1)] opacity-0 rounded-full left-0 top-0 z-[1] animate-waves "
                    style={{ animationDelay: "2s" }}
                  ></div>
                  <div
                    className="absolute w-[150px] h-[150px] bg-[rgba(0,0,0,0.1)] opacity-0 rounded-full left-0 top-0 z-[1] animate-waves "
                    style={{ animationDelay: "2s" }}
                  ></div>
                  <div className="waves wave-2"></div>
                  <div className="waves wave-3"></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <VideoModal
        show={showModal}
        onClose={handleCloseModal}
        src="/videos/about.mp4"
      />
    </>
  );
};

export default Purpose;
