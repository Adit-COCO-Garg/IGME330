/* @author Adit Garg */

window.addEventListener("load",setup); 
let jokeBtn, setupL, punchline; // init global vars

function setup(){ // set global vars
    jokeBtn = document.querySelector("#jokeBtn");
    jokeBtn.addEventListener("click", jokeRequested);
    setupL = document.querySelector("#setup");
    punchline = document.querySelector("#punchline");
}

// we need to do data change within async func - this allows us to get rid of promise chaining and prevents undefined data
async function jokeRequested(){ // handle request
    let joke = await getLameDadJoke(); // await before data retreival including json parse!
    setupL.innerHTML = joke.q;
    punchline.innerHTML = joke.a;
}

async function getLameDadJoke(limit = 2){ // get requested data
    let response = await fetch(`get-random-joke.php`);
    if (!response.ok){
        console.error("Server was not able to get a corny joke :(");
    }
    let joke = await response.json();
    return joke;
    
    
}
