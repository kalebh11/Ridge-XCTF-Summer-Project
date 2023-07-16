import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../App";
import { useLocation } from "react-router-dom";
import { MeetObject } from "./MeetsPopup";
import "./meetpage.scss";

const Meetpage = () => {
  const [meet, setMeet] = useState<MeetObject>();
  const [params, setParams] = useState<any>();
  const location = useLocation();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const singleValue = queryParams.get("meetid");
    setParams(singleValue);
    findMeetData();
  });
  const findMeetData = async () => {
    await getDocs(collection(db, "meets")).then((querySnapshot) => {
      const newData: any[] = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      for (let i = 0; i < newData.length; i++) {
        console.log(newData[i].meet.id);
        if (newData[i].meet.id === params) {
          setMeet(newData[i].meet);
        }
      }
    });
  };

  return (
    <div className="meetpage-container">
      <div className="meetpage-main-container">
        <div className="meetpage-basic-info-container">
          <div className="meetpage-header">{meet?.name}</div>
          <div className="meetpage-subinfo-container">
            <div className="meetpage-subinfo">{meet?.date}</div>
            <div className="meetpage-subinfo">{meet?.location}</div>
          </div>
        </div>
      </div>
      <div className="meetpage-order-of-events-container">
        <div className="order-of-events-header-container">
          <div className="order-of-events-header">Order Of Events</div>
        </div>
      </div>
    </div>
  );
};

export default Meetpage;
