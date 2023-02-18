import firebase from 'firebase';
// Required for side-effects
require('firebase/firestore');

const config = {
  apiKey: "AIzaSyC-644MhwqMhNojjhrAv_7e8v0gIRtLKtY",
  authDomain: "react-calendar-de.firebaseapp.com",
  projectId: "react-calendar-de",
  storageBucket: "react-calendar-de.appspot.com",
  messagingSenderId: "1067229699096",
  appId: "1:1067229699096:web:17d20b4b17c927c536376d",
  measurementId: "G-ZDE0TYBJKT"
};

firebase.initializeApp(config);

export const storageKey = 'KEY_FOR_LOCAL_STORAGE';
export const db = firebase.firestore();
export const firebaseAuth = firebase.auth;
export const minTime = new Date();
minTime.setHours(7, 0, 0);
export const maxTime = new Date();
maxTime.setHours(20, 0, 0);
export const calendarInitialState = {
  events: [],
  equipments: [],
  people: [],
  modal: {
    id: null,
    title: null,
    desc: null,
    start: new Date(2018, 4, 4, 7, 0, 0),
    end: new Date(2018, 4, 4, 8, 0, 0),
  },
  modalOpen: false,
  equipmentsOpen: false,
  peopleOpen: false,

}
