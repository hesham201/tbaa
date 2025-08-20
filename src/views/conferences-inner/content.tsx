import Container from "@/components/container";
import React from "react";

const Content = ({
  venue,
  date,
  speakers,
  speakersDateBased,
  upperPara,
  heading,
}: {
  heading: string;
  venue: string;
  date: string;
  upperPara: string;
  speakers?: string[];
  speakersDateBased?: { date: string; speak: string[] }[];
}) => {
  return (
    <div className="py-8">
      <Container>
        <div className="flex flex-row justify-between">
          <div>
            <h3 className="text-3xl mb-5">{heading}</h3>
            <p className="text-xl mb-4">
              <b>Venue:</b> {venue}
            </p>
            <p className="text-xl mb-4">
              <b>Date:</b> {date}
            </p>
            <p className="text-lg mb-4">{upperPara}</p>
            {speakers && speakers.length > 0 && (
              <ul className="ps-5 list-disc marker:text-primary text-base">
                {speakers.map((speaker, index) => (
                  <li key={index}> {speaker}</li>
                ))}
              </ul>
            )}
            {speakersDateBased && speakersDateBased.length > 0 && (
              <div>
                {speakersDateBased.map((group, index) => (
                  <div key={index}>
                    <h3 className="text-lg mb-4">{group.date}</h3>
                    <ul className="ps-5 list-disc marker:text-primary text-base">
                      {group.speak.map((speak, idx) => (
                        <li key={idx}>{speak}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="w-[40%]">
            <div className="w-full h-[300px]">
              <img
                src="/baad-lion-blue.webp"
                className="w-full h-full object-contain"
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Content;
