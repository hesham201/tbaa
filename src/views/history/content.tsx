"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Container from "@/components/container";
import React from "react";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
const Content = () => {
  const bgWrapperRef = useRef<HTMLDivElement>(null);
  const bgWrapperRef2 = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);
  const bgImageRef2 = useRef<HTMLImageElement>(null);
  useGSAP(() => {
    if (
      !bgWrapperRef.current ||
      !bgImageRef.current ||
      !bgImageRef2.current ||
      !bgWrapperRef2.current
    )
      return;
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
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      bgImageRef2.current,
      {
        y: "-10%", // Start position (slightly above)
        scale: 1.2,
      },
      {
        y: "10%", // End position (slightly below)
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: bgWrapperRef2.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });
  return (
    <div className="">
      <div className="py-10">
        <Container>
          <div className="flex flex-col  gap-4 text-lg text-midnight">
            <p>
              The British Academy of Aesthetic Dentistry (BAAD) was founded in
              the early 1990s, at a time when the UK lacked a dedicated
              organisation championing the principles of aesthetic dentistry.
              Inspired by the success of academies in America, Europe and Japan,
              a group of pioneering clinicians recognised the need to create a
              British counterpart that would promote excellence in aesthetics,
              education, and collaboration.
            </p>
            <p>
              The founding vision began with Lambert Fick and David Kaplan,
              later joined by David Klaff. Their discussions laid the groundwork
              for what would become BAAD. In 1994, during the first combined
              meeting of the American, European, and Japanese academies in
              Florence, further momentum was gained. On the journey to this
              landmark event, Lambert, Kaplan and Klaff were joined by Milton
              Beinart and John Theunissen, and together they shaped the
              framework for a new Academy. In Florence, Tidu Mankoo and Carlo
              Nepute were also invited to join as founding members.
            </p>
          </div>
        </Container>
      </div>
      <div
        ref={bgWrapperRef}
        className="relative overflow-hidden w-full h-[80vh]"
      >
        <img
          ref={bgImageRef}
          src={"/our-community.jpg"}
          alt="image"
          className="absolute top-0 left-0 w-full h-full object-cover will-change-transform pointer-events-none"
        />
      </div>
      <div className="py-10">
        <Container>
          <div className="flex flex-col text-midnight gap-4 text-lg">
            <p>
              With encouragement from international colleagues – including
              Cherilyn Sheets (President of the American Academy of Esthetic
              Dentistry), David Winkler (President of the Scandinavian Academy),
              and Fabio Toffenetti (President of the European Academy) – the
              creation of a British academy was formally announced. Shortly
              after, Lothar Fulde and Paul Tipton joined the founding Executive
              Council, and the Academy was established with its Constitution,
              Mission Statement, and By-laws.
            </p>
            <p>
              The inaugural meeting was held at The Belfry Hotel, welcoming an
              exceptional line-up of world-class clinicians. From the outset,
              BAAD set itself apart by combining academic rigour with an
              atmosphere of camaraderie, ensuring delegates benefitted from both
              education and fellowship.
            </p>
            <p>
              In its early years, BAAD faced scepticism within the UK
              profession. Aesthetic dentistry was often dismissed as
              superficial. Yet the Academy quickly established credibility
              through scientific programmes rooted in biological principles,
              clinical excellence, and a commitment to restoring structure,
              form, and function. The outstanding standard of BAAD’s meetings
              soon attracted leading clinicians from around the world, cementing
              its reputation as a serious and respected academy.
            </p>
          </div>
        </Container>
      </div>
      <div
        ref={bgWrapperRef2}
        className="py-10 relative overflow-hidden w-full"
      >
        <img
          ref={bgImageRef2}
          src={"/events-new.webp"}
          alt="image"
          className="absolute top-0 left-0 w-full h-full object-cover will-change-transform pointer-events-none"
        />
        <Container>
          <div className="relative flex  min-h-[60vh]">
            <div className="flex flex-col justify-center text-white gap-4 text-lg">
              <p>
                Over time, BAAD has evolved while remaining true to its founding
                ethos. Study-club style meetings were introduced, creating more
                intimate opportunities for members to engage, learn, and share
                knowledge. Presidents and Executive Councils have passed the
                baton across generations, while the founding members continue to
                provide guidance and wisdom.
              </p>
              <p>
                No history of BAAD would be complete without acknowledging the
                immense contributions of John McLean, Brian Sykes, and Joyce
                Ronald – three guiding figures whose support and vision helped
                shape the Academy’s enduring success.
              </p>
              <p>
                Today, BAAD stands as one of the most respected aesthetic dental
                academies worldwide, upholding the highest standards of
                education and clinical practice while nurturing a community of
                professionals committed to excellence.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Content;
