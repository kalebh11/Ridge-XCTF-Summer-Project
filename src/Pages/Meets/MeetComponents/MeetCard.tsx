import { FC } from "react";
import "./Meetcard.scss";
import { Meet } from "../../../common/meet.model";
interface Props {
  object: Meet;
  onRemoveMeet: any;
}
const MeetCard: FC<Props> = ({ object, onRemoveMeet }) => {
  let something = "/meet?meetid=" + object.id;
  const handleDelete = () => {
    onRemoveMeet(object.id);
  };

  return (
    <div className="meet-card-container">
      <div className="card-meet">
        <div className="close-section">
          <div className="x-area">
            <div className="close-container">
              <div className="leftright" onClick={handleDelete}></div>
              <div className="rightleft"></div>
              <label className="close">delete</label>
            </div>
          </div>
        </div>
        <div className="contentBx">
          <a href={something} className="meet-card-title">
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
