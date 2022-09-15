import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase(){
    const firebaseConfig = {
        apiKey: "AIzaSyAJF5pxO9rQ5YIAz5eHdZ6FjSUYbMG2dQY",
        authDomain: "league-of-legends-list.firebaseapp.com",
        databaseURL: "https://league-of-legends-list-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "league-of-legends-list",
        storageBucket: "league-of-legends-list.appspot.com",
        messagingSenderId: "500898149083",
        appId: "1:500898149083:web:6a2a73eb331765772292fe"
      };
      
      const app = initializeApp(firebaseConfig);

      return getDatabase(app)
}

export default StartFirebase;