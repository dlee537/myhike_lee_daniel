//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDxgHM3salg-I65muWqCrVHFOmlR9bKB-k",
    authDomain: "comp1800-202410-demo-f87e6.firebaseapp.com",
    projectId: "comp1800-202410-demo-f87e6",
    storageBucket: "comp1800-202410-demo-f87e6.appspot.com",
    messagingSenderId: "155012527728",
    appId: "1:155012527728:web:00d5406948029a9bbfe6b5"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
