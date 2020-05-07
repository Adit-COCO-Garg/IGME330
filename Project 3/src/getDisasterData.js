let apiReq = `https://api.reliefweb.int/v1/disasters?appname=rwint-user-0&profile=list&preset=latest&slim=0&fields[include][]=country&limit=100`;

async function fetchDisasters(){
    let response = await fetch(apiReq);
    if (!response.ok){
        console.error("Server was not able to get the info requested");
    }
    response = await response.json();
    return response;
}

export {fetchDisasters}