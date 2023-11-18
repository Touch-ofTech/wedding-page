import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_API_KEY_TWO,
  authDomain: "weddingpage-62db4.firebaseapp.com",
  projectId: "weddingpage-62db4",
  storageBucket: "weddingpage-62db4.appspot.com",
  messagingSenderId: import.meta.env.REACT_APP_API_KEY_MESS,
  appId: import.meta.env.REACT_APP_API_KEY,
};


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// export default db;
export const db = getDatabase(firebaseApp);