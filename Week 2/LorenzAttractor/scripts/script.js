"use strict";
window.addEventListener("load", setup);
let x = 0.1, y=0, z=0, scale = 5;
let a =10, b= 28, c =8/3, counter =0;

// Global Scope
let canvasContext;

function setup(){
    canvasContext = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 600;
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
    frameAnimator();
}

function draw(){
    counter += 0.5;
    if (counter > 360) counter =360;
    let dt = 0.1;
    let dx = (a * (y-x)) * dt;
    let dy =( x * (b-z)) * dt;
    let dz = (x * y - c* z) * dt;


    x = x + dx;
    y = y + dy;
    z = z + dz;
    
    canvasContext.save();
    canvasContext.translate(canvas.width/2, canvas.height/2);
    // canvasContext.fillStyle = "white";
    // let value = 255 - (z*scale);
    canvasContext.fillStyle = `hsl(${counter},100%,50%)`
    canvasContext.fillRect(x*scale,y*scale,2,2);
    canvasContext.restore();
}


// lib
function frameAnimator() {
    requestAnimationFrame(frameAnimator); // I dont like how this works and does not break
    draw();
}
