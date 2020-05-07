class Marker{
    constructor(){

    }

    addMarker(coordinates, title, description, className){
        let el = document.createElement("div");
        el.className = className;
        new mapboxgl.Marker(el)
        .setLngLat(coordinates)
        .setPopup(new mapboxgl.Popup({offset: 25}) // add popups
            .setHTML('<h3>' + title + '</h3><p>' + description + '</p>'))
        .addTo(map);
    }
}