// Firebase App (the core Firebase SDK) is always required and must be listed first
import { initializeApp } from "firebase/app";

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import './i18n.js';
import RouterPanel from './AppRouter';

// set up firebase connection
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI_sib3MuwtZStKpDmTYfpq6-MT2-cP4Q",
  authDomain: "inkstone-site.firebaseapp.com",
  projectId: "inkstone-site",
  messagingSenderId: "25767716073",
  appId: "1:25767716073:web:ab3299ff684827d6973c78",
  measurementId: "G-8P2VFD0QS5",
  storageBucket: "gs://inkstone-site.appspot.com"
};
// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <Suspense fallback="Loading...">
      <RouterPanel/>
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
