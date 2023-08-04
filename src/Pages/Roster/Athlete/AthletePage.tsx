import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Athlete } from "../RosterPage";
import { athletes } from "../../../App";

const AthletePage = () => {
  const [athlete, setAthlete] = useState<Athlete>();
  const [params, setParams] = useState<any>();
  const location = useLocation();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const singleValue = queryParams.get("athleteid");
    console.log(singleValue);
    setParams(singleValue);
    console.log(athletes);
    findAthleteData();
  }, []);
  const findAthleteData = () => {
    console.log("yes");
    console.log(athletes);
    console.log(athletes?.length);
    let length: any;
    length = athletes?.length;
    if (athletes !== undefined) {
      for (let i = 0; i < length; i++) {
        if (athletes[i].id === params) {
          console.log(athletes[i]);
          setAthlete(athletes[i]);
        }
      }
    }
  };
  return (
    <div>
      {athlete?.name}
      {athlete?.id}
    </div>
  );
};

export default AthletePage;
