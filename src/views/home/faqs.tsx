"use client";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import OpenFaq from "./open-faq";
import Container from "@/components/container";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);
const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number>(-1);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bgWrapperRefFAQS = useRef<HTMLDivElement>(null);
  const bgImageRefFaqs = useRef<HTMLImageElement>(null);
  const faqItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    if (!bgWrapperRefFAQS.current || !bgImageRefFaqs.current) return;
    const timeout = setTimeout(() => {
      const split = new SplitType("#faqs-spans-animation", {
        types: "words,chars",
      });
      gsap.fromTo(
        split.chars,
        {
          color: "#1A1A1A",
        },
        {
          color: "#987F51",
          duration: 0.6,
          scrollTrigger: {
            trigger: bgWrapperRefFAQS.current,
            scroller: "[data-scroll-container]", // Remove if not using Locomotive Scroll
            start: "top 65%",
            end: "top 45%",
          },
        }
      );
      gsap.fromTo(
        bgImageRefFaqs.current,
        {
          y: "-34%", // Start position (slightly above)
        },
        {
          y: "34%", // End position (slightly below)
          ease: "none",
          scrollTrigger: {
            trigger: bgWrapperRefFAQS.current,
            scroller: "[data-scroll-container]", // Remove if not using Locomotive Scroll
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
      faqItemRefs.current.forEach((item) => {
        if (!item) return;

        gsap.fromTo(
          item,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%", // trigger point
              end: "bottom 60%",
              toggleActions: "play none none reverse",
              scroller: "[data-scroll-container]", // include only if using Locomotive
            },
          }
        );
      });
    }, 300);
    return () => clearTimeout(timeout);
  }, []);
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, i) => {
      if (ref) {
        ref.style.maxHeight = openIndex === i ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [openIndex]);
  const DENTAL_FAQ = [
    {
      question: "What is BAAD?",
      answer:
        "The British Academy of Aesthetic Dentistry (BAAD) is a professional organisation dedicated to promoting excellence in aesthetic and restorative dentistry through education, collaboration, and innovation.",
    },
    {
      question: "Who can become a member of BAAD?",
      answer:
        "BAAD membership is open to dental professionals who share a commitment to high standards in aesthetic dentistry, including general dentists, specialists, and dental technicians.",
    },
    {
      question: "What are the benefits of joining BAAD?",
      answer:
        "Members gain access to world-class education, networking with leading clinicians, invitations to exclusive events, and the opportunity to be part of a respected, like-minded community.",
    },
    {
      question: "Does BAAD offer educational events or conferences?",
      answer:
        "Yes. BAAD hosts an annual international conference as well as masterclasses led by globally recognised speakers.",
    },
    {
      question: "How do I register for an event or course?",
      answer:
        "You can view and register for upcoming events by going to the Masterclasses or Scientific Conferences section of our website. Early booking is advised as spaces are often limited.",
    },
    {
      question: "Is BAAD affiliated with any international organisations?",
      answer:
        "Yes. BAAD is a founding member of the International Federation of Esthetic Dentistry (IFED), offering global networking opportunities and shared resources.",
    },
    {
      question: "How do I apply to speak at a BAAD event?",
      answer:
        "We welcome speaker submissions from experienced clinicians. Please contact us via email with your proposal and relevant experience.",
    },
    {
      question: "How can I contact BAAD?",
      answer:
        "You can reach us via the contact form on the website, by email, or through our social media channels. We aim to respond to all enquiries within 2-5 working days.",
    },
  ];

  return (
    <div
      ref={bgWrapperRefFAQS}
      className="py-12 px-5 relative overflow-hidden"
      id="FAQS"
    >
      <img
        src="/menu-bg.webp"
        className="absolute top-0 left-0 w-full h-full object-cover will-change-transform pointer-events-none"
        ref={bgImageRefFaqs}
        alt=""
      />
      <Container>
        <h2 className="2xl:text-[54px] relative xl:text-[54px] lg:text-[54px] md:text-[44px] text-[30px] font-bold text-center text-[#1A1A1A] mb-8 px-4 playfair">
          Frequently Asked{" "}
          <span className="" id="faqs-spans-animation">
            Questions
          </span>
        </h2>
        <div className=" grid relative grid-cols-2 gap-8">
          {DENTAL_FAQ?.map((faq, index) => (
            <div
              key={faq?.question}
              ref={(el) => {
                faqItemRefs.current[index] = el;
              }}
              className={`bg-white shadow-md overflow-hidden h-fit rounded-2xl hover:shadow-[6px_4px_14px_1px_#dcdcdc] px-4 py-6 ${
                openIndex === index ? "border-2 border-primary" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <button
                className="w-full text-left font-Poppins font-medium text-[#170F49] flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
              >
                {faq?.question}
                <span
                  className={` font-Poppins px-[11px] py-2 rounded-full ${
                    openIndex === index
                      ? " bg-primary rotate-90"
                      : "text-primary bg-white hover:shadow-[6px_4px_14px_1px_#dcdcdc]"
                  }`}
                >
                  <OpenFaq />
                </span>
              </button>

              <div
                ref={(el) => {
                  contentRefs.current[index] = el;
                }}
                style={{ maxHeight: "0px" }}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="font-Poppins text-[#6F6C90] text-sm mt-2">
                  {faq?.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Faqs;
