import { FirestoreDataConverter } from "firebase/firestore";

export class Athlete {
  name: string;
  grade: number;
  group: string;
  id: string;
  vdot: number;
  meets: string[];
  labels: string[];
  email: string;
  parentemail: string;
}
export const groups = Object.freeze([
  "distance",
  "sprints",
  "throws",
  "hurdles",
]);

export const eventConverter: FirestoreDataConverter<Athlete> = {
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
