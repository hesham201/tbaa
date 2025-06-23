import Banner from "@/components/banner";
import { ABOUT_US_BANNER } from "@/constant/data";
import React from "react";
import Purpose from "./purpose";
import OrganisationMeetings from "./organisation-meetings";

const Main = () => {
  return (
    <>
      <Banner data={ABOUT_US_BANNER} />
      <Purpose />
      <OrganisationMeetings />
    </>
  );
};

export default Main;
