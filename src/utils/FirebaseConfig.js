import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyD1YqECObhF2MBE_LqVUBNn77oXmj52YN8",
    authDomain: "todolist-2f600.firebaseapp.com",
    databaseURL: "https://todolist-2f600.firebaseio.com",
    projectId: "todolist-2f600",
    storageBucket: "todolist-2f600.appspot.com",
    messagingSenderId: "841337962190",
    appId: "1:841337962190:web:dfc064fc13aa1cb6731a9f",
    measurementId: "G-6E9QGVT0ME"
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);


