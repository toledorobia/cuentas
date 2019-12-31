import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDWbe87D6h26MotK-LuThTUOkrgFlPUh6o",
  authDomain: "cuentas-to.firebaseapp.com",
  databaseURL: "https://cuentas-to.firebaseio.com",
  projectId: "cuentas-to",
  storageBucket: "cuentas-to.appspot.com",
  messagingSenderId: "29154188193",
  appId: "1:29154188193:web:301d4e2f32d817b318c9e0",
  measurementId: "G-6J8YRW0RQR"
});

export default app;
