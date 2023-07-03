import React, { useState } from "react";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";

export interface MeetObject {
  name: string;
  location: string;
  isStateMeet: boolean;
  date: String;
  id: string;
}
interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: MeetObject) => void;
}
const MeetsPopup: React.FC<PopupProps> = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [isStateMeet, setIsStateMeet] = useState(false);
  const [date, setDate] = useState("");
  const id = "";

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
    setDate(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process the user input value here

    const data: MeetObject = {
      name,
      location,
      isStateMeet,
      date,
      id: generateRandomID(),
    };
    setName("");
    setDate("");
    setLocation("");
    setIsStateMeet(false);
    onSubmit(data);
    onClose();
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
          <span className="meets-popup-header">Enter Meet Information</span>
          <div className="meets-popup-x-area">
            <span className="meets-popup-x">
              <button onClick={handleClose}>
                <GrClose className="meets-add-icon" />
              </button>
            </span>
          </div>
        </div>
        <div className="meets-popup-mid">
          <div className="meets-popup-divider">
            <input
              type="text"
              className="meets-popup-input-boxes"
              placeholder="Enter the meet name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="meets-popup-divider">
            <input
              type="text"
              className="meets-popup-input-boxes"
              placeholder="Enter the meet location"
              value={location}
              onChange={handleLocationChange}
            />
          </div>
          <div className="meets-popup-divider">
            <input
              type="date"
              className="meets-popup-input-boxes"
              placeholder="Enter the meet date"
              value={date}
              onChange={handleDateChange}
            />
          </div>
          <div className="meets-popup-divider">
            <input
              type="checkbox"
              checked={isStateMeet}
              onChange={handleStateChange}
            />
            <span>State Meet?</span>
          </div>
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
