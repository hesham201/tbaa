import Container from "@/components/container";
import { MEMBERS_DATA } from "@/constant/data";
import React from "react";

const MembersTable = () => {
  console.log(MEMBERS_DATA.length);
  return (
    <div className="mt-1">
      <Container>
        <div>
          <table className="table-auto">
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
              {MEMBERS_DATA.map((item, i) => (
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
                    {item.website}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default MembersTable;
