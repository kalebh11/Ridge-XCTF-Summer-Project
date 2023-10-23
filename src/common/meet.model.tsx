import { FirestoreDataConverter } from "firebase/firestore";

export class Meet {
  name: string;
  location: string;
  isStateMeet: boolean;
  date: String;
  id: string;
  note: string;
  events: Event[];
}

export class Event {
  eventType: string;
  id: string;
  athletes: string[];
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
};
const meetInitial = {
  meets: []
};
export function meetReducer(state = meetInitial, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case 'meet/set':
      return {...state, meets: action.payload};
    case 'meet/add':
      return {...state, meets: [...state.meets, action.payload]};
    case 'meet/delete':
      return {...state, meets: state.meets.filter(meet => meet.id !== action.payload)};
    default:
      return state;
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
