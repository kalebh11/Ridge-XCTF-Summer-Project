import React from "react";
import { Athlete } from "../RosterPage";
import "../Roster.scss";

interface Props {
  athleteList: Athlete[];
}
const DistanceTable: React.FC<Props> = ({ athleteList }) => {
  return (
    <table>
      <thead>
        <tr>
          <th className="table-cell group">Group</th>
          <th className="table-cell name">Name</th>
          <th className="table-cell grade">Grade</th>
          <th className="table-cell vdot">VDOT</th>
          <th className="table-cell distance-events">400</th>
          <th className="table-cell distance-events">800</th>
          <th className="table-cell distance-events">1200</th>
          <th className="table-cell distance-events">1600</th>
          <th className="table-cell distance-events">3200</th>
        </tr>
      </thead>
      <tbody>
        {athleteList.map((item) => (
          <tr key={item.id}>
            <td className="table-cell group">{item.group}</td>
            <td className="table-cell name">
              <a href="#">{item.name}</a>
            </td>
            <td className="table-cell grade">{item.grade}</td>
            <td className="table-cell vdot">{item.vdot}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DistanceTable;
