import React from "react";
import Banner from "./banner";
import ContactDetails from "./contact-details";
import WholeMap from "./whole-map";
import ContactForm from "./contact-form";

const Main = () => {
  return (
    <>
      <Banner />
      <ContactForm />
      <ContactDetails />
      <WholeMap />
    </>
  );
};

export default Main;
