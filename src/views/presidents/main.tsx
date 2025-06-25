import Banner from "@/components/banner";
import { PAST_PRESIDENTS_BANNER } from "@/constant/data";
import React from "react";
import Content from "./content";
import ExecutiveTeam from "./executive-team";
import Faqs from "@/components/faqs";

const Main = () => {
  return (
    <>
      <Banner data={PAST_PRESIDENTS_BANNER} />
      <Content />
      <ExecutiveTeam />
      <Faqs />
    </>
  );
};

export default Main;
