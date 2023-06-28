import React, { useState } from "react";
import { VscAdd } from "react-icons/vsc";
import MeetsPopup, { MeetObject } from "./MeetsPopup";
import MeetCard from "./MeetComponents/MeetCard";
const MeetsPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [meetObject, setMeetObject] = useState<MeetObject | null>(null);
  const [meetList, setMeetList] = useState<MeetObject[]>([]);
 
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleFormSubmit = (meetObject: MeetObject) => {
    setMeetObject(meetObject);
    setMeetList(prevList => [...prevList, meetObject])
  };

  return (
    <div className="meets-outer">
      <div className="meet-top-bar">
        <div className="meets-header">Meets</div>
        <div className="new-meet-button-area">
          <button className="new-button" onClick={openPopup}>
            <div className="meets-add-icon-container">
              <VscAdd className="meets-add-icon" />
            </div>

            <div className="new-button-text">New</div>
            <MeetsPopup
              isOpen={isPopupOpen}
              onClose={closePopup}
              onSubmit={handleFormSubmit}
            
            />
          </button>
        </div>
      </div>
      <div className = "meet-mid-section">
      {meetList.map((object, index) => (
        <MeetCard key={object.id} object={meetObject} />
      ))}

      </div>
    </div>
  );
};

export default MeetsPage;
