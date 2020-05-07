"use strict";
window.addEventListener("load", setup);

// Global Scope
let canvasContext;
let x = 0, y = 0;
let angle = 0;
const fps = 12;


function setup(){
    canvasContext = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
    animation()
}

function draw(){
    
}

// utility
function dtr(degrees){
    return degrees * (Math.PI/180);
}

function drawCircle(canvasContext,x,y,radius){
    canvasContext.save();
    canvasContext.fillStyle = `rgb(${(255*y)%255},255,255`;
    canvasContext.beginPath();
    canvasContext.arc(x,y,radius,0,Math.PI * 2);
    canvasContext.closePath();
    canvasContext.fill();
    canvasContext.restore();
}


function animation(){
    setTimeout(animation, 1000/fps);
    canvasContext.save();
    canvasContext.globalAlpha = 1/fps;
    canvasContext.fillRect(0,0, canvas.width, canvas.height);
    canvasContext.restore();
    x += 10;
    angle += 0.3
    y = Math.sin(angle) * 100 + canvas.height/2;
    drawCircle(canvasContext, x, y, 2 + 0.0001*((y*y)+2*y+6));
    if (x> canvas.width) x = 0;

}


// lib
function frameAnimator() {
    requestAnimationFrame(frameAnimator); // I dont like how this works and does not break
    draw();
}
