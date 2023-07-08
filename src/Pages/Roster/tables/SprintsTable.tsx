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
          <th className="table-cell group">Group</th>
          <th className="table-cell name">Name</th>
          <th className="table-cell grade">Grade</th>
          <th className="table-cell sprint-events">100</th>
          <th className="table-cell sprint-events">200</th>
          <th className="table-cell sprint-events">400</th>
          <th className="table-cell sprint-events">800</th>
          <th className="table-cell sprint-options">Jumps</th>
          <th className="table-cell sprint-options">Hurdles</th>
        </tr>
      </thead>
      <tbody>
        {athleteList.map((item) => (
          <tr key={item.id}>
            <td className="table-cell group">{item.group}</td>
            <td className="table-cell name">{item.name}</td>
            <td className="table-cell grade">{item.grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SprintsTable;
