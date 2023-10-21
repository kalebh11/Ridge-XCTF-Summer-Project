import React, { useEffect } from "react";
import { Athlete } from "../../../commons/athlete.model";

interface Props {
  athleteList: Athlete[];
  setAthletesList: React.Dispatch<React.SetStateAction<Athlete[]>>;
}
const SprintsTable: React.FC<Props> = ({ athleteList, setAthletesList }) => {
  useEffect(() => {
    const array = athleteList
      .slice()
      .sort((a, b) => Number(a.group) - Number(b.group));
    setAthletesList(array);
  }, []);
  const getColorCode = (group: string) => {
    if (group.slice(0, 1) === "S") {
      let num = parseInt(group.slice(1));
      // Define your color code logic here based on the input value
      if (num === 1) {
        return " #C0392B";
      } else if (num === 2) {
        return "#FF0000";
      } else if (num === 3) {
        return "#FA5A5A ";
      } else if (num === 4) {
        return "#FF8C00";
      } else if (num === 5) {
        return "#FFBF00";
      } else if (num === 6) {
        return "#FFD580";
      } else if (num === 7) {
        return "#009E00 ";
      } else if (num === 8) {
        return "#4AD84A";
      } else if (num === 9) {
        return "#9BDC9B ";
      } else {
        return "#ABABAB";
      }
    } else {
      return "#797979";
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
                backgroundColor: getColorCode(item.group),
              }}
            >
              {item.group}
            </td>
            <td className="table-cell name">
              <a href={"/athlete?athleteid=" + item.id}>{item.name}</a>
            </td>
            <td className="table-cell grade">{item.grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SprintsTable;
