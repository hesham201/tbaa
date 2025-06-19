"use client";

import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import Container from "@/components/container";

const ContactDetails = () => {
  const animRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const jsonPaths = [
    "/updated_location_cfae91_min.json",
    "/updated_incoming_call_cfae91_min.json",
    "/updated_email_cfae91_fixed_min.json",
  ];
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
    <div className="py-10">
      <Container>
        <div className="grid grid-cols-3 gap-5">
          {animRefs.map((ref, index) => (
            <div key={index} className="flex flex-col items-center">
              <div ref={ref} className="w-[100px] h-[100px]" />
              <p className="mt-2 text-center font-medium text-gray-800">
                {labels[index]}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ContactDetails;
