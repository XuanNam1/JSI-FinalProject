import { SignUp } from "./sign-up.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";


export class SignIn {
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
        renderForm.innerHTML =
        `
            <h1>SIGN IN</h1>
                <input type="email" id="email" placeholder="Enter your email"><br>
                <input type="password" id="pass" placeholder="Enter your password"><br>
            <p id="ro-sign-up">Sign up</p>
                <button id="sign-in">Sign in</button>
        `
        document.getElementById('ro-sign-up').addEventListener('click', () =>{
            let signup = new SignUp();
            signup.render();
        });
        document.getElementById('sign-in').addEventListener('click', () => {
            let email = document.getElementById('email').value;
            let pw = document.getElementById('pass').value;
            signInWithEmailAndPassword(auth, email, pw)
                .then((userCredential) => {
                    // Signed in 
                   const user = userCredential.user;
                   const usersRef = ref(database, 'users/' + user.uid);

                   get(usersRef)
                   .then((snap) => {
                        if(snap.exists()){
                            const now = Date.now();
                            let expTime = new Date(now);
                            expTime.setDate(expTime.getDate() + 3);
                            let token = {
                                userName : snap.val().username,
                                email: snap.val().email,
                                expTime: expTime.setDate(expTime.getDate() + 3)
                            }
                            ///let sha256 = new SHA256();
                            let tokenCry = JSON.stringify(token)
                            localStorage.setItem('Auth', tokenCry);
                            location.href = './page/Manger.html';
                        }
                        else{
                            console.log('account not found')
                        }
                   })
                   .catch((err) => {
                        console.log(err)
                   });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        });
    }
}