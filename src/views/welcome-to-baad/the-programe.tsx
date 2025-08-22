"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Container from "@/components/container";
import { PROGRAMME_DATA, SPEAKER_DATA } from "@/constant/data2";
import Button from "@/components/button";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);
const ThePrograme = () => {
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  useGSAP(() => {
    containerRefs.current.forEach((container) => {
      if (!container) return;

      gsap.from(container, {
        yPercent: 10,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
        },
      });
      const image = container.querySelector("img");
      if (!image) return;

      gsap.fromTo(
        image,
        {
          y: "-10%",
          scale: 1.2,
        },
        {
          y: "10%",
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  });
  return (
    <div>
      <div className="pt-16">
        <Container>
          <div className="mb-20">
            <h2 className="text-center text-5xl mb-10">
              <span className="text-4xl md:text-6xl text-outline">The</span>
              <span className="text-4xl md:text-6xl ml-2 text-midnight">
                Programme
              </span>
            </h2>
            <div className="mb-10">
              <div className="bg-midnight text-white rounded py-6 text-center text-3xl font-bold">
                {PROGRAMME_DATA.friday.date}
              </div>
              <div className="">
                <div className="grid grid-cols-4 bg-primary text-white">
                  <div className="col-span-1 border-r border-black flex items-center justify-center">
                    <span className="py-4 text-3xl">TIME</span>
                  </div>
                  <div className="col-span-3 flex items-center justify-center">
                    <span className="py-4 text-3xl">EVENT</span>
                  </div>
                </div>

                {PROGRAMME_DATA.friday.schedule.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-4 border-t border-black">
                    <div className="col-span-1 border-l border-r border-b bg-[#f3f3f3] border-black flex items-center justify-center">
                      <span className="px-4 lg:px-0 py-4 font-midnight">
                        {item.time}
                      </span>
                    </div>
                    <div className="col-span-3 border-r border-b bg-[#f3f3f3] border-black py-4 px-6 text-center">
                      {item.link ? (
                        <Link
                          href={item.link || "#"}
                          className="font-bold font-midnight"
                          dangerouslySetInnerHTML={{
                            __html: item.event,
                          }}></Link>
                      ) : (
                        <div
                          className="font-bold font-midnight"
                          dangerouslySetInnerHTML={{
                            __html: item.event,
                          }}></div>
                      )}
                      {item.description && (
                        <div className="text-sm font-midnight">
                          {item.description}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-midnight text-white rounded py-6 mx-auto text-center text-3xl font-bold">
                {PROGRAMME_DATA.saturday.date}
              </div>
              <div className="">
                <div className="grid grid-cols-4 bg-primary text-white">
                  <div className="col-span-1 border-r border-black flex items-center justify-center">
                    <span className="py-4 text-3xl">TIME</span>
                  </div>
                  <div className="col-span-3 flex items-center justify-center">
                    <span className="py-4 text-3xl">EVENT</span>
                  </div>
                </div>
                {PROGRAMME_DATA.saturday.schedule.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-4 border-t border-black">
                    <div className="col-span-1 border-l border-r bg-[#f3f3f3] border-b border-black flex items-center justify-center">
                      <span className="px-4 lg:px-0 py-4 font-midnight">
                        {item.time}
                      </span>
                    </div>
                    <div className="col-span-3 border-r bg-[#f3f3f3] border-b border-black  text-center">
                      {item.link ? (
                        <div className="pt-4 px-6">
                          <Link
                            href={item.link || "#"}
                            className="font-bold font-midnight ">
                            {item.event}
                          </Link>
                        </div>
                      ) : (
                        <div
                          className="font-bold font-midnight"
                          dangerouslySetInnerHTML={{
                            __html: item.event,
                          }}></div>
                      )}
                      {item.description && (
                        <div className="text-sm font-midnight mb-4">
                          {item.description}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-6">
                <Button href="/book-now">
                  BOOK NOW
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-[#f3f3f3] py-10">
        <Container>
          <h2 className="text-center text-5xl mb-10">
            <span className="text-6xl text-outline">The</span>
            <span className="text-6xl ml-2 text-midnight">BAAD LINE UP</span>
          </h2>

          <div className="flex flex-row flex-wrap justify-center gap-12 px-4 pb-16">
            {/* Render all except the last 2 */}
            {SPEAKER_DATA.map((speaker, index) => (
              <div
                key={index}
                className="flex md:w-[calc(50%-24px)] lg:w-[calc(33.3%-34px)] flex-col items-center w-full">
                <div className="relative w-full  mb-4 overflow-hidden group cursor-pointer">
                  <Link href={`/2026-sc/${speaker.slug}`}>
                    <div
                      ref={(el) => {
                        containerRefs.current[index] = el;
                      }}
                      className="relative h-[400px] overflow-hidden rounded-xl">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="absolute top-0 left-0 w-full h-full object-cover will-change-transform pointer-events-none"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-midnight/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </Link>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 ">
                    {speaker.slug ? (
                      <Link
                        href={`/2026-sc/${speaker.slug}`}
                        className="bg-midnight text-white px-6 py-2 rounded-lg font-semibold shadow-lg text-lg">
                        Bio
                      </Link>
                    ) : (
                      <p className="bg-midnight text-white px-6 py-2 rounded-lg font-semibold shadow-lg text-lg">
                        Bio
                      </p>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mt-2">
                  {speaker.name}
                </h3>
              </div>
            ))}
            {/* Render last 2 centered */}
            {/* <div className="lg:col-span-3 flex justify-center gap-12">
              {SPEAKER_DATA.slice(-2).map((speaker, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-full max-w-sm"
                >
                  <div className="relative w-full aspect-square mb-4 overflow-hidden group cursor-pointer">
                    <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        className="object-contain"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-midnight/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100">
                      {speaker.slug ? (
                        <Link
                          href={`/2026-sc/${speaker.slug}`}
                          className="bg-midnight text-white px-6 py-2 rounded-lg font-semibold shadow-lg text-lg"
                        >
                          Bio
                        </Link>
                      ) : (
                        <p className="bg-midnight text-white px-6 py-2 rounded-lg font-semibold shadow-lg text-lg">
                          Bio
                        </p>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mt-2">
                    {speaker.name}
                  </h3>
                </div>
              ))}
            </div> */}
          </div>
          <div className="flex items-center justify-center">
            <Button href="/book-now">BOOK NOW</Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ThePrograme;
