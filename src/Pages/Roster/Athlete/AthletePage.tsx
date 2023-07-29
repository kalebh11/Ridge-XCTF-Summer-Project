import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Athlete } from "../RosterPage";
import { db } from "../../../App";

const AthletePage = () => {
  const [athlete, setAthlete] = useState<Athlete>();
  const [params, setParams] = useState<any>();
  const location = useLocation();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const singleValue = queryParams.get("athleteid");
    console.log(singleValue);
    setParams(singleValue);
    findAthleteData();
  });
  const findAthleteData = async () => {
    console.log("yes");
    await getDocs(collection(db, "athletes")).then((querySnapshot) => {
      const newData: any[] = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(newData);
      for (let i = 0; i < newData.length; i++) {
        console.log(newData[i].id);
        if (newData[i].id === params) {
          setAthlete(newData[i]);
        }
      }
    });
  };
  return <div>{athlete?.name}</div>;
};

export default AthletePage;
