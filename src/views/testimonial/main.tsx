import Banner from "@/components/banner";
import Faqs from "@/components/faqs";
import { TESTIMONIALS_BANNER } from "@/constant/data";
import React from "react";
import TestimonialMain from "./testimonial-main";

const Main = () => {
  return (
    <>
      <Banner data={TESTIMONIALS_BANNER} />
      <TestimonialMain />
      <Faqs />
    </>
  );
};

export default Main;
