import React from "react";
import { Athlete } from "../RosterPage";
import "../Roster.scss";
interface Props {
  athleteList: Athlete[];
}
const ThrowsTable: React.FC<Props> = ({ athleteList }) => {
  return (
    <table>
      <thead>
        <tr>
          <th className="table-cell group">Group</th>
          <th className="table-cell name">Name</th>
          <th className="table-cell grade">Grade</th>
          <th className="table-cell throws-event">Javelin</th>
          <th className="table-cell throws-event">Discus</th>
          <th className="table-cell throws-event">Shot Put</th>
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

export default ThrowsTable;
