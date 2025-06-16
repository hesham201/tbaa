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
              Following the enormous success of the American Academy of Esthetic
              Dentistry, founded in 1975, the European Academy of Esthetic
              Dentistry, founded in 1986 and the Japanese Academy of Esthetic
              Dentistry founded in 1990, the UK, alone amongst the front runners
              of dental excellence was conspicuous for the absence of an
              aesthetic ethos manifested in the protocols of a structured
              organisation.
            </p>
            <p>
              Thus it was no surprise that in the early nineties a group of
              like-minded individuals discussed the possibility of forming a
              British society dedicated to the ethos of Aesthetics.
            </p>
            <p>
              Initially the main founders were Lambert Fick and David Kaplan,
              later joined by David Klaff. They met and discussed the ways and
              means to form such an Academy.
            </p>
            <p>
              By coincidence, or Karma, the first combined meeting of the above
              three academies took place in Florence, Italy, in 1994. On the
              flight to the meeting Milton Beinart and John Theunissen, two
              like-minded clinicians, joined Lambert and the two David’s. By the
              end of the flight and additional train journey a broad based
              formula had been developed for the structure of a British
              Aesthetic Academy. In Florence invitations were extended to Tidu
              Mankoo and Carlo Nepute to join the founding party.
            </p>

            <p>
              High-level talks were held at every opportunity during the
              Florence meeting, with inspirational assistance from Cherilyn
              Sheets, President of the AAED and David Winkler, President of the
              Scandinavian Academy.
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
              Fabio Toffenetti, President of the EAED, made two significant
              announcements during the concluding speech of the meeting. The
              first was the establishment of the International Federation of
              Esthetic Dentistry; the second was the announcement of the
              formation of the British Academy of Aesthetic Dentistry.
            </p>
            <p>
              The following months were characterised by frequent intensive
              meetings and within a short period a structured society had been
              formed with a Mission Statement, Constitution and By-laws and was
              to be called the British Academy of Aesthetic Dentistry. Two
              further individuals were invited to join the original founding
              Executive Council, Lothar Fulde and Paul Tipton. The Constitution
              demanded that an annual general meeting be held with an associated
              scientific programme.
            </p>
            <p>
              The founding officers elected were Lambert Fick- President; David
              Klaff – President -Elect and David Kaplan – Secretary -Treasurer.
            </p>
            <p>
              The inaugural meeting was held at the Belfry Hotel with Sir
              Bernard Ingham, Margaret Thatcher’s press secretary, the guest of
              honour. The meeting was characterised by sponsoring possibly the
              finest line-up of world clinicians seen in one programme in the
              United Kingdom at that time. Many unforgettable moments were held
              in the social aspects, not least of which being Dave Winkler
              winning the “BA(A)D” golfer of the year trophy.
            </p>
            <p>
              Within 6 years the British Academy of Aesthetic Dentistry had
              formally achieved its position in the United Kingdom as a highly
              formidable society that played a large part in the acceptance of
              “aesthetics” as a discipline and method of treatment in this
              country.
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
                There is no doubt that the BAAD was formed in the face of great
                hostility and suspicion by the profession in the United Kingdom
                and at the time aesthetics was certainly a “dirty word”.
              </p>
              <p>
                However the standard of the Scientific Meetings was so high with
                high concentration on solid biological principles, with clinical
                excellence and paying strict adherence to restoring Structure,
                Form and Function, that BAAD soon established itself both
                nationally and internationally as a serious academy promoting
                the highest standards of dental clinical achievement, associated
                with social camaraderie and friendship. Clinicians from abroad
                queued to be included in a BAAD meeting line-up.
              </p>
              <p>
                BAAD has evolved in a linear fashion continuing to maintain the
                high standards with the introduction of “study-club” type
                meetings proving to be a tremendous success and very popular
                with the membership.
              </p>
              <p>
                Presidents and Executive councils have been elected, served and
                passed on their mantles – the Dinosaurs and original founding
                members have moved to the background, offering council and
                wisdom in continuing to guide the Academy to leadership in
                bringing Aesthetic Dentistry to the British Public.
              </p>
              <p>
                No history of BAAD would be complete without paying homage to
                three guiding lights in its development, namely John McLean,
                Brian Sykes and Joyce Ronald – these three were instrumental in
                guiding BAAD and the Academy’s debt is incalculable.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Content;
