import React, { useEffect } from "react";
import { Athlete } from "../RosterPage";
import "../Roster.scss";
interface Props {
  athleteList: Athlete[];
  setAthletesList: React.Dispatch<React.SetStateAction<Athlete[]>>;
}
const ThrowsTable: React.FC<Props> = ({ athleteList, setAthletesList }) => {
  useEffect(() => {
    const array = athleteList
      .slice()
      .sort((a, b) => Number(a.group) - Number(b.group));
    setAthletesList(array);
  }, []);
  const getColorCode = (group: string) => {
    // Define your color code logic here based on the input value
    if (group.slice(0, 1) === "T") {
      let num = parseInt(group.slice(1));
      // Define your color code logic here based on the input value
      if (num >= 1 && num <= 3) {
        return "#D0615A";
      } else if (num >= 4 && num <= 6) {
        return "#F2A35E";
      } else if (num >= 7 && num <= 9) {
        return "#A1D4A3"; // For other values, use the default color
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
          <th className="table-cell throws-event">Javelin</th>
          <th className="table-cell throws-event">Discus</th>
          <th className="table-cell throws-event">Shot Put</th>
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

export default ThrowsTable;
