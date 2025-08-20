"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Props = {
  data: string[];
};

export default function GalleryGrid4({ data }: Props) {
  const [index, setIndex] = useState<number>(-1);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {data.map((src, i) => (
          <button
            key={`${src}-${i}`}
            onClick={() => setIndex(i)}
            aria-label={`Open image ${i + 1}`}
            className="relative aspect-[4/3] overflow-hidden rounded-xl group"
          >
            <Image
              src={`/${src}`}
              alt=""
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={data.map((src) => ({ src: `/${src}` }))}
      />
    </div>
  );
}
