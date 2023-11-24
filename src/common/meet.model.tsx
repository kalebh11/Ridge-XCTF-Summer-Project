import { FirestoreDataConverter, addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export class Meet {
  name: string;
  location: string;
  isStateMeet: boolean;
  date: String;
  id: string;
  note: string;
  events: Event[];
  url: string;
}

export class Event {
  eventType: string;
  results: EventResult[];
}
export class EventResult {
  athleteid: string;
  result: any;
}
export enum eventTypeEnum {
  sixteen = "1600",
  mile = "Mile",
  twoMile = "Two Mile",
  thirtyTwo = "3200",
  thousand = "1000",
  twelve = "1200",
  eight = "800",
  four = "400",
  six = "600",
  three = "300",
  two = "200",
  one = "100",
  fiftyFive = "55",
  fourHundredHurdles = "400mH",
  oneTenHurdles = "110mH",
  oneHundredHurdles = "100mH",
  longJump = "Long Jump",
  tripleJump = "Triple Jump",
  highJump = "High Jump",
  poleVault = "Pole Vault",
  shotPut = "Shot Put",
  javelin = "Javelin",
  discus = "Discus",
  //relays
  fourXone = "4x100",
  fourXtwo = "4x200",
  fourXfour = "4x400",
  fourXeight = "4x800",
  fourXsixteen = "4x1600",
  fourXmile = "4xMile",
  dmr = "Distance Medley Relay",
  threeXfourHundredHurdles = "3x400mH",
  shuttleHurdles = "shuttleHurdles",
}
export const eventComparetor = (eventType, result1, result2) => {
  switch(eventType) {
    case eventTypeEnum.sixteen:
    case eventTypeEnum.mile:
      return 0;
  }
};
export const meetConverter: FirestoreDataConverter<Meet> = {
  toFirestore: (meet: Meet) => {
    return {
      name: meet.name,
      location: meet.location,
      isStateMeet: meet.isStateMeet,
      date: meet.date,
      note: meet.note,
      events: meet.events,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    console.log(data);
    let meet = new Meet();
    meet.name = data.name;
    meet.location = data.location;
    meet.isStateMeet = data.isStateMeet;
    meet.date = data.date;
    meet.note = data.note;
    meet.events = data.events;
    meet.id = snapshot.id;

    return meet;
  },
};
const meetCollection = collection(db, "meets").withConverter(meetConverter);
export const fetchAllMeets = async () => {
  let querySnapshot = await getDocs(meetCollection);
  let meets: Meet[] = [];
  querySnapshot.docs.forEach((doc)=> {
    meets.push(doc.data());
  });
  return meets;
};
export const saveMeet = async (meet: Meet) => {
  try {
    const docRef = await addDoc(meetCollection, meet);
    console.log("Document written with ID: ", docRef.id);
    meet.id = docRef.id;
    return meet;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
  return undefined;
};
export const deleteMeet = async (meetId: string) => {
  try {
    await deleteDoc(doc(meetCollection, meetId));
  } catch (error) {
    console.error("Error removing document: ", error);
  }
}