import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  getDoc,
  serverTimestamp,
  getDocs,
} from 'firebase/firestore';
import uniqid from 'uniqid'; 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyAxsHgleLIVUiEht38VuW6JEXmm4XUC58U",
  authDomain: "odin-wheres-waldo-66582.firebaseapp.com",
  projectId: "odin-wheres-waldo-66582",
  storageBucket: "odin-wheres-waldo-66582.appspot.com",
  messagingSenderId: "912078504678",
  appId: "1:912078504678:web:1f6c638c8f09341ccc3127"
};

initializeApp(firebaseConfig); 

const db = getFirestore(); 
const colRef = collection(db, 'user-records');  

let userId = uniqid(); 
//save scores
async function saveRecord(record) {
  try {
    await setDoc(doc(db, 'user-records', userId), {
      name: record.name,
      time: record.time,
      game: record.game,
      timestamp: serverTimestamp()
    });
  }
  catch(error) {
    console.error('Error saving record', error);
  }
}

//retrieve scores
function getRecord() {
  let records = []
  try {
    getDocs(colRef).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        records.push({ ...doc.data() }); 
      })
    }); 
  }
  catch(error){
    console.error(error); 
  }
  return records; 
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App saveRecord={saveRecord} getRecord={getRecord}/>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
