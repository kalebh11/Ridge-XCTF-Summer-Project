import React from "react";
import { MeetObject } from "../MeetsPopup";
import { useNavigate } from "react-router-dom";
import "./Meetcard.scss";
interface Props {
  object: MeetObject;
}
const MeetCard: React.FC<Props> = ({ object }) => {
  const navigate = useNavigate();

  const handleResult = () => {};

  return (
    <div className="meet-card-container">
      <div className="card-meet">
        <div className="contentBx">
          <a href="#" className="meet-card-title">
            {object.name}
          </a>
          <div className="details-container detail-1 my-2">
            <div className="meet-card-detail-title">Date:</div>
            <div className="meet-card-detail">&nbsp;{object.date}</div>
          </div>
          <div className="details-container detail-2 my-2">
            <div className="meet-card-detail-title">Location:</div>
            <div className="meet-card-detail">&nbsp;{object.location}</div>
          </div>
          <div className="my-4">
            <button className="meet-card-button">Lineup</button>
            <button className="meet-card-button">Results</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetCard;
