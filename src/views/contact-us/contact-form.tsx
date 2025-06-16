"use client";

import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import Container from "@/components/container";
import React from "react";

const ContactForm = () => {
  const animRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const jsonPaths = ["/location.json", "/incoming-call.json", "/email.json"];
  const labels = [
    "Gower House, 18 Ashmere Lane, Felpham, West Sussex, PO22 7QT",
    "+44 (0)1243 585577",
    "info@baad.org.uk",
  ];

  useEffect(() => {
    const animations = animRefs.map((ref, index) => {
      if (!ref.current) return null;

      return lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: jsonPaths[index],
      });
    });

    return () => {
      animations.forEach((anim) => anim?.destroy());
    };
  }, []);
  return (
    <div className="py-12 relative">
      <div className="absolute inset-0 h-full w-[75%] bg-primary"></div>
      <Container>
        <div className="grid grid-cols-2 gap-8 relative">
          <div className="text-white">
            <h2 className="mb-4 text-3xl">
              Have a project or an idea you&apos;d like to collaborate with Us?
              Let&apos;s get in touch!
            </h2>
            <p className="text-lg">
              If you need help with your reservation, need support, or just want
              to say hi, feel free to get in touch with below.
            </p>
            <div className="mt-4">
              {animRefs.map((ref, index) => (
                <div key={index} className="flex flex-row gap-3 items-center">
                  <div ref={ref} className="w-[50px] h-[50px]" />
                  <p className="mt-2 text-center font-medium text-white">
                    {labels[index]}
                  </p>
                </div>
              ))}
            </div>
            <div></div>
            <div></div>
          </div>
          <div className="bg-primary py-10 px-4 shadow-2xl">
            <h3 className="text-4xl mb-4 text-white">Get In Touch</h3>
            <form action="">
              <div className="flex flex-col gap-4">
                <input
                  className="border-white placeholder:text-white border bg-transparent h-[43px] p-4  focus:outline-none"
                  placeholder="Type your name"
                  type="text"
                />
                <input
                  type="email"
                  className="border-white placeholder:text-white border bg-transparent h-[43px] p-4  focus:outline-none"
                  placeholder="Type your Email Address"
                />
                <textarea
                  name=""
                  id=""
                  className="form-control placeholder:text-white p-4 w-full h-[120px] bg-transparent border border-white text-white focus:outline-none"
                  placeholder="Tell us about you and the world"
                ></textarea>
              </div>
              <div className="mt-3">
                <button
                  type="submit"
                  className="text-xl uppercase cursor-pointer text-white px-7  py-2 border border-white"
                >
                  send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactForm;
