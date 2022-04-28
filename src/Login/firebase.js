import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var config = {
    apiKey: "AIzaSyD37pwBVEyp63odmj2atMmP0HFcOFW6KHM",
    authDomain: "future-66ed8.firebaseapp.com",
    projectId: "future-66ed8",
    storageBucket: "future-66ed8.appspot.com",
    messagingSenderId: "635699278451",
    appId: "1:635699278451:web:f3a991c99159f9fe60b006",
    measurementId: "G-EH5S6M131H"
};

const fire = firebase.initializeApp(config);
export default fire;