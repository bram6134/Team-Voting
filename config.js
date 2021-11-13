import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA_-nMJjQWpPVP_nz0uPD11HlEEGLCBxG0",
    authDomain: "teamvoting-55cc8.firebaseapp.com",
    databaseURL: "https://teamvoting-55cc8-default-rtdb.firebaseio.com/",
    projectId: "teamvoting-55cc8",
    storageBucket: "teamvoting-55cc8.appspot.com",
    messagingSenderId: "437334103961",
    appId: "1:437334103961:web:52ef4dc72054203e26e508"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();