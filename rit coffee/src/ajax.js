async function downloadFile(url, callbackRef){
    let response = await fetch(url);
    if (!response.ok){
        console.error("Server was not able to get the info requested");
    }
    response = await response.json();
    callbackRef(response)
}


export {downloadFile}