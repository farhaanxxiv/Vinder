import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";



// const firebaseConfig = {
//     apiKey: "AIzaSyB6KlT6u_WgJsGdwVQE9HDijxoA1FPBl_M",
//     authDomain: "vinder-12239.firebaseapp.com",
//     projectId: "vinder-12239",
//     storageBucket: "vinder-12239.appspot.com",
//     messagingSenderId: "986670249329",
//     appId: "1:986670249329:web:52038b955ddf3eda9cb2d0",
//     measurementId: "G-R04LRT7ED1"
//   };
//   console.log(JSON.stringify(firebaseConfig))
console.log(process.env.REACT_APP_FIREBASE_CONFIG)
console.log(typeof process.env.REACT_APP_FIREBASE_CONFIG)
console.log(JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG))


const firebaseConfig = process.env.REACT_APP_FIREBASE_CONFIG

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const firebaseAuth = getAuth(app);
