import React, {useState, useRef} from "react";
import { Athlete, saveAthlete, groups, groupToDisplay } from "../../../common/athlete.model";
interface Props {
  athleteList: Athlete[];
  setAthletesList: React.Dispatch<React.SetStateAction<Athlete[]>>;
}
const RosterTable = ({ athleteList, setAthletesList, meetList }) => {
  const [filterDistance, setFilterDistance] = useState(false);
  const [filterSprints, setFilterSprints] = useState(false);
  const [filterThrows, setFilterThrows] = useState(false);
  const [filterHurdles, setFilterHurdles] = useState(false);
  const [filterJumps, setFilterJumps] = useState(false);
  const [filter9, setFilter9] = useState(false);
  const [filter10, setFilter10] = useState(false);
  const [filter11, setFilter11] = useState(false);
  const [filter12, setFilter12] = useState(false);
  const nameRef = useRef(null);
  const gradeRef = useRef(null);
  const groupRef = useRef(null);
  const groupSelectorRef = useRef(null);
  const setTableHeaders = () => {
    let headerCells = [];
    if(filterDistance) {
      headerCells.push(<th className="table-cell"></th>);
    }
    if(filterSprints) {
      headerCells.push(<th className="table-cell">100</th>);
      headerCells.push(<th className="table-cell">200</th>);
      if(!filterDistance) {
        headerCells.push(<th className="table-cell">400</th>);
        headerCells.push(<th className="table-cell">800</th>);
      }
    }
    if(filterDistance) {
      headerCells.push(<th className="table-cell">400</th>);
      headerCells.push(<th className="table-cell">800</th>);
      headerCells.push(<th className="table-cell">1200</th>);
      headerCells.push(<th className="table-cell">1600</th>);
      headerCells.push(<th className="table-cell">3200</th>);
    }
    if(filterHurdles) {
      headerCells.push(<th className="table-cell">400mH</th>);
      headerCells.push(<th className="table-cell">110mH</th>);
    }
    if(filterJumps) {
      headerCells.push(<th className="table-cell">Triple Jump</th>);
      headerCells.push(<th className="table-cell">Long Jump</th>);
      headerCells.push(<th className="table-cell">Pole Vault</th>);
    }
    if(filterThrows) {
      headerCells.push(<th className="table-cell">Javelin</th>);
      headerCells.push(<th className="table-cell throws-event">Discus</th>);
      headerCells.push(<th className="table-cell throws-event">Shot Put</th>);
    }
    return (headerCells);
  };
  const setTableRows = (athlete) => {
    let rows = [];
    if(filterDistance) {
      rows.push(<td className="table-cell">{athlete.vdot}</td>);
    }
    if(filterSprints) {
      rows.push(<td className="table-cell">{getBestEventTime('100', athlete)}</td>);
      rows.push(<td className="table-cell">{getBestEventTime('200', athlete)}</td>);
      if(!filterDistance) {
        rows.push(<td className="table-cell">{getBestEventTime('400', athlete)}</td>);
        rows.push(<td className="table-cell">{getBestEventTime('800', athlete)}</td>);
      }
    }
    if(filterDistance) {
      rows.push(<td className="table-cell">{getBestEventTime('400', athlete)}</td>);
      rows.push(<td className="table-cell">{getBestEventTime('800', athlete)}</td>);
      rows.push(<td className="table-cell">{getBestEventTime('1200', athlete)}</td>);
      rows.push(<td className="table-cell">{getBestEventTime('1600', athlete)}</td>);
      rows.push(<td className="table-cell">{getBestEventTime('3200', athlete)}</td>);
    }
    if(filterHurdles) {
      rows.push(<td className="table-cell">{getBestEventTime('400mH', athlete)}</td>);
      rows.push(<td className="table-cell">{getBestEventTime('110mH', athlete)}</td>);
    }
    if(filterJumps) {
      rows.push(<td className="table-cell">{getBestEventTime('tripleJump', athlete)}</td>);
      rows.push(<td className="table-cell">{getBestEventTime('longJump', athlete)}</td>);
      rows.push(<td className="table-cell">{getBestEventTime('poleVault', athlete)}</td>);
    }
    if(filterThrows) {
      rows.push(<td className="table-cell">{getBestEventTime('javelin', athlete)}</td>);
      rows.push(<td className="table-cell">{getBestEventTime('discus', athlete)}</td>);
      rows.push(<td className="table-cell">{getBestEventTime('shotPut', athlete)}</td>);
    }
    return (rows);
  }
  const getBestEventTime = (eventType, athlete) => {
    return "N/A";
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    let newAthlete: Athlete = new Athlete();
    newAthlete.name = nameRef.current.value;
    newAthlete.group = { type: groupSelectorRef.current.value, index: groupRef.current.value };
    newAthlete.grade = gradeRef.current.value;
    newAthlete.vdot = 0;
    newAthlete.meets = [];
    newAthlete.labels = [];
    newAthlete.email = "";
    newAthlete.parentemail = "";
    saveAthlete(newAthlete);
  };
  return (
    <div className="flex-container column">
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
      <div className="flex-container">
        <table className="flex-item">
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
                <td className="table-cell group">{groupToDisplay(item.group)}</td>
                <td className="table-cell name">
                  <a href={"/athlete?athleteid=" + item.id}>{item.name}</a>
                </td>
                <td className="table-cell grade">{item.grade}</td>
                {setTableRows(item)}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="roster-input">
          <div>Roster Input</div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="rosterNameInput">Name</label>
              <input className="form-control" id="rosterNameInput" type="text" ref={nameRef} placeholder="Name"/>
            </div>
            <div className="form-group">
              <label htmlFor="rosterAgeInput">Grade</label>
              <input className="form-control" id="rosterAgeInput" type="number" min="9" max="12" ref={gradeRef} placeholder="Grade"></input>
            </div>
            <div className="form-group">
              <label htmlFor="rosterGroupSelector">Group Indicator</label>
              <select ref={groupSelectorRef} className="form-control" id="rosterGroupSelector">
              {groups.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="rosterGroupInput">Group #</label>
              <input className="form-control" id="rosterGroupInput" type="text" ref={groupRef} placeholder="Group"></input>
            </div>
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RosterTable;
