import React from "react";
import { VscAdd } from "react-icons/vsc";
const MeetsPage = () => {
  return (
    <div className="outer2">
      <div className="meet-top-bar">
        <div className="new-meet-button-area">
          <button className="new-button">
            <div className="meets-add-icon-container">
              <VscAdd className="meets-add-icon" />
            </div>

            <div className="new-button-text">New</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetsPage;
