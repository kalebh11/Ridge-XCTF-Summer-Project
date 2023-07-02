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
          <h2>{object.name}</h2>
          <div className="size">
            <h3>Date:</h3>

            <span>&nbsp;{object.date}</span>
          </div>
          <div className="color">
            <h3>Location:</h3>
            <span>{object.location}</span>
          </div>
          <a className="mr-1">Lineup</a>
          <a href="#">Results</a>
        </div>
      </div>
    </div>
  );
};

export default MeetCard;
