import React, { useState } from "react";
import { VscAdd } from "react-icons/vsc";
import MeetsPopup, { MeetObject } from "./MeetsPopup";
import MeetCard from "./MeetComponents/MeetCard";
const MeetsPage = () => {
  let [isPopupOpen, setIsPopupOpen] = useState(false);
  let [meetObject, setMeetObject] = useState<MeetObject | null>(null);
  let [meetList, setMeetList] = useState<MeetObject[]>([]);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleFormSubmit = (meetObject: MeetObject) => {
    setMeetObject(meetObject);
    setMeetList((prevList) => [...prevList, meetObject]);
  };

  return (
    <div className="meets-outer">
      <div className="meets-top-bar">
        <div className="meets-header">Meets</div>
        <div className="new-meet-button-area">
          <button className="new-button" onClick={openPopup}>
            <div className="meets-add-icon-container">
              <VscAdd className="meets-add-icon" />
            </div>
            <div className="new-button-text">New</div>
          </button>
          <MeetsPopup isOpen={isPopupOpen} onClose={closePopup} onSubmit={handleFormSubmit} />
        </div>
      </div>
      <div className="meets-mid-section">
        <div className="meet-cards-container">
            {meetList.map((item) => (
              <MeetCard key={item.id} object={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MeetsPage;
