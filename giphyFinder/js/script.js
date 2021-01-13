/* vars */
const API_PARAMS = {
    query: "&q=",
    limit:100,
    query_limit: `&limit=100`,
    offset: 0,
    rating: "g",
    lang: "en",
    random_id: "oof",
    search_url: "https://api.giphy.com/v1/gifs/search?" + "api_key=md8TKXmklb61Iwgx5ARcazARdFESrjUy",
    q_time: 0,// a switch for refreshing queries - it deletes previous results [1: delete, 0: keep]
    colc: "" // variable to store existing colc
};
let defHtml = `<section class="grid-col grid-col--1"></section>
<section class="grid-col grid-col--2"></section>
<section class="grid-col grid-col--3"></section>
<section class="grid-col grid-col--4"></section>`;


/* setup */
window.addEventListener("load", addScrolledToBottomEvent);
window.addEventListener("load", () => { // sets up search and add results functionality
    document.querySelector("#searchterm").addEventListener("keyup", event=>{
        if (event.key == "Enter"){
            searchButtonClicked();
        }
    });
    
});

function addScrolledToBottomEvent(){ // button to add results when at bottom
    window.addEventListener("scroll",()=>{
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) { // if arrount bottom of page, prompt add results
            document.querySelector("#moreResultsBtn").hidden=false;
        } else{
            document.querySelector("#moreResultsBtn").hidden=true;
        }
    });
    document.querySelector("#moreResultsBtn").addEventListener("click",moreResults);
}

async function searchButtonClicked() {
        if (API_PARAMS.q_time != 0) { // destroy colc instance
            API_PARAMS.colc.destroy();
            document.querySelectorAll(".grid-col").forEach(e => {
                e.innerHTML = ""
            });
            await findInsertGiphy(); // await population of images into the element
            API_PARAMS.q_time = 0;
            API_PARAMS.colc = new Colcade(document.querySelector(".grid"), {
                columns: '.grid-col',
                items: '.grid-item'
            }); // run colc on doc to generate layout
        } else {
            await findInsertGiphy(); // await population of images into the element
            API_PARAMS.colc = new Colcade(document.querySelector(".grid"), {
                columns: '.grid-col',
                items: '.grid-item'
            }); // run colc on doc to generate layout
            API_PARAMS.q_time = 0;
        }
        API_PARAMS.q_time = 1; // set to destroy colc for next query
}

/* Buisness Logic */
async function findInsertGiphy() {
    search_term = (encodeURIComponent(document.querySelector("#searchterm").value).trim());
    if (search_term.length < 1) {
        console.log("No search provided");
    } else {
        // Build Query
        API_PARAMS.query += search_term
        API_PARAMS.search_url += API_PARAMS.query + API_PARAMS.query_limit;
        // Fetch and parse Query
        let response = await fetch(API_PARAMS.search_url);
        let json = await response.json();
        let grid = document.querySelector(".grid");
        grid.innerHTML = defHtml;
        if (!json.data || json.data.length == 0) {
            console.log("not found!");
        } else {
            const gifResults = json.data;
            // Populate query results into doc
            await gifResults.forEach(obj => {
                let d = document.createElement("div")
                d.className = "grid-item";
                d.innerHTML = `<img src="${obj.images.fixed_height.url}" alt="${obj.source}" class="giphy">`;
                grid.appendChild(d);
            });
            // reset query
            API_PARAMS.query = "&q=";
            API_PARAMS.search_url = "https://api.giphy.com/v1/gifs/search?" + "api_key=md8TKXmklb61Iwgx5ARcazARdFESrjUy";
        }
    }
}

async function moreResults(){
    if (API_PARAMS.q_time!=0){
        if (search_term.length < 1) {
            console.log("No search provided");
        } else {
            // Build Query
            API_PARAMS.offset+=API_PARAMS.limit/2;
            search_term = (encodeURIComponent(document.querySelector("#searchterm").value).trim());
            API_PARAMS.query += search_term
            API_PARAMS.search_url += API_PARAMS.query + API_PARAMS.query_limit + API_PARAMS.offset;
            // Fetch and parse Query
            const response = await fetch(API_PARAMS.search_url);
            const json = await response.json();
            let items = [];
            if (!json.data || json.data.length == 0) {
                console.log("not found!");
            } else {
                const gifResults = json.data;
                // Populate query results into doc
                await gifResults.forEach(obj => {
                    let d = document.createElement("div")
                    d.className = "grid-item";
                    d.innerHTML = `<img src="${obj.images.fixed_height.url}" alt="${obj.source}" class="giphy">`;
                    items.push(d);
                });
                API_PARAMS.query = "&q="; // reset query
                API_PARAMS.search_url = "https://api.giphy.com/v1/gifs/search?" + "api_key=md8TKXmklb61Iwgx5ARcazARdFESrjUy"; //reset
            }
            API_PARAMS.colc.append(items); // add items without destroying colc
        }
    }
    document.querySelector("#moreResultsBtn").hidden = true; // reset add results btn
}