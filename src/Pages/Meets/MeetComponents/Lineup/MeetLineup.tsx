import React, { useEffect, useState } from "react";
import { MeetObject } from "../../MeetsPopup";
import { useLocation } from "react-router-dom";
type Props = {
  meetList: MeetObject[];
  setMeetList: React.Dispatch<React.SetStateAction<MeetObject[]>>;
};
const MeetLineup = ({ meetList, setMeetList }: Props) => {
  const [meet, setMeet] = useState<MeetObject>();
  const [params, setParams] = useState<any>();
  const location = useLocation();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const singleValue = queryParams.get("meetid");
    setParams(singleValue);
    findMeetData();
  }, [meetList]);
  const findMeetData = () => {
    let length: any;
    length = meetList.length;
    if (meetList !== undefined) {
      for (let i = 0; i < length; i++) {
        console.log(meetList[i].id);
        if (meetList[i].id === params) {
          setMeet(meetList[i]);
        }
      }
    }
  };
  return (
    <div className="meets-outer">
      <div className="meets-top-bar">
        <div className="meets-header">{meet?.name} Meet Lineup</div>
      </div>
      <div className="meets-mid-section"></div>
    </div>
  );
};

export default MeetLineup;
