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
  serverTimestamp,
} from 'firebase/firestore';
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

const app = initializeApp(firebaseConfig); 

//save scores
async function saveRecord(record) {
  try {
    await addDoc(collection(getFirestore(), 'user-records'), {
      name: record.name,
      time: record.time,
      timestamp: serverTimestamp()
    });
  }
  catch(error) {
    console.error('Error saving record', error);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App saveRecord={saveRecord}/>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
