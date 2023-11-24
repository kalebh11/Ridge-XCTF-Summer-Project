import { FC, useEffect, useState } from "react";
import "./App.scss";
import { Header } from "./common/components/header/Header";
import { SideList } from "./common/components/sidelist/SideList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { MeetsPage } from "./Pages/Meets/MeetsPage";
import { RosterPage } from "./Pages/Roster/RosterPage";
import { Meetpage } from "./Pages/Meets/Meetpage";
import { MeetLineup } from "./Pages/Meets/MeetComponents/Lineup/MeetLineup";
import { MeetResults } from "./Pages/Meets/MeetComponents/Results/MeetResults";
import { AthletePage } from "./Pages/Roster/Athlete/AthletePage";
import { Athlete, fetchAllAthletes } from "./common/athlete.model";
import { EventResult, Meet, eventComparetor, fetchAllMeets } from "./common/meet.model";



const App: FC = () => {
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  const [meets, setMeets] = useState<Meet[]>([]);
  const [bestTimes, setBestTimes] = useState({});
  useEffect(() => {
    Promise.all([fetchAllAthletes(),fetchAllMeets()]).then((results) => {
      let athletes = results[0];
      let meets = results[1];
      setAthletes(athletes);
      setMeets(meets);
      for(let athlete of athletes) {
        setBestTimes((prevState => ({
          ...prevState,
          [athlete.id]: getBestTimesForAthlete(athlete)
        })))
      }
    });
  }, []);
  const getBestTimesForAthlete = (athlete) => {
    //scroll through every meet
    let bestTimes = {};
    for(let meet of meets) {
      for(let event of meet.events) {
        let eventResult: EventResult;
        for(let result of event.results) {
          if(result.athleteid === athlete.id) {
            eventResult = result;
            break;
          }
        }
        if(eventResult) {
          if(bestTimes[event.eventType]) {
            if(eventComparetor(event.eventType,bestTimes[event.eventType],eventResult.result) >= 1) {
              bestTimes[event.eventType] = eventResult.result;
            }
          } else {
            bestTimes[event.eventType] = eventResult.result;
          }
        }
      }
    }
    return bestTimes;
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
                    meetList={meets}
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
