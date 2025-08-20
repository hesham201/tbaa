"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const photos = [
  { src: "/images/1.jpg", width: 800, height: 600 },
  { src: "/images/2.jpg", width: 1600, height: 900 },
  { src: "/images/3.jpg", width: 1200, height: 1200 },
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Animate each photo when it scrolls into view
  useGSAP(() => {
    const tiles = containerRef.current?.querySelectorAll(".photo-tile");
    tiles?.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
      });
    });
  }, []);

  return (
    <div ref={containerRef}>
      <PhotoAlbum
        layout="rows"
        photos={photos}
        onClick={({ index }) => setIndex(index)}
        renderPhoto={({ photo, wrapperStyle }) => (
          <div
            className="photo-tile overflow-hidden rounded-xl"
            style={wrapperStyle}
          >
            <Image
              src={photo.src}
              alt=""
              width={photo.width}
              height={photo.height}
              className="object-cover w-full h-full"
            />
          </div>
        )}
      />

      {/* Lightbox for fullscreen view */}
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
}
