import React, { ChangeEventHandler, useEffect, useState } from "react";
import "./Roster.scss";
import "bootstrap/dist/js/bootstrap";
import SprintInput from "./inputstuff/SprintInput";
import DistanceInput from "./inputstuff/DistanceInput";
import ThrowsInput from "./inputstuff/ThrowsInput";
import DistanceTable from "./tables/DistanceTable";
import SprintsTable from "./tables/SprintsTable";
import ThrowsTable from "./tables/ThrowsTable";
import { db } from "../../App";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { eventTypeEnum } from "../Meets/MeetsPage";

type Props = {
  athleteList: Athlete[];
  setAthletesList: React.Dispatch<React.SetStateAction<Athlete[]>>;
};

export interface Athlete {
  name: string;
  grade: number;
  group: string;
  id: string;
  vdot: number;
  meets: AthleteMeet[];
  isThrower: boolean;
}

export interface AthleteMeet {
  events: AthleteEvent[];
}
export interface AthleteEvent {
  eventType: eventTypeEnum;
  results: any[];
}
const addAthlete = async (athlete: Athlete) => {
  try {
    const docRef = await addDoc(collection(db, "athletes"), athlete);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
const RosterPage = ({ athleteList, setAthletesList }: Props) => {
  const handleFormSubmit = (athlete: Athlete) => {
    addAthlete(athlete);
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

    setAthletesList(sortArrayToFrontT(athleteList));
  };
  const sortArrayToFront = (array: Athlete[], letter: string) => {
    let arrayS: Athlete[];
    let arrayNoS: Athlete[];
    let finArray: Athlete[];
    arrayS = array.filter((obj) => {
      return obj.group.slice(0, 1) === letter;
    });
    arrayNoS = array.filter((obj) => {
      return obj.group.slice(0, 1) !== letter;
    });
    arrayS.sort(
      (a, b) =>
        Number(parseInt(a.group.slice(1))) - Number(parseInt(b.group.slice(1)))
    );
    arrayNoS.sort(
      (a, b) =>
        Number(parseInt(a.group.slice(1))) - Number(parseInt(b.group.slice(1)))
    );
    finArray = arrayS.concat(arrayNoS);
    return finArray;
  };
  const sortArrayToFrontT = (array: Athlete[]) => {
    let arrayS: Athlete[];
    let arrayNoS: Athlete[];
    let arrayST: Athlete[];
    let finArray: Athlete[];
    arrayS = array.filter((obj) => {
      return obj.group.slice(0, 1) === "T";
    });
    arrayST = array.filter((obj) => {
      return obj.isThrower === true;
    });
    arrayNoS = array.filter((obj) => {
      return obj.group.slice(0, 1) !== "T";
    });
    arrayS.sort(
      (a, b) =>
        Number(parseInt(a.group.slice(1))) - Number(parseInt(b.group.slice(1)))
    );

    arrayNoS.sort(
      (a, b) =>
        Number(parseInt(a.group.slice(1))) - Number(parseInt(b.group.slice(1)))
    );
    finArray = arrayS.concat(arrayST);
    finArray = finArray.concat(arrayNoS);
    return finArray;
  };
  return (
    <div className="meets-outer">
      <div className="roster-header-container">
        <div className="meets-header">Roster</div>
      </div>
      <div className="roster-main-container">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              className="nav-link active"
              id="nav-distance-tab"
              data-bs-toggle="tab"
              href="#nav-distance"
              role="tab"
              aria-controls="nav-distance"
              aria-selected="true"
              onClick={sort}
            >
              Distance
            </a>
            <a
              className="nav-link"
              id="nav-sprints-tab"
              data-bs-toggle="tab"
              href="#nav-sprints"
              role="tab"
              aria-controls="nav-sprints"
              aria-selected="false"
              onClick={sortGS}
            >
              Sprints
            </a>
            <a
              className="nav-link"
              id="nav-throws-tab"
              data-bs-toggle="tab"
              href="#nav-throws"
              role="tab"
              aria-controls="nav-throws"
              aria-selected="false"
              onClick={sortGT}
            >
              Throws
            </a>
          </div>
        </nav>

        <div
          className="tab-content roster-nav-main-container"
          id="nav-tabContent"
        >
          <div
            className=" tab-pane fade show active "
            id="nav-distance"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className="roster-nav-main-container">
              <div className="roster-table-container">
                <DistanceTable
                  athleteList={athleteList}
                  setAthletesList={setAthletesList}
                />
              </div>
              <div className="roster-form-container">
                <DistanceInput
                  onSubmit={handleFormSubmit}
                  athleteList={athleteList}
                  setAthletesList={setAthletesList}
                />
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-sprints"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <div className="roster-nav-main-container">
              <div className="roster-table-container">
                <SprintsTable
                  athleteList={athleteList}
                  setAthletesList={setAthletesList}
                />
              </div>
              <div className="roster-form-container">
                <SprintInput
                  onSubmit={handleFormSubmit}
                  athleteList={athleteList}
                  setAthletesList={setAthletesList}
                />
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-throws"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <div className="roster-nav-main-container">
              <div className="roster-table-container">
                <ThrowsTable
                  athleteList={athleteList}
                  setAthletesList={setAthletesList}
                />
              </div>
              <div className="roster-form-container">
                <ThrowsInput
                  onSubmit={handleFormSubmit}
                  athleteList={athleteList}
                  setAthletesList={setAthletesList}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RosterPage;
