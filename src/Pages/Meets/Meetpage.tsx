import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db, meets } from "../../App";
import { useLocation } from "react-router-dom";
import { MeetObject } from "./MeetsPopup";
import "./meetpage.scss";

const Meetpage = () => {
  const [meet, setMeet] = useState<MeetObject>();
  const [params, setParams] = useState<any>();
  const location = useLocation();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const singleValue = queryParams.get("meetid");
    setParams(singleValue);
    findMeetData();
  }, []);
  const findMeetData = () => {
    for (let i = 0; i < meets.length; i++) {
      console.log(meets[i].id);
      if (meets[i].id === params) {
        setMeet(meets[i]);
      }
    }
  };
  let lineupParam = "/lineup?meetid=" + meet?.id;
  let resultParam = "/results?meetid=" + meet?.id;
  return (
    <div className="meetpage-container">
      <div className="meetpage-main-container">
        <div className="meetpage-basic-info-container">
          <div className="meetpage-header">{meet?.name}</div>
          <div className="meetpage-subinfo-container">
            <div className="meetpage-subinfo">{meet?.date}</div>
            <div className="meetpage-subinfo">{meet?.location}</div>
          </div>
        </div>
        <div className="meetpage-buttons-container">
          <div className="button-container">
            <a href={lineupParam} className="button-meet">
              <div className="button-meet__line"></div>
              <div className="button-meet__line"></div>
              <span className="button-meet__text">LINEUP</span>
              <div className="button-meet__drow1"></div>
              <div className="button-meet__drow2"></div>
            </a>
          </div>
          <div className="button-container">
            <a href={resultParam} className="button-meet">
              <div className="button-meet__line"></div>
              <div className="button-meet__line"></div>
              <span className="button-meet__text">RESULTS</span>
              <div className="button-meet__drow1"></div>
              <div className="button-meet__drow2"></div>
            </a>
          </div>
        </div>
        <div className="meetpage-main-info-container">Webscrape Stuff?</div>
      </div>
      <div className="meetpage-order-of-events-container">
        <div className="order-of-events-header-container">
          <div className="order-of-events-header">Order Of Events</div>
        </div>
      </div>
    </div>
  );
};

export default Meetpage;
