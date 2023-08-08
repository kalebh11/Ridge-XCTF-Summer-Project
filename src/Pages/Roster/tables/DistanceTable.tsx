import React, { useEffect } from "react";
import { Athlete } from "../RosterPage";
import "../Roster.scss";

interface Props {
  athleteList: Athlete[];
  setAthletesList: React.Dispatch<React.SetStateAction<Athlete[]>>;
}
const DistanceTable: React.FC<Props> = ({ athleteList, setAthletesList }) => {
  useEffect(() => {
    const array = athleteList
      .slice()
      .sort((a, b) => Number(b.vdot) - Number(a.vdot));
    setAthletesList(array);
  }, []);

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
            <td
              className="table-cell group"
              style={{
                backgroundColor: getColorCode(parseInt(item.group.slice(1))),
              }}
            >
              {item.group}
            </td>
            <td className="table-cell name">
              <a href={"/athlete?athleteid=" + item.id}>{item.name}</a>
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
