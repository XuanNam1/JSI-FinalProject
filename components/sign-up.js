import { SignIn } from "./sign-in.js"
/// Import the functions you need from the SDKs you need
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";





export class SignUp {
    render() {
        const firebaseConfig = {
            apiKey: "AIzaSyAkmJjcPYVHUcAmG89QTXCmr0JwWB46fD8",
            authDomain: "projectnam-f6bbf.firebaseapp.com",
            projectId: "projectnam-f6bbf",
            storageBucket: "projectnam-f6bbf.appspot.com",
            messagingSenderId: "889132969201",
            appId: "1:889132969201:web:a8cab370e17af847980d50",
            measurementId: "G-M3D224PQWL",
            databaseURL: "https://projectnam-f6bbf-default-rtdb.firebaseio.com/"
            };
        
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        
        let renderForm = document.getElementById('render');
        renderForm.innerHTML = '';
        renderForm.innerHTML = `
            <h1>SIGN UP</h1>
                <input type="text" id="username" placeholder="Enter your username"><br>
                <input type="email" id="email" placeholder="Enter your email"><br>
                <input type="password" id="pass" placeholder="Enter your password"><br>
            <p id="ro-sign-in">Sign in</p>
            <button id="sign-up">Sign up</button>
        `
        document.getElementById('ro-sign-in').addEventListener('click', () => {
            let signin = new SignIn();
            signin.render();
        });
        document.getElementById('ro-sign-in').addEventListener('click', () => {
            let username = document.getElementById('username').value;
            let email = document.getElementById('email').value;
            let password = document.getElementById('pass').value;
            createUserWithEmailAndPassword(auth, email, password, )
                .then((userCredential) => {
                    const user = userCredential.user;
                    
                    set(ref(database, 'user.' + user.uid),{
                        username: username,
                        email: email,
                        password: password
                    });
                    alert('The account have been created');
                    document.getElementById('email').value 
                    = document.getElementById('pass').value 
                    = document.getElementById('username').value = '';
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        alert(errorMessage);
                    });
        });
    }
}