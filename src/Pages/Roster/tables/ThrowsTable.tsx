import React from "react";
import { Athlete } from "../RosterPage";

interface Props {
  athleteList: Athlete[];
}
const ThrowsTable: React.FC<Props> = ({ athleteList }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Group</th>
          <th>Grade</th>
          <th>Javelin</th>
          <th>Discus</th>
          <th>Shot Put</th>
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

export default ThrowsTable;
