import React from "react";
import "./Roster.scss";
import "bootstrap/dist/js/bootstrap";

interface Athlete {
  name: string;
  grade: number;
  group: string;
  id: string;
}

interface DistanceAthlete extends Athlete {
  vdot: number;
}

const RosterPage = () => {
  const handleSubmitAthlete = () => {
    console.log("sent");
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
              <div className="roster-table-container">distance</div>
              <div className="roster-form-container">
                <div className="roster-form-main-container">
                  <input type="number"></input>
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
