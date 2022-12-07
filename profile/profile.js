// put this in bio api field
// https://en.gravatar.com/userimage/228590619/6c8d0c6fdd5e2afda399a75446c1bc1a.jpg?size=400
//set bio to path followed by (picture) | followed by bio text then split("|")

const api = "https://microbloglite.herokuapp.com";

const message = document.getElementById("msgArea")
const submit = document.getElementById("messageBtn")

const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        text: message.value,

    })
}

submit.addEventListener("click", () => {
    fetch(api + "/api/posts", options)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("login-data", JSON.stringify(data));
            location.assign("posts/index.html");  // redirect
        });
}); //END OF ADDEVENTLISTENER 



//LOGOUT
function isLoggedIn() {
    const loginData = getLoginData();
    return Boolean(loginData.token);
}


function getLoginData() {
    return JSON.parse(window.localStorage.getItem("login-data")) || {};
}

const logoutBtn = document.getElementById("logout")
// This is the logout() function you will use for any logout button
// which you may include in various pages in your app. Again, READ this
// function and you will probably want to re-use parts of it for other
// fetch() requests you may need to write.
logoutBtn.addEventListener("click", () => {
    const loginData = getLoginData();

    // GET /auth/logout
    const options = {
        method: "GET",
        headers: {
            // This header is how we authenticate our user with the
            // server for any API requests which require the user
            // to be logged-in in order to have access.
            // In the API docs, these endpoints display a lock icon.
            Authorization: `Bearer ${loginData.token}`,
        },
    };

    fetch(api + "/auth/logout", options)
        .then(response => response.json())
        .then(data => console.log(data))
        .finally(() => {
            // We're using finally() so that we will continue with the
            // browser side of logging out (below) even if there is an 
            // error with the fetch request above.

            window.localStorage.removeItem("login-data");  // remove login data from LocalStorage
            window.location.assign("/");  // redirect to landing page
        });


})