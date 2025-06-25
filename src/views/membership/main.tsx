import Banner from "@/components/banner";
import Faqs from "@/components/faqs";
import { MEMBERSHIP_BANNER } from "@/constant/data";
import React from "react";
import MembershipAcademy from "./membership-academy";
import CurrentAcademy from "./current-academy";

const Main = () => {
  return (
    <>
      <Banner data={MEMBERSHIP_BANNER} />
      <MembershipAcademy />
      <CurrentAcademy />
      <Faqs />
    </>
  );
};

export default Main;
