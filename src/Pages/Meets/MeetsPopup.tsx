import React, { useState } from "react";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";
import { Meet } from "../../common/meet.model";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Meet) => void;
}

export const MeetsPopup: React.FC<PopupProps> = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [isStateMeet, setIsStateMeet] = useState(false);
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
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
  const handleNoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    // e.preventDefault();
    // Process the user input value here
    let meet = new Meet();
    meet.name = name;
    meet.date = date;
    meet.location = location;
    meet.isStateMeet = isStateMeet;
    meet.note = note;
    meet.events = [];
    setName("");
    setDate("");
    setLocation("");
    setIsStateMeet(false);
    onSubmit(meet);
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
      <div className="meets-popup-form">
        <div className="meets-popup-left">
          <div className="meets-popup-top">
            <div className="meets-popup-header">Meet Information</div>
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
            <button
              type="button"
              className="meets-popup-submit-button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="meets-popup-right">
          <div className="meets-popup-right-top">
            <div className="meets-popup-x-area">
              <button onClick={handleClose} className="meets-popup-x-button">
                <GrClose className="meets-add-icon" />
              </button>
            </div>
          </div>
          <div className="meets-popup-right-mid">
            <input
              type="input"
              className="meets-popup-notes-box"
              placeholder="Enter additional notes"
              value={note}
              onChange={handleNoteChange}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MeetsPopup;
