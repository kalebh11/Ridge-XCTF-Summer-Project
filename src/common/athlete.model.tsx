import { FirestoreDataConverter, addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export class Athlete {
  name: string;
  grade: number;
  group: Group;
  id: string;
  vdot: number;
  meets: string[];
  labels: string[];
  email: string;
  parentemail: string;
}
export class Group {
  type: string;
  index: number;
}
/**
 * Groups for distinction
 * 0 distance
 * 1 sprints
 * 2 throws
 * 3 hurdles
 */
export const groups = Object.freeze([
  "distance",
  "sprints",
  "throws",
  "hurdles",
]);

export const groupToIndicator = (groupType) => {
  switch (groupType) {
    case groups[0]:
      return 'D';
    case groups[1]:
      return 'S';
    case groups[2]:
      return 'T';
    case groups[3]:
      return 'H';
  }
  return '';
};

export const groupToDisplay = (group) => {
  if(group) {
    return groupToIndicator(group.type) + group.index;
  } else {
    return '';
  }
};

export const convertmilestokilometers = ($dist) => {
  return $dist * 1.60935;
}
/**
 * Calculate VO2 max
 *
 * @param number hrs  Hours
 * @param number mins Minutes
 * @param number secs Seconds
 * @param number dist Distance (km)
 *
 * @return number
 */
export const vdotCalculator = (dist, hrs, mins, secs) => {
  let th = hrs * 60; //all time has to be in minutes
  let tm = mins * 1; //this is already in minutes
  let ts = secs / 60; //this has to be converted to minutes
  let ttime = th + tm + ts; //getting the total minutes then
  dist = dist * 1000; //change input from kilometers to meters
  let d = dist / ttime; //velocity of the runner

  //calculate % of VO2max at this runner's velocity
  let p1 = Math.exp(-0.012778 * ttime);
  p1 = 0.1894393 * p1;
  let p2 = Math.exp(-0.1932605 * ttime);
  p2 = 0.2989558 * p2;
  let p = 0.8 + p1 + p2;

  //calculate oxygen cost for this velocity
  let v = -4.60;
  v = v + (0.182258 * d);
  v = v + (0.000104 * d * d);

  //calculate the VO2max of the runner to the second decimal position
  let vo2 = (Math.round((v / p) * 100) / 100).toFixed(2);

  //return the VO2max
  return vo2;
}


export const athleteConverter: FirestoreDataConverter<Athlete> = {
  toFirestore: (athlete: Athlete) => {
    return {
      name: athlete.name,
      grade: athlete.grade,
      group: athlete.group,
      vdot: athlete.vdot,
      meets: athlete.meets,
      labels: athlete.labels,
      email: athlete.email,
      parentemail: athlete.parentemail,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    let athlete = new Athlete();
    athlete.name = data.name;
    athlete.grade = data.grade;
    athlete.group = data.group;
    athlete.vdot = data.vdot;
    athlete.meets = data.meets;
    athlete.labels = data.labels;
    athlete.email = data.email;
    athlete.parentemail = data.parentemail;
    athlete.id = snapshot.id;
    return athlete;
  },
};
const athleteCollection = collection(db, "athletes").withConverter(athleteConverter);
export const fetchAllAthletes = async () => {
  let querySnapshot = await getDocs(athleteCollection);
  let athleteArray: Athlete[] = [];
  querySnapshot.docs.forEach((doc)=> {
    athleteArray.push(doc.data());
  });
  return athleteArray;
};
export const saveAthlete = async (athlete: Athlete) => {
  try {
    const docRef = await addDoc(athleteCollection, athlete);
    console.log("Document written with ID: ", docRef.id);
    athlete.id = docRef.id;
    return athlete;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  return undefined;
};