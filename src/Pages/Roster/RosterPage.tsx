import React, { ChangeEventHandler, useEffect, useState } from "react";
import "./Roster.scss";
import "bootstrap/dist/js/bootstrap";
import SprintInput from "./inputstuff/SprintInput";
import DistanceInput from "./inputstuff/DistanceInput";
import ThrowsInput from "./inputstuff/ThrowsInput";
import DistanceTable from "./tables/DistanceTable";
import SprintsTable from "./tables/SprintsTable";
import ThrowsTable from "./tables/ThrowsTable";
import { Athlete, saveAthlete } from "../../common/athlete.model";
import RosterTable from "./tables/RosterTable";

type Props = {
  athleteList: Athlete[];
  setAthletesList: React.Dispatch<React.SetStateAction<Athlete[]>>;
};
export const RosterPage = ({ athleteList, setAthletesList }: Props) => {
  const handleFormSubmit = (athlete: Athlete) => {
    saveAthlete(athlete);
  };
  const sort = (e: any) => {
    e.preventDefault();
    console.log("sort by VDOT");
    setAthletesList(sortArrayToFront(athleteList, "D"));
  };
  const sortGS = (e: any) => {
    e.preventDefault();
    console.log("sort by GROUP S");

    setAthletesList(sortArrayToFront(athleteList, "S"));
  };
  const sortGT = (e: any) => {
    e.preventDefault();
    console.log("sort by GROUP T");

    // setAthletesList(sortArrayToFrontT(athleteList));
  };
  const sortArrayToFront = (array: Athlete[], groupType: string) => {
    let arrayS: Athlete[];
    let arrayNoS: Athlete[];
    arrayS = array.filter((obj) => {
      return obj.group.type === groupType;
    });
    arrayNoS = array.filter((obj) => {
      return obj.group.type !== groupType;
    });
    arrayS.sort((a, b) => a.group.index - b.group.index);
    arrayNoS.sort((a, b) => a.group.index - b.group.index);
    let finArray = arrayS.concat(arrayNoS);
    return finArray;
  };
  return (
    <div className="meets-outer">
      <div className="roster-header-container">
        <div className="meets-header">Roster</div>
      </div>
      <div className="roster-main-container">
        <RosterTable />
      </div>
    </div>
  );
};

export default RosterPage;
