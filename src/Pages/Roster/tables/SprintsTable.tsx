import React from "react";
import { Athlete } from "../RosterPage";

interface Props {
  athleteList: Athlete[];
}
const SprintsTable: React.FC<Props> = ({ athleteList }) => {
  const getColorCode = (group: number) => {
    // Define your color code logic here based on the input value
    if (group >= 1 && group <= 3) {
      return "red";
    } else if (group >= 4 && group <= 6) {
      return "orange";
    } else if (group >= 7 && group <= 9) {
      return "green"; // For other values, use the default color
    } else {
      return "gray";
    }
  };
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
            <td
              className="table-cell group"
              style={{
                backgroundColor: getColorCode(parseInt(item.group.slice(1))),
              }}
            >
              {item.group}
            </td>
            <td className="table-cell name">{item.name}</td>
            <td className="table-cell grade">{item.grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SprintsTable;
