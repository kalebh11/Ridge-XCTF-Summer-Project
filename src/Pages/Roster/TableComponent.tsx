import React from "react";
import { Athlete, DistanceAthlete } from "./RosterPage";

interface Props {
  athleteList: Athlete[];
}
const TableComponent: React.FC<Props> = ({ athleteList }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Group</th>
          <th>Grade</th>
          <th>VDOT</th>
        </tr>
      </thead>
      <tbody>
        {athleteList.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.group}</td>
            <td>{item.grade}</td>
            <td>{item.vdot}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
