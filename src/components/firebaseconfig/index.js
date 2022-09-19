import firebase from "firebase/compat/app";
import { useState, useEffect } from "react";
import { getDatabase } from "firebase/database";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebaseConfig from "./config";

function StartFirebase() {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  return getDatabase(firebase.app());
}

function GetCurrentFirebaseUser() {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("user") || null
  );
  useEffect(() => {
    onAuthStateChanged(getAuth(firebase.app()), (user) => {
      if (user) {
        setCurrentUser(user);
        localStorage.setItem("user", user);
      } else {
        setCurrentUser(null);
        localStorage.removeItem("user");
      }
    });
  }, []);
  return currentUser;
}

export { StartFirebase, GetCurrentFirebaseUser };
