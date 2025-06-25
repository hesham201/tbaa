"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Container from "@/components/container";
// import Image from "next/image";
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
          <div className="flex flex-col text-midnight gap-4 text-lg">
            <p>
              The first step is to approach 2 Full Members to act as your guides
              and coaches. A good starting point is the members who supported
              your application for Associate Membership.
            </p>
            <p>
              You will need to have your presentation approved by your mentors
              prior to submitting to the Preview Committee. The Committee will
              decide whether to allow you to proceed further or whether further
              changes are necessary. Refer to the Constitution, Chapter 1
              Membership Section 2(2).
            </p>
            <p>
              The presentation will be 30 to 45 minutes in duration. <br />
              The basis of the presentation is to provide three cases
              highlighting both clinical and laboratory work. <br />
              All three cases must show a diagnosis based on clinical
              examination and investigations. A detailed plan of treatment must
              be provided. <br />
              This plan must also include alternative treatment options that
              could have been utilised for that particular case and you must
              show why one option was chosen over other options. <br />
              The treatment of the cases needs to be detailed and include a
              step-by-step account of the sequence of treatment with clear and
              accurate photographs.
            </p>
            <p>
              The final outcome must be shown clearly and include a
              retrospective analysis of the treatment; identifying any
              weaknesses and what could have been done differently. <br />
              All treatment decisions must be backed by literature references.
              The onus is on you to understand all the references quoted and be
              fully prepared for the question and answer session, which follows
              their presentation for 10-15 minutes.
            </p>

            <p>
              The list below provides a guideline on the format as well as the
              inclusion of relevant data for all presentations. It is by no
              means comprehensive nor will all the data provided necessarily be
              required in any one case presentation.
            </p>
          </div>
        </Container>
      </div>
      {/* <div
        ref={bgWrapperRef}
        className="relative overflow-hidden w-full h-[80vh]"
      >
        <Image
          ref={bgImageRef}
          src={"/our-community.jpg"}
          width={800}
          height={800}
          alt="image"
          className="absolute top-0 left-0 w-full h-full object-cover will-change-transform pointer-events-none"
        />
      </div> */}
      <div className="py-10">
        <Container>
          <div className="flex gap-20 text-midnight justify-center ">
            <div className="flex flex-col  gap-4 text-lg">
              <div>
                <h2 className="text-2xl">Additional investigations:</h2>
                <ul className="list-disc marker:text-white ps-5">
                  <li>Radiographic examination, CT as appropriate</li>
                  <li>Mounted study casts, conventional or digital.</li>
                  <li>Smile design.</li>
                  <li>Digital Smile Design.</li>
                  <li>
                    Any other relevant investigations and outcomes of
                    significance.
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl">Initial treatment:</h2>
                <ul className="list-disc marker:text-white ps-5">
                  <li>Removal of pathology.</li>
                  <li>Diagnostic treatment such as:</li>
                  <li>Stablishing Oral health.</li>
                  <li>Provisional restorations.</li>
                  <li>Any other procedures deemed necessary at this stage.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl">
                  Details of treatment and sequence of treatment:{" "}
                </h2>
                <h3>Non-surgical treatment: </h3>
                <ul className="list-disc marker:text-white ps-5">
                  <li>Endodontics.</li>
                  <li>Orthodontics.</li>
                  <li>Bleaching. </li>
                  <li>Any other procedures deemed necessary.</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col text-black gap-4 text-lg">
              <div>
                <h2 className="text-2xl">Surgical treatment:</h2>
                <ul className="list-disc marker:text-white ps-5">
                  <li>Extractions. </li>
                  <li>Surgical endodontic treatment.</li>
                  <li>Periodontal surgery.</li>
                  <li>Augmentation. </li>
                  <li>Implant placement.</li>
                  <li>Soft tissue surgery. </li>
                  <li>Any other procedures deemed necessary.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl">
                  Definitive treatment Restorative phase:
                </h2>
                <ul className="list-disc marker:text-white ps-5">
                  <li>Impressions, conventional or digital. </li>
                  <li>Bite registration.</li>
                  <li>Try-in.</li>
                  <li>Bisque porcelain try-in. </li>
                  <li>Fitting of definitive restoration. </li>
                  <li>Final occlusal analysis and adjustment. </li>
                  <li>Any other procedures provided.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl">
                  Maintenance and monitoring protocol:
                </h2>
                <ul className="list-disc marker:text-white ps-5">
                  <li>Radiographs.</li>
                  <li>Clinical review.</li>
                  <li>Hygienist appointment sequence.</li>
                  <li>Occlusal splint.</li>
                  <li>Any other procedures deemed necessary. </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* <div
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
          <div className="relative "></div>
        </Container>
      </div> */}
    </div>
  );
};

export default Content;
