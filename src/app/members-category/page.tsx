import React from "react";
import Banner from "@/components/banner";
import { MEMBERS_BANNER } from "@/constant/data";
import MembersCategoryTable from "@/views/members/members-category-table";

const MembersCategoryPage = () => {
  return (
    <div>
      <Banner data={MEMBERS_BANNER} />
      <MembersCategoryTable />
    </div>
  );
};

export default MembersCategoryPage;