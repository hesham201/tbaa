"use client";
import React, { useRef} from "react";
import Container from "@/components/container";
import Image from "next/image";
import Button from "@/components/button";
import { SPEAKER_DATA2 } from "@/constant/data2";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Update interface to include optional learningAims property
interface SpeakerData2 {
  name: string;
  image: string;
  slug: string;
  title: string;
  date: string;
  time: string;
  sessionSummary: string;

  aboutSpeaker: string;          // normal paragraph bio
  careerHighlights?: string[];   // for bullet-style CVs

  // For Nelson-style
  learningAims?: string[];
  learningObjectives: string[];

  // For Massimo-style
  learningIntro?: string;
  keyLearningPoints?: string[];
}

interface SpeakerContentProps {
  speakerId?: string;
}

const SpeakerContent: React.FC<SpeakerContentProps> = ({ speakerId = "0" }) => {
  // Get speaker data based on speakerId or default to first speaker
  const speakerIndex = parseInt(speakerId);
  const speaker: SpeakerData2 =
    SPEAKER_DATA2[speakerIndex < SPEAKER_DATA2.length ? speakerIndex : 0];
  
  const headerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const splitName = new SplitType("#speaker-name", { types: "words,chars" });
    const splitTitle = new SplitType("#speaker-title", { types: "words,chars" });
    const tl = gsap.timeline();
    
    // Image animation similar to banner.tsx
    tl.to(".speaker-image-container", {
      scaleX: 1,
      height: "10px",
      transformOrigin: "top",
      ease: "power2.out",
      duration: 0.8,
    });

    tl.to(".speaker-image-container", {
      height: "520px",
      ease: "power2.out",
      duration: 1,
    });
    
    tl.to(".speaker-image-bg", { opacity: 0 });
    tl.from(".speaker-image-main", { opacity: 1, scale: 1 }, ">");
    
    // Text animations
    tl.from(splitName.words, { y: 20, opacity: 0, stagger: 0.1 });
    tl.from(splitTitle.words, { y: 20, opacity: 0, stagger: 0.1 });
    tl.from(".speaker-datetime", { y: 20, opacity: 0, duration: 0.5 });
    tl.to(
      ".upper",
      { scaleY: 1, transformOrigin: "bottom", duration: 1, ease: "power2.out" },
      ">-2"
    );
    // Scroll-triggered animations for text sections
    // Replay mode - fade in/out on scroll up/down
    const fadeInUpElements = gsap.utils.toArray(".fade-in-up");
    
    fadeInUpElements.forEach((element) => {
      gsap.fromTo(element as Element, 
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element as Element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

  }, []);
  
  return (
    <div id="speaker-content" ref={headerRef}>
      {/* Speaker Header Section with Image */}
      <div className="relative">
        {/* Background section */}
        <div className="pt-[70px] bg-[linear-gradient(to_bottom,#031A37_0%,#031A37_90%,transparent_90%,transparent_100%)] text-white w-screen py-10 pb-0 mt-20">
          <Container>
            <div className="flex flex-row items-center justify-between">
              <div className="md:w-[40%] h-[500px] relative">
                {/* Image positioned with 25% above the background but below navbar */}
                <div className="speaker-image-container w-full h-0 rounded relative  overflow-hidden md:absolute md:left-0 md:-top-2 scale-x-0  origin-top transition-all">
                  <div className="absolute z-10 inset-0 h-full w-full bg-primary speaker-image-bg"></div>
                  <div className="speaker-image-main relative h-full">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover h-full"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-[55%] px-6 flex flex-col justify-start md:pl-0">
                <p id="speaker-name" className="mb-4 text-primary text-2xl"> {speaker.name}</p>
                <div className="bg-midnight mb-6 max-w-full">
                  <h2 id="speaker-title" className="text-4xl font-bold text-primary mb-4">
                    {speaker.title}
                  </h2>
                  <div className="speaker-datetime bg-white text-black px-6 py-2 inline-block">
                    {speaker.date} TIME: {speaker.time}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <Container>
        {/* Added baad-lion image - positioned on right side below gradient */}

        {/* Session Summary */}
        <div className="py-8 relative">
          <div className="absolute flex justify-end mb-4 -mt-16 top-4 right-4">
            <div className="">
              <Image
                src="/baad-lion.webp"
                alt="BAAD Lion"
                width={128}
                height={64}
                className="w-32 h-36 opacity-60 object-contain"
              />
            </div>
          </div>
          <h3 className="text-5xl mb-4 fade-in-up">
            <span className="text-outline">About</span>
            <span className="ml-2 text-midnight">The Speaker</span>
          </h3>

          <div className="text-base mb-6 fade-in-up" dangerouslySetInnerHTML={{__html:speaker.aboutSpeaker}}/>

          {speaker.careerHighlights && speaker.careerHighlights.length > 0 && (
            <ul className="space-y-3 pl-6 list-disc fade-in-up">
              {speaker.careerHighlights.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </Container>

      {/* Learning Aims & Objectives - Full Width Background */}
      <div className="py-8 bg-primary w-full">
        <Container>
          <h3 className="text-5xl mb-4 fade-in-up">
            <span className=" text-midnight">Abstract</span>
          </h3>
          <div className="text-base mb-6 text-left fade-in-up" dangerouslySetInnerHTML={{ __html: speaker.sessionSummary }}/>

          <div className="mt-6 fade-in-up">
            <Button href="/book-now">BOOK NOW</Button>
          </div>
        </Container>
      </div>

      <Container>
        {/* About The Speaker */}
        <div className="py-8 ">
          <h3 className="text-5xl mb-4 text-center fade-in-up">
            <span className="text-outline">Learning</span>
            <span className="ml-2 text-midnight">
              {speaker.learningAims || speaker.learningIntro ? "Aims & Objectives" : "Aims & Objectives"}
            </span>
          </h3>

          {/* Case: Special intro paragraph (Massimo style) */}
          {speaker.learningIntro && (
            <p className="text-base mb-6 fade-in-up">{speaker.learningIntro}</p>
          )}

          {/* Case: Aims list (Nelson style) */}
          {speaker.learningAims && speaker.learningAims.length > 0 && (
            <>
              <h4 className="text-2xl mb-3 text-midnight font-medium fade-in-up">Aims</h4>
              <ul className="space-y-4 pl-6 mb-6 list-disc fade-in-up">
                {speaker.learningAims.map((aim, index) => (
                  <li key={index}>{aim}</li>
                ))}
              </ul>
            </>
          )}

          {/* Case: Objectives (only render if they exist) */}
          {speaker.learningObjectives && speaker.learningObjectives.length > 0 && (
            <>
              {/* Only show 'Objectives' heading for speakers with special formatting */}
              {(speaker.learningAims || speaker.learningIntro) && (
                <h4 className="text-2xl mb-3 text-midnight font-medium fade-in-up">Objectives</h4>
              )}
              
              {/* Add description text for Dr. Massimo's objectives */}
              {speaker.learningIntro && (
                <p className="mb-4 fade-in-up">By the end of this presentation, participants will be able to:</p>
              )}
              
              <ul className="space-y-4 pl-6 list-disc fade-in-up">
                {speaker.learningObjectives.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
            </>
          )}

          {/* Case: Key Learning Points (Massimo style) */}
          {speaker.keyLearningPoints && speaker.keyLearningPoints.length > 0 && (
            <>
              <h4 className="text-2xl mb-3 text-midnight font-medium mt-6 fade-in-up">Key Learning Points</h4>
              <ul className="space-y-4 pl-6 list-disc fade-in-up">
                {speaker.keyLearningPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </>
          )}

          <div className="mb-6 text-center mt-5 fade-in-up">
            <Button href="/book-now">BOOK NOW</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SpeakerContent;