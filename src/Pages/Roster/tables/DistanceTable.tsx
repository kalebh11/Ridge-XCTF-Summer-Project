import React from "react";
import { Athlete, DistanceAthlete } from "../RosterPage";

interface Props {
  athleteList: Athlete[];
}
const DistanceTable: React.FC<Props> = ({ athleteList }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Group</th>
          <th>Grade</th>
          <th>VDOT</th>
          <th>400</th>
          <th>800</th>
          <th>1200</th>
          <th>1600</th>
          <th>3200</th>
        </tr>
      </thead>
      <tbody>
        {athleteList.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.group}</td>
            <td>{item.grade}</td>
            <td>{(item as DistanceAthlete).vdot}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DistanceTable;
