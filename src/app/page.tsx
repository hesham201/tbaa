"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const galleryRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const tl: GSAPTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".hmm",
          markers: true,
          start: "top 90%",
          scroller: "[data-scroll-container]",
          end: "top 40%",
        },
      });
      tl.to(".hmm", {
        height: "2px",
      });
      tl.to(".hmm", {
        width: "100%",
      });
      tl.to(".hmm", {
        height: "100%",
      });
    },
    { scope: galleryRef }
  );

  return (
    <div className="grid ">
      <main className="">
        <div className="bg-white text-white h-[100vh]">hi</div>
        <div className="bg-black  text-white h-[100vh]">by</div>
        <div className="bg-black  text-white h-[100vh]">
          <div className="w-[80%] h-[80%] m-auto" ref={galleryRef}>
            <div className="w-0 h-0 relative hmm">
              <Image
                src={"/p1.jpg"}
                data-scroll
                data-scroll-speed="5"
                alt="image"
                width={400}
                height={400}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
