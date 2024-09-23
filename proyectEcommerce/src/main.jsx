import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdp_Ob7_aRh2NaaZL83XYsw9w0YxEszVo",
  authDomain: "proyecto-ecommerce-sportshop.firebaseapp.com",
  projectId: "proyecto-ecommerce-sportshop",
  storageBucket: "proyecto-ecommerce-sportshop.appspot.com",
  messagingSenderId: "678484968547",
  appId: "1:678484968547:web:647cbd0b8959fed8ad6456",
  measurementId: "G-0F3QKGLGR5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
