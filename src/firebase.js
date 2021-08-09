import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAY9NqXp8oUDHCAIkOGaHNZa-VCCzk3SSY",
    authDomain: "fir-react-662ff.firebaseapp.com",
    projectId: "fir-react-662ff",
    storageBucket: "fir-react-662ff.appspot.com",
    messagingSenderId: "1024703155151",
    appId: "1:1024703155151:web:bd86adfe637ad84e4e60ba"
  };

export const auth = firebase.initializeApp(firebaseConfig).auth();