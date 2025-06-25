"use client";
import React, { useState } from "react";
import Container from "@/components/container";
import { MEMBERS_DATA } from "@/constant/data";
import Link from "next/link";

const MembersTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(MEMBERS_DATA.length);

  const filteredMembers = MEMBERS_DATA.filter(
    (item) =>
      item.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.surname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-1">
      <Container>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border-b  border-gray-300 rounded w-[20%] focus:outline-none"
          />
        </div>
        <div>
          {filteredMembers.length === 0 ? (
            <p className="p-4 text-center text-midnight">No member found</p>
          ) : (
            <table className="table-auto text-midnight">
              <thead>
                <tr>
                  <th className="border border-gray-300 ...">
                    First <br /> Name
                  </th>
                  <th className="border border-gray-300 ...">Surname</th>
                  <th className="border border-gray-300 ...">
                    Member <br /> Type
                  </th>
                  <th className="border border-gray-300 ...">Address</th>
                  <th className="border border-gray-300 ...">Town/City</th>
                  <th className="border border-gray-300 ...">Country</th>
                  <th className="border border-gray-300 ...">Post Code</th>
                  <th className="border border-gray-300 ...">Telephone</th>
                  <th className="border border-gray-300 ...">Email</th>
                  <th className="border border-gray-300 ...">Website</th>
                </tr>
              </thead>
              <tbody className="text-[12px]">
                {filteredMembers.map((item, i) => (
                  <tr key={i}>
                    <td className="p-4 border  border-gray-300 ...">
                      {item.firstname}
                    </td>
                    <td className="p-4 border border-gray-300 ...">
                      {item.surname}
                    </td>
                    <td className="p-4 border border-gray-300 ...">
                      {item.memberType}
                    </td>
                    <td className="p-4 w-fit border border-gray-300 ...">
                      {item.address}
                    </td>
                    <td className="p-4 border border-gray-300 ...">
                      {item.city}
                    </td>
                    <td className="p-4 border border-gray-300 ...">
                      {item.country}
                    </td>
                    <td className="p-4 border border-gray-300 ...">
                      {item.postCode}
                    </td>
                    <td className="p-4 border border-gray-300 ...">
                      {item.telephone}
                    </td>
                    <td className="p-4 border border-gray-300 w-fit ...">
                      {item.email}
                    </td>
                    <td className="p-4 border w-fit border-gray-300 ...">
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.website}
                      </Link>
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

export default MembersTable;
