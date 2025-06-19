"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Container from "@/components/container";
import Image from "next/image";
import React from "react";
gsap.registerPlugin(ScrollTrigger);
const Content = () => {
  const bgWrapperRef = useRef<HTMLDivElement>(null);
  const bgWrapperRef2 = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);
  const bgImageRef2 = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
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
            scroller: "[data-scroll-container]", // Remove if not using Locomotive Scroll
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
            scroller: "[data-scroll-container]", // Remove if not using Locomotive Scroll
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, 300);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="">
      <div className="py-10">
        <Container>
          <div className="flex flex-col text-center gap-4 text-lg">
            <p>
              Lambert Fick was a truly passionate dentist, as those of you who
              have attended his lectures or have simply “talked teeth” with him
              will attest. No organisation matched & mirrored that passion
              better than the Aesthetic Academy movement.
            </p>
            <p>
              Lambert’s initial interest in the group was stimulated by his
              great friend & fellow Wits graduate, David Garber. David had long
              been an active member of the American Academy of Esthetic
              Dentistry & told Lambert that the concept, the camaraderie & the
              sheer excellence of the scientific programmes made the meetings
              “must see” events!
            </p>
            <p>
              The A.A.E.D. provided the framework for a world wide movement, &
              never one to miss an exciting new development, Lambert was
              delighted to learn that the concept was moving in to Europe,
              bringing it closer to home.
            </p>
            <p>
              He attended his first aesthetic academy meeting in 1986; it was
              only the second meeting of the newly formed European Academy of
              Esthetic Dentistry (EAED) & was held in Monte Carlo.
            </p>

            <p>
              I well remember that meeting & in particular Lambert’s excitement
              at having found an organisation that mirrored his passion, not
              just for dentistry, but for all things excellent!
            </p>
          </div>
        </Container>
      </div>
      <div
        ref={bgWrapperRef}
        className="relative overflow-hidden w-full h-[80vh]"
      >
        <Image
          ref={bgImageRef}
          src={"/couple.webp"}
          width={800}
          height={800}
          alt="image"
          className="absolute top-0 left-0 w-full h-full object-cover will-change-transform pointer-events-none"
        />
      </div>
      <div className="py-10">
        <Container>
          <div className="flex flex-col text-center gap-4 text-lg">
            <p>
              We both felt greatly welcomed & basked in the special social
              ambience that the meetings had. He felt truly inspired and he was
              determined that he would like to see & experience more of the
              same. Where better to go, therefore, than to the founding academy?
            </p>
            <p>
              In August 1987, having procured a much sought after invitation to
              attend from David Garber, we took our young daughters off to
              California & participated in our first American Academy meeting.
              This pattern became the norm & we attended both the European &
              American Academy meetings annually from that moment on.
            </p>
            <p>
              In 1988 he was elected an active member of the EAED & quietly
              began to nurse his dream of bringing the Academy concept to the
              U.K.
            </p>
            <p>
              With each successive meeting he attended, the possibility of
              forming a British Academy was becoming a reality in Lambert’s
              mind. Without the support of committed converts, however, the
              dream would only ever remain a dream, & Lambert sought therefore
              to spread the word, encouraging like minded friends & colleagues
              to attend the meetings.
            </p>
            <p>
              David Klaff was one such & he & Sharon accompanied us in 1988 to
              the AAED meeting in Boston. He knew it was vital to engage those
              who were familiar with the Aesthetic Academy ethos.
            </p>
          </div>
        </Container>
      </div>
      <div
        ref={bgWrapperRef2}
        className="py-10 relative overflow-hidden w-full"
      >
        <Image
          ref={bgImageRef2}
          src={"/our-events.png"}
          width={800}
          height={800}
          alt="image"
          className="absolute top-0 left-0 w-full h-full object-cover will-change-transform pointer-events-none"
        />
        <Container>
          <div className="relative ">
            <div className="flex flex-col justify-center-center text-white gap-4 text-lg">
              <p>
                His colleagues, David Kaplan & Tidu Mankoo, who subsequently
                became Founding Executive Council members, happily enlisted to
                the cause & so it was that whilst waiting for a train from Pisa
                airport to take them to the EAED meeting in Florence in 1994
                that a (very!) small group of enthusiastic & dedicated UK –
                based converts heard Lambert’s vision & shared in his dream.
              </p>
              <p>
                The Academy took shape on that station platform & the commitment
                to start B.A.A.D. was made. Lambert sought sanction & guidance
                from Ronnie Goldstein, AAED Co-Founder & from the EAED
                Executive. The proposal was enthusiastically endorsed & the
                rest, as they say, is history.
              </p>
              <p>
                The inaugural B.A.A.D. meeting was held at “The Belfry” in 1995
                & Lambert was the Academy’s Founding President – a role he
                fiercely cherished.
              </p>
              <p>
                In 1997, he was immensely proud to present a clinical paper to
                The A.A.E.D. meeting in Cancun & was elected an associate member
                of the Academy – an honour accorded to only 2 other British
                Clinicians.
              </p>
              <p>
                In early 2002, Phillipe Gallon, President of the International
                Federation of Esthetic Dentistry, nominated Lambert for the post
                of treasurer of the I.F.E.D., a role he was sadly prevented from
                fulfilling by the onset of his illness.
              </p>
              <p>
                Lambert’s vision, however, has been realised, & B.A.A.D. today
                is the force for education & excellence in UK dentistry that he
                dreamt about. He was a modest man, totally without ego – the
                academy is testament to his drive & his passion for dentistry.
              </p>
              <p>
                It is wonderful to know that the Lambert Fick Memorial Lecture
                will provide a lasting contribution to the organisation he
                founded & held so dear.
              </p>
              <p>
                Gilly Fick <br />
                October 2003
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Content;
