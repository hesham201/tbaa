import React from "react";
import Container from "@/components/container";
import { TESTIMONIALS } from "@/constant/data";
import Image from "next/image";
const TestimonialMain = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="grid gap-10">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.name}
              className={`py-7 px-10 rounded-4xl flex flex-row items-center gap-16 ${
                item.reverse ? "flex-row-reverse" : ""
              }`}
              style={{
                background: "linear-gradient(to right,#CFAE91,#031A37)",
              }}
            >
              <div className="text-white grow">
                <div className="flex gap-1 mb-3 flex-row">
                  <Image
                    src={"/star.svg"}
                    alt="stars"
                    width={100}
                    height={100}
                    className="w-[30px] h-[30px]"
                  />
                  <Image
                    src={"/star.svg"}
                    alt="stars"
                    width={100}
                    height={100}
                    className="w-[30px] h-[30px]"
                  />
                  <Image
                    src={"/star.svg"}
                    alt="stars"
                    width={100}
                    height={100}
                    className="w-[30px] h-[30px]"
                  />
                  <Image
                    src={"/star.svg"}
                    alt="stars"
                    width={100}
                    height={100}
                    className="w-[30px] h-[30px]"
                  />
                  <Image
                    src={"/star.svg"}
                    alt="stars"
                    width={100}
                    height={100}
                    className="w-[30px] h-[30px]"
                  />
                </div>
                <h2 className="text-3xl mb-4">{item.name}</h2>
                <p
                  className="text-lg"
                  dangerouslySetInnerHTML={{ __html: item.para }}
                />
              </div>
              <div className="w-[200px] shrink-0 h-[200px]">
                <Image
                  src={"/profile.jpg"}
                  width={300}
                  className="w-full h-full object-cover rounded-full"
                  height={300}
                  alt={item.name}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TestimonialMain;
