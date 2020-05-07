/* @author Adit Garg */

/* Imports */
import * as disasters from "./getDisasterData.js";
import * as corona from "./getCoronaData.js"
import PopupCoronaParagraph from "./PopupCoronaParagraph.js"

/* Global variables */
let geojson = {
    "type": "FeatureCollection",
    "features": []
};
let geojsonCorona = {
    "type": "FeatureCollection",
    "features": []
};
let typesDist = new Set();
let map;

/* Buisnes logic */

/* initMap({covid, disaster, theme})
* Initializes the map with the map itself, markers, and the relevant data
* @param: a part of the btnState
*/
function initMap({covid, disaster, theme}) {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXllY29jbyIsImEiOiJjazk5OTZhb3QxZThyM2lsMmNpMWQzYm4yIn0.0pEJ0qjIhLriirr-BNpUDQ';
    map = new mapboxgl.Map({
        container: 'map',
        style: `mapbox://styles/mapbox/${theme}-v10`,
        zoom: 0,
        center: [27, -37]
    });
    map.addControl(new mapboxgl.NavigationControl());
    if (disaster) dataM();
    if (covid) dataF();
    return Promise.resolve("Success!")
}

/* changeTheme(theme)
* Changes the theme of the map
* @param: theme: "dark" or "light"
*/
function changeTheme(theme){
    map.setStyle(`mapbox://styles/mapbox/${theme}-v10`);
}

/* dataM()
* fetches all disasters and adds their markers and data on the map
*/
async function dataM() {
    let data = await disasters.fetchDisasters();
    geoJSONconverter(data);
    map.on('load', function (e) {
        map.addSource('Disaster', {
            type: 'geojson',
            data: geojson
        });
        addMarkers();
    });
}

/* dataF()
* fetches all Covid data and add their markers and data on the map
*/
async function dataF() {
    let data = await corona.fetchCorona();
    geoJSONconverterCorona(data);
    map.on('load', function (e) {
        map.addSource('Corona', {
            type: 'geojson',
            data: geojsonCorona
        });
        addMarkersCorona();
    });
}

/*  geoJSONconverterCorona(countries)
* converts all fetched data for covid to geojson
*/
function geoJSONconverterCorona(countries) {
    countries = countries.data;
    for (let country of countries) {
        let {coordinates, name, code, population, updated_at, today, latest_data} = country;
        let date = new Date(updated_at);
        date = date.toDateString();
        const newFeature = {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [coordinates.longitude,coordinates.latitude]
            },
            properties: {
                name: name, // name of country
                code: code, // country code
                population: population, // population country
                last_updated: updated_at, // data updated date
                today: today, // data for today
                latest_data: latest_data // latest aggregated data
            }
        }
        geojsonCorona.features.push(newFeature);
    }
}

/*  geoJSONconverter(data)
* converts all fetched data for disasters to geojson
*/
function geoJSONconverter(data) {
    data = data.data;
    for (let disaster of data) {
        const newFeature = {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: []
            },
            properties: {
                title: "",
                description: "",
                status: "",
                date: "",
                status: "",
                id: ""
            }
        }
        newFeature.geometry.coordinates[0] = disaster.fields.country[0].location.lon;
        newFeature.geometry.coordinates[1] = disaster.fields.country[0].location.lat;
        newFeature.properties.title = disaster.fields.name;
        let status = disaster.fields.status;
        let date = new Date(disaster.fields.date.created);
        date = date.toDateString();
        status = status[0].toUpperCase() + status.slice(1);
        newFeature.properties.date = date;
        newFeature.properties.type = disaster.fields.type;
        newFeature.properties.status = status;
        newFeature.properties.id = disaster.id;
        geojson.features.push(newFeature);
    }
}

/*  addMarkersCorona()
* adds all covid location markers to the map and attaches popups
*/
function addMarkersCorona(){
    geojsonCorona.features.forEach(marker=>{
        if (!(marker.geometry.coordinates[0]+marker.geometry.coordinates[1]==0)){
            let el = document.createElement('section');
            el.className = "marker"
            let {name, code, population, updated_at, today, latest_data} = marker.properties;
            let joinedName = `${name.split(' ').join("-")}`;
            // el.className = `marker ${status}`; // todo
            el.style.backgroundImage += `url(styles/assets/bacteria.svg)`;
            let pString = PopupCoronaParagraph.init({name, code, population, updated_at, today, latest_data})
           
            new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .setPopup(new mapboxgl.Popup({
                    offset: 10
                }) // add popups
                    .setHTML(`<h3 class="Corona" id="${code}">${name}</h3>${pString}`))
                .addTo(map);
        } 
    });
}


/*  addMarkers()()
* adds all disaster location markers to the map and attaches popups
*/
function addMarkers() {
    geojson.features.forEach(function (marker) {
        let el = document.createElement('section');
        let {
            title,
            date,
            type,
            status, 
            id
        } = marker.properties;
        el.className = `marker ${status}`;
        let typeString = "";
        el.style.backgroundImage += `url(styles/assets/${status}marker.png)`;
        for (let t of type) {
            t = ` ${t.name.split(' ').join("-")}`;
            typeString += t
            el.className += t
        }
        typeString.split(' ').forEach(t => {
            if (t != "") {
                typesDist.add(t)
            }
        })
        new mapboxgl.Marker(el, {
                offset: [0, -23]
            }, typeString)
            .setLngLat(marker.geometry.coordinates)
            .setPopup(new mapboxgl.Popup({
                    offset: 25
                }) // add popups
                .setHTML(`<h3 class="${status}" id=${id}>${title}</h3><p>Status: ${status}<br>Date: ${date}<br>Type: ${typeString}</p>`))
            .addTo(map);
    });
}

/* export module */
export {
    initMap,
    changeTheme
}