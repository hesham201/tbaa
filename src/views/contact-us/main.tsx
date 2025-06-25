import React from "react";
import Banner from "./banner";
import ContactDetails from "./contact-details";
import WholeMap from "./whole-map";
import ContactForm from "./contact-form";
import Faqs from "@/components/faqs";

const Main = () => {
  return (
    <>
      <Banner />
      <ContactForm />
      <ContactDetails />
      <WholeMap />
      <Faqs />
    </>
  );
};

export default Main;
