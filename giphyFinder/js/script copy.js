window.addEventListener("load", setup);

const API_PARAMS = {
    query: "&q=",
    query_limit: "&limit=100",
    offset: 0,
    rating: "g",
    lang: "en",
    random_id: "oof",
    search_url: "https://api.giphy.com/v1/gifs/search?" + "api_key=md8TKXmklb61Iwgx5ARcazARdFESrjUy",
    q_time: 0, // a switch for refreshing queries - it deletes previous results
    colc: ""
};


let defHtml = `<section class="grid-col grid-col--1"></section>
<section class="grid-col grid-col--2"></section>
<section class="grid-col grid-col--3"></section>
<section class="grid-col grid-col--4"></section>`;

function setup(){
    window.addEventListener("load", addScrolledToBottomEvent);
    window.addEventListener("load", addSearchButtonEvent);
    
    console.log("loaded")
}

function addSearchButtonEvent(e){
    document.querySelector("#searchterm").addEventListener("keyup", event=>{
        if (event.code == "Enter"){
            searchButtonClicked(e);
        }
    });
    document.querySelector("#moreResultsBtn").addEventListener("click",moreResutls);
}
function addScrolledToBottomEvent(){
    console.log("oof");
    window.addEventListener("scroll",()=>{
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            console.log("oof");
            document.querySelector("#moreResultsBtn").hidden=false;
        }
    });
}

async function searchButtonClicked(e) {
    console.log("ooof");
    if (API_PARAMS.q_time != 0) {
        API_PARAMS.colc.destroy();
        document.querySelectorAll(".grid-col").forEach(e => {
            e.innerHTML = ""
        });
        await temp();
        API_PARAMS.q_time = 0;
        API_PARAMS.colc = new Colcade(document.querySelector(".grid"), {
            columns: '.grid-col',
            items: '.grid-item'
        });
    } else {
        await temp();
        API_PARAMS.colc = new Colcade(document.querySelector(".grid"), {
            columns: '.grid-col',
            items: '.grid-item'
        });
        API_PARAMS.q_time = 0;
    }
    API_PARAMS.q_time = 1;
}


async function temp() {
    temp_term = (encodeURIComponent(document.querySelector("#searchterm").value).trim());
    if (temp_term.length < 1) {
        console.log("No search provided");
    } else {
        API_PARAMS.query += temp_term
        API_PARAMS.search_url += API_PARAMS.query + API_PARAMS.query_limit;
        let response = await fetch(API_PARAMS.search_url);
        let json = await response.json();
        let grid = document.querySelector(".grid");
        grid.innerHTML = defHtml;
        if (!json.data || json.data.length == 0) {
            console.log("not found!");
        } else {
            const gifResults = json.data;
            await gifResults.forEach(obj => {
                let d = document.createElement("div")
                d.className = "grid-item";
                d.innerHTML = `<img src="${obj.images.fixed_height.url}" alt="${obj.source}" class="giphy">`;
                grid.appendChild(d);
            });
            API_PARAMS.query = "&q=",
                API_PARAMS.search_url = "https://api.giphy.com/v1/gifs/search?" + "api_key=md8TKXmklb61Iwgx5ARcazARdFESrjUy"
        }
    }
}

async function moreResutls(){
    if (API_PARAMS.q_time!=0){
        let response = await fetch(API_PARAMS.search_url);
        let json = await response.json();
        let items = [];
        if (!json.data || json.data.length == 0) {
            console.log("not found!");
        } else {
            const gifResults = json.data;
            await gifResults.forEach(obj => {
                let d = document.createElement("div")
                d.className = "grid-item";
                d.innerHTML = `<img src="${obj.images.fixed_height.url}" alt="${obj.source}" class="giphy">`;
                items.push(d);
            });
            API_PARAMS.query = "&q=",
                API_PARAMS.search_url = "https://api.giphy.com/v1/gifs/search?" + "api_key=md8TKXmklb61Iwgx5ARcazARdFESrjUy"
        }
        API_PARAMS.colc.append(items);
    }
    document.querySelector("#moreResultsBtn").hidden=true;
}