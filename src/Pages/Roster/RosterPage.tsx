import React, { ChangeEventHandler, useState } from "react";
import "./Roster.scss";
import "bootstrap/dist/js/bootstrap";
import SprintInput from "./inputstuff/SprintInput";
import DistanceInput from "./inputstuff/DistanceInput";
import ThrowsInput from "./inputstuff/ThrowsInput";
import DistanceTable from "./tables/DistanceTable";
import SprintsTable from "./tables/SprintsTable";
import ThrowsTable from "./tables/ThrowsTable";

export interface Athlete {
  name: string;
  grade: number;
  group: string;
  id: string;
}

export interface DistanceAthlete extends Athlete {
  vdot: number;
}

const RosterPage = () => {
  const [athleteList, setAthletesList] = useState<Athlete[]>([]);

  const handleFormSubmitSprints = (athlete: Athlete) => {
    setAthletesList((prevList) => [...prevList, athlete]);
  };

  const handleFormSubmitDistance = (athlete: DistanceAthlete) => {
    setAthletesList((prevList) => [...prevList, athlete]);
  };

  const handleFormSubmitThrows = (athlete: Athlete) => {
    setAthletesList((prevList) => [...prevList, athlete]);
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
                <DistanceTable athleteList={athleteList} />
              </div>
              <div className="roster-form-container">
                <DistanceInput onSubmit={handleFormSubmitDistance} />
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
              <div className="roster-table-container">
                <SprintsTable athleteList={athleteList} />
              </div>
              <div className="roster-form-container">
                <SprintInput onSubmit={handleFormSubmitSprints} />
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-throws"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <div className="roster-nav-main-container">
              <div className="roster-table-container">
                <ThrowsTable athleteList={athleteList} />
              </div>
              <div className="roster-form-container">
                <ThrowsInput onSubmit={handleFormSubmitThrows} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RosterPage;
