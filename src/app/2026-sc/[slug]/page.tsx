import { Metadata } from "next";
import { SPEAKER_DATA } from "@/constant/data2";
import Main from "@/views/speaker-profile/main";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  const speaker = SPEAKER_DATA.find((speaker) => speaker.slug === slug) || SPEAKER_DATA[0];
  
  return {
    title: speaker.name,
    description: speaker.title,
  };
}

const SpeakerProfilePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const speakerIndex = SPEAKER_DATA.findIndex((speaker) => speaker.slug === slug);
  const speakerId = speakerIndex >= 0 ? speakerIndex.toString() : "0";
  
  return <Main speakerId={speakerId} />;
};

export default SpeakerProfilePage;
