import React, { useState } from "react";
import { VscAdd } from "react-icons/vsc";
import MeetsPopup, { MeetObject } from "./MeetsPopup";
const MeetsPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [meetObject, setMeetObject] = useState<MeetObject | null>(null);
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleFormSubmit = (data: MeetObject) => {
    setMeetObject(data);
  };

  return (
    <div className="outer2">
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
    </div>
  );
};

export default MeetsPage;
