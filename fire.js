import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBo7y39nHtFTGZ43rGfYjjFtTouUME59CI",
    authDomain: "thenewcodeblack.firebaseapp.com",
    projectId: "thenewcodeblack",
    storageBucket: "thenewcodeblack.appspot.com",
    messagingSenderId: "222991431624",
    appId: "1:222991431624:web:a5d6d5e36a199041adb2fd",
    measurementId: "G-E222STTP68"
};

const fire = firebase.initializeApp(config);
export default fire;