import React, { useState } from "react";
import "../Roster.scss";
import { Athlete } from "../RosterPage";

interface PopupProps {
  onSubmit: (data: Athlete) => void;
  athleteList: Athlete[];
  setAthletesList: React.Dispatch<React.SetStateAction<Athlete[]>>;
}
const SprintInput: React.FC<PopupProps> = ({
  onSubmit,
  athleteList,
  setAthletesList,
}) => {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState(0);
  const [group, setGroup] = useState(0);

  const handleNameChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(e.target.value);
  };
  const handleGradeChange = (e: { target: { value: any } }) => {
    setGrade(Number(e.target.value));
  };
  const handleGroupChange = (e: { target: { value: any } }) => {
    setGroup(Number(e.target.value));
  };
  const generateRandomID = (): string => {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return array[0].toString(36);
  };
  const sortArrayToFront = (array: Athlete[]) => {
    let arrayS: Athlete[];
    let arrayNoS: Athlete[];
    let finArray: Athlete[];
    arrayS = array.filter((obj) => {
      return obj.group.slice(0, 1) === "T";
    });
    arrayNoS = array.filter((obj) => {
      return obj.group.slice(0, 1) !== "T";
    });
    arrayS.sort(
      (a, b) =>
        Number(parseInt(a.group.slice(1))) - Number(parseInt(b.group.slice(1)))
    );
    arrayNoS.sort(
      (a, b) =>
        Number(parseInt(a.group.slice(1))) - Number(parseInt(b.group.slice(1)))
    );
    finArray = arrayS.concat(arrayNoS);
    return finArray;
  };
  const handleSubmitAthlete = (e: React.FormEvent) => {
    e.preventDefault();
    const newAthlete: Athlete = {
      name,
      group: "T" + group,
      grade,
      vdot: 0,
      meets: [],
      id: generateRandomID(),
    };
    onSubmit(newAthlete);
    let smth = [...athleteList, newAthlete];

    setAthletesList(sortArrayToFront(smth));
    setName("");
    setGroup(0);
    setGrade(0);
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
              type="number"
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

export default SprintInput;
