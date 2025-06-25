import React from "react";
// import Banner from "./banner";
import Content from "./content";
import Faqs from "@/components/faqs";
import { HISTORY_BANNER } from "@/constant/data";
import Banner from "@/components/banner";

const Main = () => {
  return (
    <>
      {/* <Banner /> */}
      <Banner data={HISTORY_BANNER} />
      <Content />
      <Faqs />
    </>
  );
};

export default Main;
