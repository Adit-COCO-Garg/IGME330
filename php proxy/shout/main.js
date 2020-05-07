/* @author Adit Garg */

window.addEventListener("load",setup); 

function setup(){ // set global vars
    shoutBtn.addEventListener("click", shoutRequested);
}

// we need to do data change within async func - this allows us to get rid of promise chaining and prevents undefined data
async function shoutRequested(){ // handle request
    let response = await getShout(); // await before data retreival including json parse!
    shoutedText.innerHTML = response.OUTPUT;
}

async function getShout(){ // get requested data
    let text = shoutThisBox.value == ""? "" : `?text=encodeURIComponent(shoutThisBox.value)`;
    let response = await fetch(`shout-proxy-improved.php${text}`,{method:"GET"});//THE GET DEF IS NOT NEEDED BUT IT IS HERE FOR LEARNING PURPOSES
    if (!response.ok){ // ERROR HANDLING
        console.error("Server was not able to get a shout back :(");
    }
   
    response = await response.json();
    console.log(response);
    return response;
}
