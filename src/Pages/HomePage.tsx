import React from "react";
import TodoComponent from "../components/TodoComponent/TodoComponent";

const HomePage = () => {
  return (
    <div className="outer2">
      <div className="mid-section"></div>
      <div className="right-section">
        <TodoComponent />
      </div>
    </div>
  );
};

export default HomePage;
