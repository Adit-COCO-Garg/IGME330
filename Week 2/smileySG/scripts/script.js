"use strict";

// Window state events
window.onload = setup;
window.onresize = setup;

//global scope
let canvas, canvasContext;

/*
* Sets up the canvas variables and defines default variables.
*/
function canvasSetup(){
    canvas = document.querySelector("canvas");
    canvasContext = canvas.getContext("2d"); 
    canvasContext.canvas.width = window.innerWidth;
    canvasContext.canvas.height = window.innerHeight;
}


function setup(){
    canvasSetup();
    sky();
    ground();
    let smiley = new Smiley( window.innerWidth/2, window.innerHeight/2);
    smiley.drawfunc();
}


function ground(){
    canvasContext.beginPath();
    canvasContext.moveTo(0, window.innerHeight/2);
    canvasContext.lineTo(window.innerWidth, window.innerHeight/2);
    canvasContext.closePath();
    canvasContext.lineWidth = 10;
    canvasContext.stroke();
    canvasContext.beginPath();
    canvasContext.fillStyle = "#6ba100";
    canvasContext.fillRect(0, window.innerHeight/2, window.innerWidth, window.innerHeight);
}

function sky(){
    canvasContext.beginPath();
    canvasContext.fillStyle = "#2fd6f7";
    canvasContext.fillRect(0, 0, window.innerWidth, window.innerHeight/2);
    canvasContext.beginPath();
    canvasContext.fillStyle = "#ffcc00";
    canvasContext.arc(window.innerWidth - 20, 20, 200, 0, Math.PI * 2);
    canvasContext.fill()
}


  

  