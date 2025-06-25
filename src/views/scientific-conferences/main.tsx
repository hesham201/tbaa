import React from "react";
import Banner from "@/components/banner";
import { SCIENTIFIC_BANNER } from "@/constant/data";
import Faqs from "@/components/faqs";
import Content from "./content";
import SuperHero from "./super-hero";
import ScientificCard from "./scientific-card";
// import MasterClassesNew from "./masterclass-card-new";

const Main = () => {
  return (
    <>
      <Banner data={SCIENTIFIC_BANNER} />
      <Content />
      <SuperHero />
      {/* <MasterClasses /> */}
      <ScientificCard />
      {/* <MasterClassesNew /> */}
      <Faqs />
    </>
  );
};

export default Main;
