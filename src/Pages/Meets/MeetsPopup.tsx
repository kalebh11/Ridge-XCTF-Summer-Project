import React, { useState } from "react";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";
const MeetsPopup: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process the user input value here
    console.log("User input:", inputValue);
    setInputValue("");
    onClose(); // Close the popup after submission
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="meets-popup-modal"
    >
      <form onSubmit={handleSubmit} className="meets-popup-form">
        <div className="meets-popup-top">
          <span>Enter Meet Information</span>
          <div className="meets-popup-x-area">
            <span className="meets-popup-x">
              <button onClick={handleClose}>
                <GrClose className="meets-add-icon" />
              </button>
            </span>
          </div>
        </div>
        <div className="meets-popup-mid">
          <label>
            Meet Name
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Meet Location
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Meet Date
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="meets-popup-submit-area">
          <button type="submit" className="meets-popup-submit-button">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default MeetsPopup;
