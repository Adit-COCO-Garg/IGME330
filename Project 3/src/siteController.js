/* @author Adit Garg */

/* Imports */
import {initMap, changeTheme} from "./map.js";

/* Global variables */
let btnState;
let startString = `<section id="start"><h1>DISASTER TRACKER</h1><p>Now that you know what's happening, what will you do?</p></section>`;

/* Buisnes logic */


/* 
* function addListeners()
* attaches event listeners and gets states from local storage if available else default
*/
async function addListeners(){
    loadBtnStateLS();
    document.querySelector("#covidBtn").addEventListener("click", toggle);
    document.querySelector("#disasterBtn").addEventListener("click", toggle);
    document.querySelector("#resetBtn").addEventListener("click",reset);
    document.querySelector("#map").addEventListener("click", ()=>{document.querySelector("aside").innerHTML = startString})
    document.querySelector("#themeToggleBtn").addEventListener("click", ToggleTheme);
}

/* 
* function toggle(e)
* @param e: event which called this function
* Toggles the data attribute for the covid and disaster button 
* adds state to local storage
*/
function toggle(e){
    let elem = document.querySelector(`#${e.target.id}`)
    if (e.target.id === "covidBtn"){
        btnState.covid = !btnState.covid;
        elem.setAttribute("data-checked",btnState.covid.toString())
    } else{
        btnState.disaster = !btnState.disaster;
        elem.setAttribute("data-checked",btnState.disaster.toString())
    }
    document.querySelector("#map").innerHTML = ""; // clears out existing DOM
    document.querySelector("aside").innerHTML = startString;
    initMap(btnState);
    
    setBtnStateLS();
}

/* 
* function reset()
* Resets all states to default, local storage reset, map re-initialized
*/
function reset(){
    btnState = {covid: true, disaster: true, theme: "dark", reset:false}
    document.querySelector("#covidBtn").setAttribute("data-checked",btnState.covid.toString());
    document.querySelector("#disasterBtn").setAttribute("data-checked",btnState.disaster.toString());
    document.documentElement.setAttribute('data-theme', btnState.theme);
    document.querySelector("#map").innerHTML = ""; // clears out existing DOM
    initMap(btnState);
    document.querySelector("aside").innerHTML = startString;
    setBtnStateLS();
}

/* 
* function loadBtnStateLS()
* Loads all button states and establishes those states into the dom and js
*/
function loadBtnStateLS(){
    btnState = localStorage.getItem("btnStateStoredINT");
    if (!btnState){
        btnState = {covid: true, disaster: true, theme: "dark", reset:false};
        setBtnStateLS();
    }
    btnState = JSON.parse(btnState);
    document.querySelector("#covidBtn").setAttribute("data-checked",btnState.covid.toString());
    document.querySelector("#disasterBtn").setAttribute("data-checked",btnState.disaster.toString());
    document.documentElement.setAttribute('data-theme', btnState.theme)
}

/* 
* function setBtnStateLS()
* sets localstorage btnState to current local btnState
*/
function setBtnStateLS(){
    localStorage.setItem("btnStateStoredINT",JSON.stringify(btnState));
}

/* 
* function ToggleTheme()
* Toggles theme
*/
function ToggleTheme(e){
    if (btnState.theme=="dark"){
        document.documentElement.setAttribute('data-theme', 'light')
        btnState.theme = "light"
    } 
    else{
        document.documentElement.setAttribute('data-theme', 'dark')
        btnState.theme = "dark"
    }

    changeTheme(btnState.theme);
    setBtnStateLS();
}

/* export module */
export{addListeners, btnState}