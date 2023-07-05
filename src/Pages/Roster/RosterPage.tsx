import React, { ChangeEventHandler, useState } from "react";
import "./Roster.scss";
import "bootstrap/dist/js/bootstrap";
import TableComponent from "./TableComponent";

export interface Athlete {
  name: string;
  grade: number;
  group: string;
  id: string;
}

export interface DistanceAthlete extends Athlete {
  map(
    arg0: (
      athlete: DistanceAthlete,
      index: React.Key | null | undefined
    ) => import("react/jsx-runtime").JSX.Element
  ): React.ReactNode;
  vdot: number;
}

const RosterPage = () => {
  const [athleteList, setAthletesList] = useState<Athlete[]>([]);
  const [name, setName] = useState("");
  const [grade, setGrade] = useState(0);
  const [group, setGroup] = useState("");
  const [vdot, setVdot] = useState(0);
  const id = "";

  const handleNameChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(e.target.value);
  };
  const handleGradeChange = (e: { target: { value: any } }) => {
    setGrade(Number(e.target.value));
  };
  const handleGroupChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setGroup(e.target.value);
  };
  const handleVdotChange = (e: { target: { value: any } }) => {
    setVdot(Number(e.target.value));
  };
  const generateRandomID = (): string => {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return array[0].toString(36);
  };

  const handleSubmitAthlete = (e: React.FormEvent) => {
    e.preventDefault();

    const newAthlete: DistanceAthlete = {
      name,
      group,
      grade,
      vdot,
      id: generateRandomID(),
    };

    setAthletesList([...athleteList, newAthlete]);

    // Reset the input values
    setName("");
    setGroup("");
    setGrade(0);
    setVdot(0);
  };

  return (
    <div className="meets-outer">
      <div className="roster-header-container">
        <div className="meets-header">Roster</div>
      </div>
      <div className="roster-main-container">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              className="nav-link active"
              id="nav-distance-tab"
              data-bs-toggle="tab"
              href="#nav-distance"
              role="tab"
              aria-controls="nav-distance"
              aria-selected="true"
            >
              Distance
            </a>
            <a
              className="nav-link"
              id="nav-sprints-tab"
              data-bs-toggle="tab"
              href="#nav-sprints"
              role="tab"
              aria-controls="nav-sprints"
              aria-selected="false"
            >
              Sprints
            </a>
            <a
              className="nav-link"
              id="nav-throws-tab"
              data-bs-toggle="tab"
              href="#nav-throws"
              role="tab"
              aria-controls="nav-throws"
              aria-selected="false"
            >
              Throws
            </a>
          </div>
        </nav>

        <div
          className="tab-content roster-nav-main-container"
          id="nav-tabContent"
        >
          <div
            className=" tab-pane fade show active "
            id="nav-distance"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className="roster-nav-main-container">
              <div className="roster-table-container">
                <TableComponent athleteList={athleteList} />
              </div>
              <div className="roster-form-container">
                <div className="roster-form-main-container">
                  <div className="roster-form-input-container">
                    <div className="form__group field">
                      <input
                        type="input"
                        className="form__field"
                        placeholder="Name"
                        name="name"
                        id="name"
                        required
                        onChange={handleNameChange}
                      />
                      <label htmlFor="name" className="form__label">
                        Athlete Name
                      </label>
                    </div>
                  </div>
                  <div className="roster-form-input-container">
                    <div className="form__group field">
                      <input
                        type="number"
                        className="form__field"
                        placeholder="Grade"
                        name="grade"
                        id="grade"
                        required
                        onChange={handleGradeChange}
                      />
                      <label htmlFor="grade" className="form__label">
                        Athlete Grade
                      </label>
                    </div>
                  </div>
                  <div className="roster-form-input-container">
                    <div className="form__group field">
                      <input
                        type="input"
                        className="form__field"
                        placeholder="Group"
                        name="group"
                        id="group"
                        required
                        onChange={handleGroupChange}
                      />
                      <label htmlFor="group" className="form__label">
                        Athlete Group
                      </label>
                    </div>
                  </div>
                  <div className="roster-form-input-container">
                    <div className="form__group field">
                      <input
                        type="number"
                        className="form__field"
                        placeholder="Vdot"
                        name="vdot"
                        id="vdot"
                        required
                        onChange={handleVdotChange}
                      />
                      <label htmlFor="vdot" className="form__label">
                        Athlete VDOT
                      </label>
                    </div>
                  </div>
                </div>
                <div className="roster-form-submit-container">
                  <button
                    className="button"
                    id="button-7"
                    onClick={handleSubmitAthlete}
                  >
                    <div id="dub-arrow">
                      <img
                        src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true"
                        alt=""
                      />
                    </div>
                    Enter Athlete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-sprints"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <div className="roster-nav-main-container">
              <div className="roster-table-container">sprints</div>
              <div className="roster-form-container"></div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-throws"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <div className="roster-nav-main-container">
              <div className="roster-table-container">throws</div>
              <div className="roster-form-container"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RosterPage;
