/* Posts Page JavaScript */
"use strict";

const postArea = document.getElementById("postArea");
const baseURL = "https://microbloglite.herokuapp.com";
const endpoint = "/api/posts?limit=100&offset=0";

fetch(baseURL + endpoint, {
    method: "GET",
    headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${localStorage.token}` // use the token we stored on the client browser disk for later use on the index.html with main.js code
    }
}).then((response) => {
    return response.json()
}).then((data)=>{
    data.forEach(post => {
        postArea.innerHTML += <div class="card shadow p-3 mb-5">${post.text}</div>;
    });
})