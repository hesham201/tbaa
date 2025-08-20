import { notFound } from "next/navigation";
import { ROUTABLE_CARDS } from "@/constant/data";
import Main from "@/views/conferences-inner/main";
import { IWithLink } from "@/types";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  // Find the conference matching the slug
  const conf: IWithLink | undefined = ROUTABLE_CARDS.find(
    (c) => c.link === slug
  );
  if (!conf) notFound();

  if (!conf) {
    notFound();
  }
  return (
    <>
      <Main data={conf} />
    </>
  );
};

export default page;
