import React from "react";
import Container from "@/components/container";
import { PROGRAMME_DATA, LINEUP_DATA } from "@/constant/data2";
import Image from "next/image";
import Button from "@/components/button";
import Link from "next/link";

const ThePrograme = () => {
  return (
    <div>
      <div className="pt-16">
        <Container>
        {/* The Programme Section */}
        <div className="mb-20">
          <h2 className="text-center text-5xl mb-10">
            <span className="text-6xl text-outline">The</span>
            <span className="text-6xl ml-2 text-midnight">Programme</span>
          </h2>

          {/* Friday Programme */}
          <div className="mb-10">
            <div className="bg-midnight text-white rounded py-6 text-center text-3xl font-bold">
              {PROGRAMME_DATA.friday.date}
            </div>
            <div className="">
              {/* Header row */}
              <div className="grid grid-cols-4 bg-[#D5B78C] text-white">
                <div className="col-span-1 border-r border-black flex items-center justify-center">
                  <span className="py-4 text-3xl">TIME</span>
                </div>
                <div className="col-span-3 flex items-center justify-center">
                  <span className="py-4 text-3xl">EVENT</span>
                </div>
              </div>

              {/* Schedule rows */}
              {PROGRAMME_DATA.friday.schedule.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 border-t border-black"
                >
                  <div className="col-span-1 border-l border-r border-b bg-[#f3f3f3] border-black flex items-center justify-center">
                    <span className="py-4 font-midnight">{item.time}</span>
                  </div>
                  <div className="col-span-3 border-r border-b bg-[#f3f3f3] border-black py-4 px-6 text-center">
                    <div className="font-bold font-midnight">
                      {item.event}
                    </div>
                    {item.description && (
                      <div className="text-sm font-midnight">{item.description}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Saturday Programme */}
          <div>
            <div className="bg-midnight text-white rounded py-6 mx-auto text-center text-3xl font-bold">
              {PROGRAMME_DATA.saturday.date}
            </div>
            <div className="">
              {/* Header row */}
              <div className="grid grid-cols-4 bg-[#D5B78C] text-white">
                <div className="col-span-1 border-r border-black flex items-center justify-center">
                  <span className="py-4 text-3xl">TIME</span>
                </div>
                <div className="col-span-3 flex items-center justify-center">
                  <span className="py-4 text-3xl">EVENT</span>
                </div>
              </div>

              {/* Schedule rows */}
              {PROGRAMME_DATA.saturday.schedule.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 border-t border-black"
                >
                  <div className="col-span-1 border-l border-r bg-[#f3f3f3] border-b border-black flex items-center justify-center">
                    <span className="py-4 font-midnight">{item.time}</span>
                  </div>
                  <div className="col-span-3 border-r bg-[#f3f3f3] border-b border-black py-4 px-6 text-center">
                    <div className="font-bold font-midnight">{item.event}</div>
                    {item.description && (
                      <div className="text-sm font-midnight">{item.description}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6">
              <Button
                href="#"
                className="rounded"
              >
                BOOK NOW
              </Button>
            </div>
          </div>
        </div>
      </Container>
      </div>

      {/* BAAD LINE UP Section - moved outside Container for full-width background */}
      <div className="bg-[#f3f3f3] pt-16">
        <Container>
          <h2 className="text-center text-5xl mb-10">
            <span className="text-6xl text-outline">The</span>
            <span className="text-6xl ml-2 text-midnight">BAAD LINE UP</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 pb-16">
  {/* Render all except the last 2 */}
  {LINEUP_DATA.slice(0, -2).map((speaker, index) => (
    <div key={index} className="flex flex-col items-center w-full">
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
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 z-20">
          {speaker.name === "Dr. Marco Veneziani" ? (
            <a href="/speaker-profile/dr-marco-veneziani">
              <p className="bg-midnight text-white px-6 py-2 rounded-lg font-semibold shadow-lg text-lg">
                Bio
              </p>
            </a>
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
  <div className="lg:col-span-3 flex justify-center gap-12">
    {LINEUP_DATA.slice(-2).map((speaker, index) => (
      <div key={index} className="flex flex-col items-center w-full max-w-sm">
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
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 z-20">
            <Link href={"/dr-marco-veneziani"} className="bg-midnight text-white px-6 py-2 rounded-lg font-semibold shadow-lg text-lg">
              Bio
            </Link>
          </div>
        </div>
        <h3 className="text-xl font-bold text-center mt-2">
          {speaker.name}
        </h3>
      </div>
    ))}
  </div>
</div>

        </Container>
      </div>
    </div>
  );
};

export default ThePrograme;
