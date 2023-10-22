import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import "bootstrap/dist/js/bootstrap";
import "./MeetLineup.scss";
import EventTable from "./EventTable";
import { Meet } from "../../../../common/meet.model";
type Props = {
  meetList: Meet[];
  setMeetList: React.Dispatch<React.SetStateAction<Meet[]>>;
};
export const MeetLineup = ({ meetList, setMeetList }: Props) => {
  const [meet, setMeet] = useState<Meet>();
  const [params, setParams] = useState<any>();
  const location = useLocation();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const singleValue = queryParams.get("meetid");
    setParams(singleValue);
    setMeet(meetList.find((meet)=>{return meet.id === params}));
  }, [meetList]);
  return (
    <div className="meets-outer">
      <div className="meets-top-bar">
        <div className="meets-header">{meet?.name} Meet Lineup</div>
      </div>
      <div className="meetlineup-mid-section">
        <nav style={{ width: "100%" }}>
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
              Track Events
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
              Field Events
            </a>
          </div>
        </nav>
        <div className="meetlineup-content-container">
          {/* {meet?.events?.map((item) => (
            <EventTable key={item.eventId} event={item} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default MeetLineup;
