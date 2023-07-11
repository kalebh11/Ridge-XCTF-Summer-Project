import React, { useEffect, useState } from "react";
import { VscAdd } from "react-icons/vsc";
import MeetsPopup, { MeetObject } from "./MeetsPopup";
import MeetCard from "./MeetComponents/MeetCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../App";

const MeetsPage = () => {
  let [isPopupOpen, setIsPopupOpen] = useState(false);
  let [meetList, setMeetList] = useState<MeetObject[]>([]);
  const fetchPost = async () => {
    await getDocs(collection(db, "meets")).then((querySnapshot) => {
      const newData: any[] = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      newData.map((item) => {
        setMeetList((prevArray) => [...prevArray, item.meet]);
      });

      console.log(meetList, newData);
    });
  };

  useEffect(() => {
    fetchPost();
    console.log("sdf");
  }, []);
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
            <MeetCard key={item.id} object={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetsPage;
