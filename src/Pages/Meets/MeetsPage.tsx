import React, { useEffect, useState } from "react";
import { VscAdd } from "react-icons/vsc";
import MeetsPopup from "./MeetsPopup";
import MeetCard from "./MeetComponents/MeetCard";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../App";
import { Meet, meetConverter } from "../../common/meet.model";

type Props = {
  meetList: Meet[];
  setMeetList: React.Dispatch<React.SetStateAction<Meet[]>>;
};
export const MeetsPage = ({ meetList, setMeetList }: Props) => {
  let [isPopupOpen, setIsPopupOpen] = useState(false);
  let meetsCollection = collection(db, "meets").withConverter(meetConverter);
  const handleRemoveMeet = (meetIdToRemove: string) => {
    // Filter out the MeetObject with the specified meetIdToRemove
    deleteDoc(doc(meetsCollection, meetIdToRemove)).then(() => {
      console.log("Meet Card deleted");
      const updatedMeetList = meetList.filter(
        (meet) => meet.id !== meetIdToRemove
      );
      setMeetList(updatedMeetList);
    })
    .catch((error) => {
      console.log(error);
    });
    
  };
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleFormSubmit = async (meet: Meet) => {
    try {
      const docRef = await addDoc(meetsCollection, meet);
      console.log("Document written with ID: ", docRef.id);
      meet.id = docRef.id;
      setMeetList((prevList) => [...prevList, meet]);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
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
              onRemoveMeet={handleRemoveMeet}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetsPage;
