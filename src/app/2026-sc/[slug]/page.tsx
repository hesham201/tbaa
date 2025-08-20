import { Metadata } from "next";
import { SPEAKER_DATA } from "@/constant/data2";
import Main from "@/views/speaker-profile/main";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Find the speaker data based on the slug
  const speaker = SPEAKER_DATA.find((speaker) => speaker.slug === params.slug) || SPEAKER_DATA[0];
  
  return {
    title: speaker.name,
    description: speaker.title,
  };
}

export default function SpeakerProfilePage({ params }: { params: { slug: string } }) {
  // Find the speaker index based on the slug
  const speakerIndex = SPEAKER_DATA.findIndex((speaker) => speaker.slug === params.slug);
  const speakerId = speakerIndex >= 0 ? speakerIndex.toString() : "0";
  
  return <Main speakerId={speakerId} />;
}