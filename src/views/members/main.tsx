import React from "react";
import MembersTable from "./members-table";
import Banner from "@/components/banner";
import { MEMBERS_BANNER } from "@/constant/data";

const Main = () => {
  return (
    <>
      <Banner data={MEMBERS_BANNER} />
      <MembersTable />
    </>
  );
};

export default Main;
