class firebase{
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: "AIzaSyAkmJjcPYVHUcAmG89QTXCmr0JwWB46fD8",
    authDomain: "projectnam-f6bbf.firebaseapp.com",
    projectId: "projectnam-f6bbf",
    storageBucket: "projectnam-f6bbf.appspot.com",
    messagingSenderId: "889132969201",
    appId: "1:889132969201:web:a8cab370e17af847980d50",
    measurementId: "G-M3D224PQWL"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
}