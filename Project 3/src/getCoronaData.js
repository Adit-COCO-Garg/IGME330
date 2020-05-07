/* @author Adit Garg */

async function fetchCorona(){
    let response = await fetch(`https://corona-api.com/countries`);
    if (!response.ok){
        console.error("Server was not able to get the info requested");
    }
    response = await response.json();
    return response;
}



export {fetchCorona}