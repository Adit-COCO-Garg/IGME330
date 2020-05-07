/* @author Adit Garg */
window.addEventListener("load",setup); // function run

/* Imports */
import * as maps from "./map.js";
import * as news from "./getNewsData.js";
import {addListeners, btnState} from "./siteController.js"

/* Buisnes logic */

/* 
* function setup()
* sets up the webapp
*/
async function setup(){
    addListeners(); // attach event listeners
    await maps.initMap(btnState); // draw the map based on config defined via state (btnState)
    let target = document.querySelector("#map");
    let observer = new MutationObserver(MarkerSelected);
    const config = { attributes: false, childList: true, subtree: false };
    observer.observe(target, config); // attaches a listener to get the selected marker 
}

/* 
* function MarkerSelected()
* This function is fired whenever the domtree's childlist changes this is quite clever (self-pat)
* as Mapbox relies on modifying the childlist of the dom for popups - 
* Note: This webapp does not delete/ remove popup when any state change occurs (deletion of old 
* popup is required to avoid weird bugs [old popup related info will show up])
*/
function MarkerSelected(){
    let title = document.querySelector("div.mapboxgl-popup-content h3"); // popup h3 element has all relevant info for us
    if (!btnState.reset && title){ // checks if any popups might have been left alive
        if (title.id.length>2){ // description fetch aka reliefweb disaster description id length is always > 2
            news.fetchDescription(title.id, title);
        } else {  // covid data has ISO 3 2 letter intl. country name
            let search = encodeURIComponent(`+${title.innerHTML} +COVID-19`);
            news.initNews(search); 
        }
    }
    btnState.reset = false; // if there was a reset - reset finished completely
}


