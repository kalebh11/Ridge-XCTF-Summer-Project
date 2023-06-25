import React, { useState } from "react";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";

export interface MeetObject {
  name: string;
  location: string;
  isStateMeet: boolean;
  date: Date;
  id: string;
}
const MeetsPopup: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: MeetObject) => void;
}> = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [isStateMeet, setIsStateMeet] = useState(false);
  const [date, setDate] = useState(new Date());

  const generateRandomID = (): string => {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return array[0].toString(36);
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };
  const handleStateChange = () => {
    setIsStateMeet((prevState) => !prevState);
  };
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);
    setDate(selectedDate);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process the user input value here
    console.log("User input:", name, location, isStateMeet, date);
    const data: MeetObject = {
      name,
      location,
      isStateMeet,
      date,
      id: generateRandomID(),
    };
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
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <label>
            Meet Location
            <input
              type="text"
              value={location}
              onChange={handleLocationChange}
            />
          </label>
          <label>
            Meet Date
            <input
              type="text"
              value={date.toISOString().split("T")[0]}
              onChange={handleDateChange}
            />
          </label>
          <label>
            State Meet
            <input
              type="checkbox"
              checked={isStateMeet}
              onChange={handleStateChange}
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
