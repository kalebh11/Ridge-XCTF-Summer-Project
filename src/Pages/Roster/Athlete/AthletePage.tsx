import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Athlete } from "../../../common/athlete.model";

type Props = {
  athleteList: Athlete[];
  setAthleteList: React.Dispatch<React.SetStateAction<Athlete[]>>;
};
export const AthletePage = ({ athleteList, setAthleteList }: Props) => {
  const [athlete, setAthlete] = useState<Athlete>();
  const [params, setParams] = useState<any>();
  const location = useLocation();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const singleValue = queryParams.get("athleteid");
    console.log(singleValue);
    setParams(singleValue);
    console.log(athleteList);
    findAthleteData();
  }, [athleteList]);
  const findAthleteData = () => {
    console.log("yes");
    console.log(athleteList);
    console.log(athleteList.length);
    for (let i = 0; i < athleteList.length; i++) {
      if (athleteList[i].id === params) {
        console.log(athleteList[i]);
        setAthlete(athleteList[i]);
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
