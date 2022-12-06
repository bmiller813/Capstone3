"use strict";

const api = "https://microbloglite.herokuapp.com";

document.addEventListener('DOMContentLoaded', () => {

const regForm = document.querySelector("#register"); 

regForm.onsubmit = function (event) {
    // Prevent the form from refreshing the page,
    // as it will do by default when the Submit event is triggered:
    event.preventDefault();

    // We can use loginForm.username (for example) to access
    // the input element in the form which has the ID of "username".
    const regData = {
        username: username.value,
        fullname: fullname.value,
        password: password.value,
    }

    // Disables the button after the form has been submitted already:
    registerForm.registerButton.disabled = true;

    // Time to actually process the login using the function from auth.js!
    register(regData);
};

function register(regData) {
    const options = { 
        method: "POST",
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(regData),
    };

    return fetch(api + "/auth/login", options)
        .then(response => response.json())
        .then(regData => {
            console.log(regData);
            window.localStorage.setItem("login-data", JSON.stringify(regData));
            window.location.assign("/index.html");  // redirect
            alert('Successful Registration. Log in.');
        });
}

//Might have to move above 

}) //END OF DOMCONTENTLOADED EVENT LISTENER