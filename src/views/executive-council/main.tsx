import Banner from "@/components/banner";
import { EXECTIVE_COUNCIL_BANNER } from "@/constant/data";
import React from "react";
import Content from "./content";
import ExecutiveTeam from "./executive-team";

const Main = () => {
  return (
    <>
      <Banner data={EXECTIVE_COUNCIL_BANNER} />
      <Content />
      <ExecutiveTeam />
    </>
  );
};

export default Main;
