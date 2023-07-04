import React from "react";
import "./Roster.scss";
import "bootstrap/dist/js/bootstrap";

const RosterPage = () => {
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
              <div className="roster-table-container"></div>
              <div className="roster-form-container"></div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-sprints"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <div className="roster-form-container"></div>
            <p>sprints</p>
          </div>
          <div
            className="tab-pane fade"
            id="nav-throws"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <div className="roster-form-container"></div>
            <p>throws</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RosterPage;
