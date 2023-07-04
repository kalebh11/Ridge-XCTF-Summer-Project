import React from "react";
import "./App.scss";
import Header from "./components/Header";
import SideList from "./components/SideList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MeetsPage from "./Pages/Meets/MeetsPage";
import RosterPage from "./Pages/Roster/RosterPage";

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
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
