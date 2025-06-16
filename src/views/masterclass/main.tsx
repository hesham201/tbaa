import React from "react";
import MasterClasses from "./masterclass-card";
import Banner from "@/components/banner";
import { MASTER_CLASSES_BANNER } from "@/constant/data";

const Main = () => {
  return (
    <>
      <Banner data={MASTER_CLASSES_BANNER} />
      <MasterClasses />
    </>
  );
};

export default Main;
