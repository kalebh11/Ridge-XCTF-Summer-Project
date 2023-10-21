import React, { useEffect, useState } from "react";
import TodoComponent from "../common/components/todo/TodoComponent";

export const HomePage = () => {
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
