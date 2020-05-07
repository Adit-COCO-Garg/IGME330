/* @author Adit Garg */

window.addEventListener("load",setup); 
let jokeBtn, content; // init global vars

function setup(){ // set global vars
    jokeBtn = document.querySelector("#jokeBtn");
    jokeBtn.addEventListener("click", jokeRequested);
    content = document.querySelector("#content");

}

// we need to do data change within async func - this allows us to get rid of promise chaining and prevents undefined data
async function jokeRequested(){ // handle request
    let limit = document.querySelector("#numJokesElement").value;
    console.log(limit)
    let jokes = await getLameDadJoke(limit); // await before data retreival including json parse!
    content.innerHTML = "";
    jokes.forEach(joke => {
        content.innerHTML+= `<h2>Question: ${joke.q}</h2>\n<p>${joke.a}</p><hr>`;
    });
}

async function getLameDadJoke(limit){ // get requested data
    let response = await fetch(`get-jokes.php?limit=${limit-1}`);
    if (!response.ok){
        console.error("Server was not able to get a corny joke :(");
    }
    let joke = await response.json();
    return joke;
    
    
}
