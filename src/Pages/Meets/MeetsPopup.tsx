import React, { useState } from "react";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../App";
import { MeetEvent } from "./MeetsPage";
export interface MeetObject {
  name: string;
  location: string;
  isStateMeet: boolean;
  date: String;
  id: string;
  note: string;
  events: MeetEvent[];
}
interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: MeetObject) => void;
}

const addMeet = async (e: any, meet: MeetObject) => {
  e.preventDefault();

  try {
    const docRef = await addDoc(collection(db, "meets"), {
      meet: meet,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const MeetsPopup: React.FC<PopupProps> = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [isStateMeet, setIsStateMeet] = useState(false);
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
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
  const handleNoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    // e.preventDefault();
    // Process the user input value here

    const data: MeetObject = {
      name,
      location,
      isStateMeet,
      date,
      id: generateRandomID(),
      note,
      events: [],
    };
    setName("");
    setDate("");
    setLocation("");
    console.log("why the fuck did this run");
    setIsStateMeet(false);
    onSubmit(data);
    addMeet(e, data);
    onClose();
  };

  const handleClose = () => {
    console.log("test");
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
