/* @author Adit Garg */

window.addEventListener("load",setup); 
let jokeBtn, type, price; // init global vars

function setup(){ // set global vars
    jokeBtn = document.querySelector("#activityBtn");
    jokeBtn.addEventListener("click", activityRequested);
    type = document.querySelector("#type");
    price = document.querySelector("#price");
}

// we need to do data change within async func - this allows us to get rid of promise chaining and prevents undefined data
async function activityRequested(){ // handle request
    let response = await getLameDadJoke(); // await before data retreival including json parse!
    activity.innerHTML =  `Activity: ${response.activity}`
    type.innerHTML = `Type: ${response.type}`
    price.innerHTML = `Price: $${response.price}`
}

async function getLameDadJoke(limit = 2){ // get requested data
    let response = await fetch("https://www.boredapi.com/api/activity",{method:"GET"});//THE GET DEF IS NOT NEEDED BUT IT IS HERE FOR LEARNING PURPOSES
    if (!response.ok){ // ERROR HANDLING
        console.error("Server was not able to get a corny joke :(");
    }
    console.log(response.headers);
    response = await response.json();
    return response;
    
    
}
