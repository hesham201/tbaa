"use client";
import React, { useState } from "react";
import Container from "@/components/container";
import { MEMBERS_DATA } from "@/constant/data2";

const MembersCategoryTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(MEMBERS_DATA.length);

  const filteredMembers = MEMBERS_DATA.filter(
    (item) =>
      item.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.surname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-1 mb-5">
      <Container>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border-b border-gray-300 rounded w-full md:w-[50%] lg:w-[30%] focus:outline-none"
          />
        </div>
        <div className="overflow-x-auto w-full">
          {filteredMembers.length === 0 ? (
            <p className="p-4 text-center text-midnight">No member found</p>
          ) : (
            <table className="table-auto text-midnight w-full">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-3 bg-gray-100 w-1/4">
                    First Name
                  </th>
                  <th className="border border-gray-300 p-3 bg-gray-100 w-1/4">Surname</th>
                  <th className="border border-gray-300 p-3 bg-gray-100 w-1/4">
                    Member Type
                  </th>
                  <th className="border border-gray-300 p-3 bg-gray-100 w-1/4">Category</th>
                </tr>
              </thead>
              <tbody className="text-[12px] md:text-sm">
                {filteredMembers.map((item, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="p-4 border border-gray-300">
                      {item.firstname}
                    </td>
                    <td className="p-4 border border-gray-300">
                      {item.surname}
                    </td>
                    <td className="p-4 border border-gray-300">
                      {item.memberType}
                    </td>
                    <td className="p-4 border border-gray-300">
                      {item.category}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </Container>
    </div>
  );
};

export default MembersCategoryTable;