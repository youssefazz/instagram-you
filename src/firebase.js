import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
        apiKey: "AIzaSyD8eh4Jbg2ycBeJxl7ZD40FDOOdeYTyQIY",
        authDomain: "instagram-you.firebaseapp.com",
        databaseURL: "https://instagram-you.firebaseio.com",
        projectId: "instagram-you",
        storageBucket: "instagram-you.appspot.com",
        messagingSenderId: "678080769198",
        appId: "1:678080769198:web:9269bf3e3600002f2d513f",
        measurementId: "G-RC49NYZ5ZM"     
});
const db=firebaseApp.firestore();
const auth=firebase.auth();
const storage=firebase.storage();

export {db,auth,storage};