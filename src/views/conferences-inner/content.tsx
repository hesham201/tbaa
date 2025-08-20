import React from "react";

const Content = ({
  venue,
  date,
  speakers,
  speakersDateBased,
  upperPara,
}: {
  venue: string;
  date: string;
  upperPara: string;
  speakers?: string[];
  speakersDateBased?: { date: string; speak: string[] }[];
}) => {
  return (
    <div>
      <p>
        <b>Venue:</b> {venue}
      </p>
      <p>
        <b>Date:</b> {date}
      </p>
      <p>{upperPara}</p>
      {speakers && speakers.length > 0 && (
        <ul>
          {speakers.map((speaker, index) => (
            <li key={index}> {speaker}</li>
          ))}
        </ul>
      )}
      {speakersDateBased && speakersDateBased.length > 0 && (
        <div>
          {speakersDateBased.map((group, index) => (
            <div key={index}>
              <h3>{group.date}</h3>
              <ul>
                {group.speak.map((speak, idx) => (
                  <li key={idx}>{speak}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Content;
