import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import SideList from "./components/SideList";
import TodoComponent from "./components/TodoComponent/TodoComponent";


const App: React.FC = () => {
  return (
    <div className="App">
      <div className="top-bar">
        <Header />
      </div>
      <div className="main">
        <div className="side-List">
          <SideList />
        </div>
        <div className="mid-section">
          <h2>test</h2>
        </div>
        <div className="right-section">
          <TodoComponent />
        </div>
      </div>
    </div>
  );
};

export default App;
