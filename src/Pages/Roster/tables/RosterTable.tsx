import React, {useState} from "react";
import { Athlete } from "../../../common/athlete.model";
interface Props {
  athleteList: Athlete[];
  setAthletesList: React.Dispatch<React.SetStateAction<Athlete[]>>;
}
const RosterTable = ({ athleteList, setAthletesList }) => {
  const [filterDistance, setFilterDistance] = useState(false);
  const [filterSprints, setFilterSprints] = useState(false);
  const [filterThrows, setFilterThrows] = useState(false);
  const [filterHurdles, setFilterHurdles] = useState(false);
  const [filterJumps, setFilterJumps] = useState(false);
  const [filter9, setFilter9] = useState(false);
  const [filter10, setFilter10] = useState(false);
  const [filter11, setFilter11] = useState(false);
  const [filter12, setFilter12] = useState(false);
  const setTableHeaders = () => {
    let headerDom = <></>;
    if(filterDistance) {
      headerDom = <>{headerDom}<th className="table-cell vdot">VDOT</th></>;
    }
    if(filterSprints) {
      headerDom = 
      <>
        {headerDom}
        <th className="table-cell sprint-events">100</th>
        <th className="table-cell sprint-events">200</th>
      </>;
      if(!filterDistance) {
        headerDom = 
        <>
          {headerDom}
          <th className="table-cell distance-events">400</th>
          <th className="table-cell distance-events">800</th>
        </>;
      }
    }
    if(filterDistance) {
      headerDom = 
      <>
        {headerDom}
          <th className="table-cell distance-events">400</th>
          <th className="table-cell distance-events">800</th>
          <th className="table-cell distance-events">1200</th>
          <th className="table-cell distance-events">1600</th>
          <th className="table-cell distance-events">3200</th>
      </>;
    }
    if(filterHurdles) {
      headerDom = 
      <>
        {headerDom}
        <th className="table-cell throws-event">400mH</th>
        <th className="table-cell throws-event">110mH</th>
      </>;
    }
    if(filterJumps) {
      headerDom = 
      <>
        {headerDom}
        <th className="table-cell throws-event">Triple Jump</th>
        <th className="table-cell throws-event">Long Jump</th>
        <th className="table-cell throws-event">Pole Vault</th>
      </>;
    }
    if(filterThrows) {
      headerDom = 
      <>
        {headerDom}
        <th className="table-cell throws-event">Javelin</th>
        <th className="table-cell throws-event">Discus</th>
        <th className="table-cell throws-event">Shot Put</th>
      </>;
    }
    return (headerDom);
  };

  return (
    <div>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Select Option
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div className="m-1">
            <input className="m-1" type="checkbox" checked={filterDistance} id="filterDistanceCheckBox" onChange={() => setFilterDistance(!filterDistance)}></input>
            <label htmlFor="filterDistanceCheckBox">Distance</label>
          </div>
          <div className="m-1">
            <input className="m-1" type="checkbox" checked={filterSprints} id="filterSprints" onChange={() => setFilterSprints(!filterSprints)}></input>
            <label htmlFor="filterSprints">Sprints</label>
          </div>
          <div className="m-1">
            <input className="m-1" type="checkbox" checked={filterThrows} id="filterThrows" onChange={() => setFilterThrows(!filterThrows)}></input>
            <label htmlFor="filterThrows">Throws</label>
          </div>
          <div className="m-1">
            <input className="m-1" type="checkbox" checked={filterJumps} id="filterJumps" onChange={() => setFilterJumps(!filterJumps)}></input>
            <label htmlFor="filterJumps">Jumps</label>
          </div>
          <div className="m-1">
            <input className="m-1" type="checkbox" checked={filterHurdles} id="filterHurdles" onChange={() => setFilterHurdles(!filterHurdles)}></input>
            <label htmlFor="filterHurdles">Hurdles</label>
          </div>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th className="table-cell group">Group</th>
            <th className="table-cell name">Name</th>
            <th className="table-cell grade">Grade</th>
            {setTableHeaders()}
          </tr>
        </thead>
        <tbody>
        {athleteList.map((item) => (
          <tr key={item.id}>
            <td className="table-cell group">test</td>
            <td className="table-cell name">
              <a href={"/athlete?athleteid=" + item.id}>{item.name}</a>
            </td>
            <td className="table-cell grade">{item.grade}</td>
          </tr>
        ))}
        </tbody>
      </table>
      <div>
        
      </div>
    </div>
  );
};

export default RosterTable;
