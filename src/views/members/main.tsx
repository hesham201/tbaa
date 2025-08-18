import React from "react";
import MembersCategoryTable from "./members-category-table";
import Banner from "@/components/banner";
import { MEMBERS_BANNER } from "@/constant/data";

const Main = () => {
  return (
    <>
      <Banner data={MEMBERS_BANNER} />
      <MembersCategoryTable />
    </>
  );
};

export default Main;
