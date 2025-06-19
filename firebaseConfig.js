import { initializeApp } from "firebase/app";
import {  initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// ✅ Corrected storageBucket
const firebaseConfig = {
  apiKey: "AIzaSyALFeAiF08Ag13MfT3YnxRzztJxrRCCktU",
  authDomain: "donation-app-da150.firebaseapp.com",
  projectId: "donation-app-da150",
  storageBucket: "donation-app-da150.appspot.com", // corrected
  messagingSenderId: "24342244597",
  appId: "1:24342244597:web:e56f1276681859131ae9bc",
  measurementId: "G-9133RR5M4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Auth with AsyncStorage persistence
const authentication = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { authentication };
