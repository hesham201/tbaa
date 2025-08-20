import Image from "next/image";
import Container from "@/components/container";
import React from "react";

const posters = [
  {
    src: "/poster-one.png",
    alt: "Who's Baad – The Thrill of the Drill poster",
  },
  {
    src: "/poster-two.png",
    alt: "Save the Date – Annual Conference poster",
  },
  {
    src: "/poster-three.png",
    alt: "The Annual Themed Dinner poster",
  },
];

function ImagesThree() {
  return (
    <div className="py-10">
      <Container>
        <div className="mb-10 flex justify-center">
          <a
            href="#booking-form"
            className="text-sm md:text-base italic underline decoration-red-500 decoration-2 underline-offset-4 text-red-600 hover:text-red-700">
            PLEASE SCROLL DOWN FOR THE BOOKING FORM
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posters.map((p, i) => (
            <div
              key={i}
              className="relative w-full overflow-hidden border border-neutral-200"
              style={{ aspectRatio: "3/4" }}>
              <Image
                src={p.src}
                alt={p.alt}
                fill
                priority={i === 0}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Big heading */}
        <h2 className="mt-10 text-center text-4xl font-extrabold uppercase tracking-tight md:text-6xl lg:text-7xl">
          Book Your Place Today
        </h2>
      </Container>
    </div>
  );
}

export default ImagesThree;
