import firebase  from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAHD_9Ms6tDtHUPzd-yWQ2hf5l7QWXMc6A",
  authDomain: "crud-users-3cf27.firebaseapp.com",
  projectId: "crud-users-3cf27",
  storageBucket: "crud-users-3cf27.firebasestorage.app",
  messagingSenderId: "97941648714",
  appId: "1:97941648714:web:71d31bbe82e95809ba7db3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export {firebase};