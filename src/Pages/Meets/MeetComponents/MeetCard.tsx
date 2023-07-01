import React from "react";
import { MeetObject } from "../MeetsPopup";
interface Props {
  object: MeetObject;
}
const MeetCard: React.FC<Props> = ({ object }) => {
  return (
    <div className="meet-card">
      <div className="meet-card-top">
        <span className="meet-card-header">{object.name}</span>
      </div>
      <div className="meet-card-divider" />
      <div className="meet-card-mid">
        <span>{object.date}</span>
        <span>{object.location}</span>
      </div>
      <div className="meet-card-divider" />
      <div className="meet-card-bottom">
        <div className="meet-card-left-button-container">
          <a href="#" className="button">
            <div className="button__line"></div>
            <div className="button__line"></div>
            <span className="button__text">LINEUP</span>
            <div className="button__drow1"></div>
            <div className="button__drow2"></div>
          </a>
        </div>
        <div className="meet-card-right-button-container">
          <a href="#" className="button">
            <div className="button__line"></div>
            <div className="button__line"></div>
            <span className="button__text">RESULTS</span>
            {/* <div className="button__drow1"></div>
            <div className="button__drow2"></div> */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default MeetCard;
