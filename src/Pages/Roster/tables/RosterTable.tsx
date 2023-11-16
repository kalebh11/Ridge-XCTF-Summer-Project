import React, {useState} from "react";

const RosterTable = () => {
  const [filterDistance, setFilterDistance] = useState(false);
  const [filterSprints, setFilterSprints] = useState(false);
  const [filterThrows, setFilterThrows] = useState(false);
  const [filterHurdles, setFilterHurdles] = useState(false);
  const [filterJumps, setFilterJumps] = useState(false);
  const [filter9, setFilter9] = useState(false);
  const [filter10, setFilter10] = useState(false);
  const [filter11, setFilter11] = useState(false);
  const [filter12, setFilter12] = useState(false);

  const setDistance = () => {
    if (filterDistance) {
      return (
        <>
          <th className="table-cell vdot">VDOT</th>
          <th className="table-cell distance-events">400</th>
          <th className="table-cell distance-events">800</th>
          <th className="table-cell distance-events">1200</th>
          <th className="table-cell distance-events">1600</th>
          <th className="table-cell distance-events">3200</th>
        </>
      );
    }
  };
  const setSprints = () => {
    if (filterSprints) {
      if (filterDistance) {
        return (
          <>
            <th className="table-cell sprint-events">100</th>
            <th className="table-cell sprint-events">200</th>
          </>
        );
      } else {
        return (
          <>
            <th className="table-cell sprint-events">100</th>
            <th className="table-cell sprint-events">200</th>
            <th className="table-cell distance-events">400</th>
            <th className="table-cell distance-events">800</th>
          </>
        );
      }
    }
  };
  const setThrows = () => {
    if (filterThrows) {
      return (
        <>
          <th className="table-cell throws-event">Javelin</th>
          <th className="table-cell throws-event">Discus</th>
          <th className="table-cell throws-event">Shot Put</th>
        </>
      );
    }
  };
  const setJumps = () => {
    if (filterJumps) {
      return (
        <>
          <th className="table-cell throws-event">Triple Jump</th>
          <th className="table-cell throws-event">Long Jump</th>
          <th className="table-cell throws-event">Pole Vault</th>
        </>
      );
    }
  };
  const setHurdles = () => {
    if (filterHurdles) {
      return (
        <>
          <th className="table-cell throws-event">400mH</th>
          <th className="table-cell throws-event">110mH</th>
        </>
      );
    }
  };

  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          Select Option
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div>
            <input
              type="checkbox"
              checked={filterDistance}
              onChange={() => setFilterDistance(!filterDistance)}></input>
            <label>Distance</label>
          </div>
          <div>
            {" "}
            <input
              type="checkbox"
              checked={filterSprints}
              onChange={() => setFilterSprints(!filterSprints)}></input>
            <label>Sprints</label>
          </div>
          <div>
            {" "}
            <input
              type="checkbox"
              checked={filterThrows}
              onChange={() => setFilterThrows(!filterThrows)}></input>
            <label>Throws</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={filterJumps}
              onChange={() => setFilterJumps(!filterJumps)}></input>
            <label>Jumps</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={filterHurdles}
              onChange={() => setFilterHurdles(!filterHurdles)}></input>
            <label>Hurdles</label>
          </div>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th className="table-cell group">Group</th>
            <th className="table-cell name">Name</th>
            <th className="table-cell grade">Grade</th>
            {setDistance()}
            {setSprints()}
            {setThrows()}
            {setJumps()}
            {setHurdles()}
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default RosterTable;
