import React from "react";
import SpeakerContent from "./speaker-content";

interface MainProps {
  speakerId?: string;
}

const Main: React.FC<MainProps> = ({ speakerId }) => {
  return (
    <div>
      <SpeakerContent speakerId={speakerId} />
    </div>
  );
};

export default Main;