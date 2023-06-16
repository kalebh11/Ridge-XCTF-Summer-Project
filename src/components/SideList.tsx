import React from "react";

const SideList = () => {
  return (
    <div className="outer">
      <div className="leftSpacing">
        <button className="button3">
          <span>Calender </span>
        </button>
      </div>
      <div className="leftSpacing">
        <button className="button3">
          <span>Meets </span>
        </button>
      </div>
      <div className="leftSpacing">
        <button className="button3">
          <span>Roster </span>
        </button>
      </div>
      <div className="leftSpacing">
        <button className="button3">
          <span>Plans </span>
        </button>
      </div>
    </div>
  );
};

export default SideList;
