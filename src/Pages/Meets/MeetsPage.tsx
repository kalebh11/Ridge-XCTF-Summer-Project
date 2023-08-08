import React, { useEffect, useState } from "react";
import { VscAdd } from "react-icons/vsc";
import MeetsPopup, { MeetObject } from "./MeetsPopup";
import MeetCard from "./MeetComponents/MeetCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../App";
import { useLocation } from "react-router-dom";

export interface MeetEvent {
  eventType: eventTypeEnum;
  eventId: string;
  athletes: string[];
}

export enum eventTypeEnum {
  sixteen = "1600",
  mile = "Mile",
  twoMile = "Two Mile",
  thirtyTwo = "3200",
  thousand = "1000",
  twelve = "1200",
  eight = "800",
  four = "400",
  six = "600",
  three = "300",
  two = "200",
  one = "100",
  fiftyFive = "55",
  fourHundredHurdles = "400mH",
  oneTenHurdles = "110mH",
  oneHundredHurdles = "100mH",
  longJump = "Long Jump",
  tripleJump = "Triple Jump",
  highJump = "High Jump",
  poleVault = "Pole Vault",
  shotPut = "Shot Put",
  javelin = "Javelin",
  discus = "Discus",
  //relays
  fourXone = "4x100",
  fourXtwo = "4x200",
  fourXfour = "4x400",
  fourXeight = "4x800",
  fourXsixteen = "4x1600",
  fourXmile = "4xMile",
  dmr = "Distance Medley Relay",
  threeXfourHundredHurdles = "3x400mH",
  shuttleHurdles = "shuttleHurdles",
}
type Props = {
  meetList: MeetObject[];
  setMeetList: React.Dispatch<React.SetStateAction<MeetObject[]>>;
};
const MeetsPage = ({ meetList, setMeetList }: Props) => {
  let [isPopupOpen, setIsPopupOpen] = useState(false);

  // const [params, setParams] = useState<any>();
  // const location = useLocation();
  // useEffect(() => {
  //   const queryParams = new URLSearchParams(location.search);
  //   const singleValue = queryParams.get("meetid");
  //   setParams(singleValue);
  // }, []);
  // const fetchPost = async () => {
  //   await getDocs(collection(db, "meets")).then((querySnapshot) => {
  //     const newData: any[] = querySnapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));

  //     newData.map((item) => {
  //       setMeetList((prevArray) => [...prevArray, item.meet]);
  //     });

  //     console.log(meetList, newData);
  //   });
  // };

  // useEffect(() => {
  //   fetchPost();
  // }, []);
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
