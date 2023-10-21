import React, { useEffect, useState } from "react";
import { VscAdd } from "react-icons/vsc";
import MeetsPopup from "./MeetsPopup";
import MeetCard from "./MeetComponents/MeetCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../App";
import { useLocation } from "react-router-dom";
import { MeetObject } from "../../commons/meet.model";

type Props = {
  meetList: MeetObject[];
  setMeetList: React.Dispatch<React.SetStateAction<MeetObject[]>>;
};
const MeetsPage = ({ meetList, setMeetList }: Props) => {
  let [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleRemoveMeetObject = (meetIdToRemove: string) => {
    // Filter out the MeetObject with the specified meetIdToRemove
    const updatedMeetList = meetList.filter(
      (meet) => meet.id !== meetIdToRemove
    );
    setMeetList(updatedMeetList);
  };
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleFormSubmit = (meetObject: MeetObject) => {
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
          <MeetsPopup
            isOpen={isPopupOpen}
            onClose={closePopup}
            onSubmit={handleFormSubmit}
          />
        </div>
      </div>
      <div className="meets-mid-section">
        <div className="meet-cards-container">
          {meetList.map((item) => (
            <MeetCard
              key={item.id}
              object={item}
              onRemoveMeet={handleRemoveMeetObject}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetsPage;
