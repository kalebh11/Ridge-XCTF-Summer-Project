import { FC, useEffect, useState } from "react";
import "./App.scss";
import { Header } from "./common/components/header/Header";
import { SideList } from "./common/components/sidelist/SideList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { MeetsPage } from "./Pages/Meets/MeetsPage";
import { RosterPage } from "./Pages/Roster/RosterPage";

import { initializeApp } from "firebase/app";
import { Firestore, getFirestore, query } from "firebase/firestore";
import { Meetpage } from "./Pages/Meets/Meetpage";
import { MeetLineup } from "./Pages/Meets/MeetComponents/Lineup/MeetLineup";
import { MeetResults } from "./Pages/Meets/MeetComponents/Results/MeetResults";
import { AthletePage } from "./Pages/Roster/Athlete/AthletePage";

import { collection, getDocs } from "firebase/firestore";
import { Athlete, athleteConverter, athleteReducer } from "./common/athlete.model";
import { Meet, meetConverter, meetReducer } from "./common/meet.model";
import { configureStore } from "@reduxjs/toolkit";

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
export const db = getFirestore(app);
const App: FC = () => {
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  const [meets, setMeets] = useState<Meet[]>([]);
  const athleteCollection = collection(db, "athletes").withConverter(athleteConverter);
  const meetCollection = collection(db, "meets").withConverter(meetConverter);
  const findAthleteData = async () => {
    let snapshop = await getDocs(athleteCollection).then((querySnapshot) => {
      let athleteArray: Athlete[] = [];
      querySnapshot.docs.forEach((doc)=> {
        athleteArray.push(doc.data());
      });
      setAthletes(athleteArray);
    });
  };
  const findMeetData = async () => {
    let snapshot = await getDocs(meetCollection).then((querySnapshot) => {
      let meets: Meet[] = [];
      querySnapshot.docs.forEach((doc)=> {
        meets.push(doc.data());
      });
      console.log(meets);
      setMeets(meets);
    });
  };
  useEffect(() => console.log('Athletes Updated: ',athletes), [athletes]);
  useEffect(() => console.log('Meets Updated: ',meets), [meets]);
  useEffect(() => {
    findAthleteData();
    findMeetData();
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <div className="top-bar">
          <Header />
        </div>
        <div className="main">
          <div className="side-List">
            <SideList athleteList={athletes} setAthletesList={setAthletes} />
          </div>

          <div className="router-section">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="meets"
                element={<MeetsPage meetList={meets} setMeetList={setMeets} />}
              />
              <Route
                path="roster"
                element={
                  <RosterPage
                    athleteList={athletes}
                    setAthletesList={setAthletes}
                  />
                }
              />
              <Route
                path="meet"
                element={<Meetpage meetList={meets} setMeetList={setMeets} />}
              />
              <Route
                path="lineup"
                element={<MeetLineup meetList={meets} setMeetList={setMeets} />}
              />
              <Route path="results" element={<MeetResults />} />
              <Route
                path="athlete"
                element={
                  <AthletePage
                    athleteList={athletes}
                    setAthleteList={setAthletes}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
