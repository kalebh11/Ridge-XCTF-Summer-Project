import React from "react";
import { Athlete } from "../RosterPage";

interface Props {
  athleteList: Athlete[];
}
const SprintsTable: React.FC<Props> = ({ athleteList }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Group</th>
          <th>Grade</th>
          <th>100</th>
          <th>200</th>
          <th>400</th>
          <th>800</th>
          <th>110mH</th>
          <th>400mH</th>
        </tr>
      </thead>
      <tbody>
        {athleteList.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.group}</td>
            <td>{item.grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SprintsTable;
