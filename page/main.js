import { SignIn } from "../components/sign-in.js";
document.addEventListener("DOMContentLoaded", () =>{
    ////sign-in 
    let signin = new SignIn();
    signin.render();
    if(localStorage.getItem("Auth")){
        location.href = './manager.html';
    }
})