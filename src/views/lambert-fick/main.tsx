import React from "react";
// import Banner from "./banner";
import Content from "./content";
import Faqs from "@/components/faqs";
import Banner from "@/components/banner";
import { LAM_BANNER } from "@/constant/data";

const Main = () => {
  return (
    <>
      {/* <Banner /> */}
      <Banner data={LAM_BANNER} />
      <Content />
      <Faqs />
    </>
  );
};

export default Main;
