import React from "react";
// import Banner from "@//banner";
import Content from "./content";
import Banner from "@/components/banner";
import { FULL_MEMBER_BANNER } from "@/constant/data";
import Faqs from "@/components/faqs";

const Main = () => {
  return (
    <>
      {/* <Banner /> */}
      <Banner data={FULL_MEMBER_BANNER} />
      <Content />
      <Faqs />
    </>
  );
};

export default Main;
