import { notFound } from "next/navigation";
import { SCIENTIFIC_CARDS } from "@/constant/data";
import Main from "@/views/conferences-inner/main";
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  // Find the conference matching the slug
  const conf = SCIENTIFIC_CARDS.find((c) => c.link === slug);

  if (!conf) {
    notFound();
  }
  return (
    <>
      <Main />
    </>
  );
};

export default page;
