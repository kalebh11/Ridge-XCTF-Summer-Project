import React from "react";

import { useNavigate } from "react-router-dom";
import "./Meetcard.scss";
import { db } from "../../../App";
import {
  Firestore,
  QuerySnapshot,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { MeetObject } from "../../../common/meet.model";
interface Props {
  object: MeetObject;
  onRemoveMeet: any;
}
const MeetCard: React.FC<Props> = ({ object, onRemoveMeet }) => {
  let something = "/meet?meetid=" + object.id;
  const findMeetCardData = async () => {
    let meetFirestoreID;
    await getDocs(collection(db, "meets")).then((querySnapshot) => {
      const newData: any[] = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(newData);
      for (let i = 0; i < newData.length; i++) {
        if (newData[i].meet.id === object.id) {
          meetFirestoreID = newData[i].id;
        }
      }
    });
    return meetFirestoreID;
  };

  const deleteDocument = async () => {
    let meetID: any = await findMeetCardData();
    const docIdToDelete = meetID;
    const docRef = doc(db, "meets", docIdToDelete);

    deleteDoc(docRef)
      .then(() => {
        console.log("Meet Card deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDelete = () => {
    deleteDocument();
    onRemoveMeet(object.id);
  };

  return (
    <div className="meet-card-container">
      <div className="card-meet">
        <div className="close-section">
          <div className="x-area">
            <div className="close-container">
              <div className="leftright" onClick={handleDelete}></div>
              <div className="rightleft"></div>
              <label className="close">delete</label>
            </div>
          </div>
        </div>
        <div className="contentBx">
          <a href={something} className="meet-card-title">
            {object.name}
          </a>
          <div className="details-container detail-1 my-2">
            <div className="meet-card-detail-title">Date:</div>
            <div className="meet-card-detail">&nbsp;{object.date}</div>
          </div>
          <div className="details-container detail-2 my-2">
            <div className="meet-card-detail-title">Location:</div>
            <div className="meet-card-detail">&nbsp;{object.location}</div>
          </div>
          <div className="my-4">
            <button className="meet-card-button">Lineup</button>
            <button className="meet-card-button">Results</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetCard;
