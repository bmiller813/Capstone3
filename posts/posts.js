/* Posts Page JavaScript */
"use strict";

const api = "https://microbloglite.herokuapp.com";
const postArea = document.getElementById("postArea");

function buildCard(section, mountain) {
    //created the card
    const div = document.createElement("div");
    div.className = "card";
    //put inside the document or card section which is a div being used
    section.appendChild(div);

    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerText = mountain.name;

    let desc = document.createElement("p");
    desc.innerText = mountain.desc;

    let timeStamp = document.createElement("p");
    timeStamp.innerText = ${mountain.elevation} ft;

    const divBody = document.createElement("div");
    divBody.className = "card-body";
    div.appendChild(divBody);
    divBody.append(cardTitle, desc, elevation);
}
document.addEventListener("DOMContentLoaded", ()=>{

    const options = { 
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
                  username: localStorage.username,
                  message: message.value,
                  timestamp: time
    })
    }

    const options2 = { 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
                  username: localStorage.username,
                  message: message.value,
                  timestamp: time
    })
    }

    fetch(api + "/api/posts", options)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("login-data", JSON.stringify(data));
            
        });
    
    fetch(api + "/api/posts", options2)
        .then(response => response.json())
        .then(data => {
            buildCard(postArea, data)
        });
}); //END OF ADDEVENTLISTENER 

