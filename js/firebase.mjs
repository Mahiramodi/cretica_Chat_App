import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDQxwvXcneKO5oiVBTzVmGkIr4Iv3X5QQ0",
    authDomain: "chatapp-7d7bf.firebaseapp.com",
    databaseURL: "https://chatapp-7d7bf-default-rtdb.firebaseio.com",
    projectId: "chatapp-7d7bf",
    storageBucket: "chatapp-7d7bf.appspot.com",
    messagingSenderId: "1072792583015",
    appId: "1:1072792583015:web:b8e39cf3999b2839444dc2",
    measurementId: "G-5JHQ2LWSCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);