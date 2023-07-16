import React from "react";
import "./App.scss";
import Header from "./components/Header";
import SideList from "./components/SideList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MeetsPage from "./Pages/Meets/MeetsPage";
import RosterPage from "./Pages/Roster/RosterPage";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import Meetpage from "./Pages/Meets/Meetpage";
import MeetLineup from "./Pages/Meets/MeetComponents/Lineup/MeetLineup";
import MeetResults from "./Pages/Meets/MeetComponents/Results/MeetResults";

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
  return (
    <BrowserRouter>
      <div className="App">
        <div className="top-bar">
          <Header />
        </div>
        <div className="main">
          <div className="side-List">
            <SideList />
          </div>

          <div className="router-section">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="meets" element={<MeetsPage />} />
              <Route path="roster" element={<RosterPage />} />
              <Route path="meet" element={<Meetpage />} />
              <Route path="lineup" element={<MeetLineup />} />
              <Route path="results" element={<MeetResults />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
