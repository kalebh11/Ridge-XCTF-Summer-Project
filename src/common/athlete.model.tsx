import { FirestoreDataConverter } from "firebase/firestore";

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
  switch(groupType) {
    case groups[0]:
      return 'D';
    case groups[1]:
      return 'S';
    case groups[2]:
      return 'T';
    case groups[3]:
      return 'H';
  }
};

export const groupToDisplay = (group) => {
  return groupToIndicator(group) + group.index;
};

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
