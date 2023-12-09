// Import the functions you need from the SDKs you need
import { deleteApp, getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyC31C-a23IxbGC24YVYagzrR_GwnJcVZtw",
  authDomain: "webprj-b1844.firebaseapp.com",
  projectId: "webprj-b1844",
  storageBucket: "webprj-b1844.appspot.com",
  messagingSenderId: "115892220459",
  appId: "1:115892220459:web:21afeccd3d877ccadcf06e",
  measurementId: "G-HZWXZG7EET"
};

// Initialize Firebase
let firebaseApp;
if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig);
} else {
    firebaseApp = getApp();
    deleteApp(firebaseApp);
    firebaseApp = initializeApp(firebaseConfig);
}

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
