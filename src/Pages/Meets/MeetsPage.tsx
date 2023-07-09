import React, { useState } from "react";
import { VscAdd } from "react-icons/vsc";
import MeetsPopup, { MeetObject } from "./MeetsPopup";
import MeetCard from "./MeetComponents/MeetCard";
import firebase, { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0ao2imRtQ-hi2kc6XsugIGfc1aXTA7g0",
  authDomain: "track-app-49793.firebaseapp.com",
  projectId: "track-app-49793",
  storageBucket: "track-app-49793.appspot.com",
  messagingSenderId: "713239875011",
  appId: "1:713239875011:web:04f51cf11b3b2eafff4176",
  measurementId: "G-YT820FDWF5",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const MeetsPage = () => {
  let [isPopupOpen, setIsPopupOpen] = useState(false);
  let [meetList, setMeetList] = useState<MeetObject[]>([]);

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
