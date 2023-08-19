import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import SideList from "./components/SideList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MeetsPage from "./Pages/Meets/MeetsPage";
import RosterPage, { Athlete } from "./Pages/Roster/RosterPage";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Firestore, getFirestore } from "firebase/firestore";
import Meetpage from "./Pages/Meets/Meetpage";
import MeetLineup from "./Pages/Meets/MeetComponents/Lineup/MeetLineup";
import MeetResults from "./Pages/Meets/MeetComponents/Results/MeetResults";
import AthletePage from "./Pages/Roster/Athlete/AthletePage";
import { MeetObject } from "./Pages/Meets/MeetsPopup";
import { collection, getDocs } from "firebase/firestore";

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

const App: React.FC = () => {
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  const [meets, setMeets] = useState<MeetObject[]>([]);

  const findAthleteData = async () => {
    await getDocs(collection(db, "athletes")).then((querySnapshot) => {
      let athleteArray: any[] = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setAthletes(athleteArray);
    });
  };
  const findMeetData = async () => {
    await getDocs(collection(db, "meets")).then((querySnapshot) => {
      const meetArray: any[] = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(meetArray);
      for (let i = 0; i < meetArray.length; i++) {
        addObjectToArrayMeets(meetArray[i].meet);
      }
    });
  };
  useEffect(() => console.log(athletes), [athletes]);
  useEffect(() => {
    findAthleteData();
    findMeetData();
  }, []);

  const addObjectToArrayMeets = (object: MeetObject) => {
    setMeets((prevList) => [...prevList, object]);
  };
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
