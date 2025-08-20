import React from "react";
import Container from "@/components/container";
import Image from "next/image";
import Button from "@/components/button";
import { SPEAKER_DATA } from "@/constant/data2";

interface SpeakerContentProps {
  speakerId?: string;
}

const SpeakerContent: React.FC<SpeakerContentProps> = ({ speakerId = "0" }) => {
  // Get speaker data based on speakerId or default to first speaker
  const speakerIndex = parseInt(speakerId);
  const speaker = SPEAKER_DATA[speakerIndex < SPEAKER_DATA.length ? speakerIndex : 0];
  return (
    <div id="speaker-content">
      {/* Speaker Header Section with Image */}
      <div className="relative">
        {/* Background section */}
        <div className="bg-[linear-gradient(to_bottom,#031A37_0%,#031A37_80%,transparent_50%,transparent_100%)] text-white w-screen py-10 pb-0 mt-20">
          <Container>
            <div className="flex flex-row justify-between">
              <div className="md:w-[40%] h-[500px] relative">
                {/* Image positioned with 25% above the background but below navbar */}
                <div className="w-full h-[500px] rounded relative overflow-hidden md:absolute md:left-0 md:-top-2">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-[55%] px-6 flex flex-col justify-start mt-5 md:mt-40 md:pl-0">
                <h2 className="text-4xl font-bold text-primary mb-4">
                  {speaker.name}
                </h2>
                <div className="bg-midnight mb-6 max-w-full">
                  <p className="mb-4 text-primary text-2xl">
                    {speaker.title}
                  </p>
                  <div className="bg-white text-black px-6 py-2 inline-block">
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
        <div className="flex justify-end mb-4 -mt-16 relative">
          <div className="w-32 h-16">
            <Image
              src="/baad-lion.webp"
              alt="BAAD Lion"
              width={128}
              height={64}
              className="object-contain"
            />
          </div>
        </div>
        
        {/* Session Summary */}
        <div className="py-8">
          <h3 className="text-5xl mb-4">
            <span className="text-outline">Session</span>
            <span className="ml-2 text-midnight">Summary</span>
          </h3>
          <p className="text-base mb-6">
            {speaker.sessionSummary}
          </p>
        </div>
      </Container>

      {/* Learning Aims & Objectives - Full Width Background */}
      <div className="py-8 bg-primary w-full">
        <Container>
          <h3 className="text-5xl mb-4">
            <span className="text-outline">Learning</span>
            <span className="ml-2 text-midnight">Aims & Objectives</span>
          </h3>
          <ul className="space-y-4 pl-6">
            {speaker.learningObjectives.map((objective, index) => (
              <li key={index}>• {objective}</li>
            ))}
          </ul>
          <div className="mt-6">
            <Button href="#booking">BOOK NOW</Button>
          </div>
        </Container>
      </div>

      <Container>
        {/* About The Speaker */}
        <div className="py-8 text-center">
          <h3 className="text-5xl mb-4">
            <span className="text-outline">About</span>
            <span className="ml-2 text-midnight">The Speaker</span>
          </h3>
          <p className="text-base mb-6 text-left">
            {speaker.aboutSpeaker}
          </p>
          <div className="mb-6">
            <Button href="#booking">BOOK NOW</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SpeakerContent;