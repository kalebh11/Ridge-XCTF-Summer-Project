import React, { useState } from "react";
import "../Roster.scss";
import { DistanceAthlete } from "../RosterPage";

interface PopupProps {
  onSubmit: (data: DistanceAthlete) => void;
}
const DistanceInput: React.FC<PopupProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState(0);
  const [group, setGroup] = useState("");
  const [vdot, setVdot] = useState(0);

  const handleNameChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(e.target.value);
  };
  const handleGradeChange = (e: { target: { value: any } }) => {
    setGrade(Number(e.target.value));
  };
  const handleGroupChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setGroup(e.target.value);
  };
  const handleVdotChange = (e: { target: { value: any } }) => {
    setVdot(Number(e.target.value));
    console.log("andrew is fat", e);
  };
  const generateRandomID = (): string => {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return array[0].toString(36);
  };

  const handleSubmitAthlete = (e: React.FormEvent) => {
    e.preventDefault();
    const newAthlete: DistanceAthlete = {
      name,
      group,
      grade,
      vdot,
      id: generateRandomID(),
    };
    onSubmit(newAthlete);
    setName("");
    setGroup("");
    setGrade(0);
    setVdot(0);
  };
  return (
    <div className="input-component-container">
      <div className="roster-form-main-container">
        <div className="roster-form-input-container">
          <div className="form__group field">
            <input
              type="input"
              className="form__field"
              placeholder="Name"
              name="name"
              id="name"
              value={name}
              required
              onChange={handleNameChange}
            />
            <label htmlFor="name" className="form__label">
              Athlete Name
            </label>
          </div>
        </div>
        <div className="roster-form-input-container">
          <div className="form__group field">
            <input
              type="number"
              className="form__field"
              placeholder="Grade"
              name="grade"
              id="grade"
              value={grade}
              required
              onChange={handleGradeChange}
            />
            <label htmlFor="grade" className="form__label">
              Athlete Grade
            </label>
          </div>
        </div>
        <div className="roster-form-input-container">
          <div className="form__group field">
            <input
              type="input"
              className="form__field"
              placeholder="Group"
              name="group"
              id="group"
              value={group}
              required
              onChange={handleGroupChange}
            />
            <label htmlFor="group" className="form__label">
              Athlete Group
            </label>
          </div>
        </div>
        <div className="roster-form-input-container">
          <div className="form__group field">
            <input
              type="number"
              className="form__field"
              placeholder="Vdot"
              name="vdot"
              id="vdot"
              value={vdot}
              required
              onChange={handleVdotChange}
            />
            <label htmlFor="vdot" className="form__label">
              Athlete VDOT
            </label>
          </div>
        </div>
      </div>
      <div className="roster-form-submit-container">
        <button className="button" id="button-7" onClick={handleSubmitAthlete}>
          <div id="dub-arrow">
            <img
              src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true"
              alt=""
            />
          </div>
          Enter Athlete
        </button>
      </div>
    </div>
  );
};

export default DistanceInput;
