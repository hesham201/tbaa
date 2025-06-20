import React from "react";
import MasterClasses from "./masterclass-card";
import Banner from "@/components/banner";
import { MASTER_CLASSES_BANNER } from "@/constant/data";
// import MasterClassesNew from "./masterclass-card-new";

const Main = () => {
  return (
    <>
      <Banner data={MASTER_CLASSES_BANNER} />
      <MasterClasses />
      {/* <MasterClassesNew /> */}
    </>
  );
};

export default Main;
