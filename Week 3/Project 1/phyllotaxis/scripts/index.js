"use strict";
window.addEventListener("load", setup);
window.addEventListener("keydown", agLIB.switcher);

// Global Scope
let canvasContext;
const fps = 900;
let n = 0;
const divergence = 1;
const c = 6;
let radius = 2;


function setup(){
    canvasContext = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
    animation();
}


function animation(){
    setTimeout(animation, 1000/1000);

    if (agLIB.pause){

        
        canvasContext.save();
        canvasContext.globalAlpha = 1/fps;
        canvasContext.fillRect(0,0, canvas.width, canvas.height);
        canvasContext.restore();
    // each frame draw a new dot
        // `a` is the angle
        // `r` is the radius from the center (e.g. "Pole") of the flower
        // `c` is the "padding/spacing" between the dots
        let a = n * agLIB.dtr(divergence);
        let r = c * Math.sqrt(n);
        let x = r * Math.cos(a) + canvas.width/2;
        let y = r * Math.sin(a) + canvas.height/2;
        let color = `hsl(${(n/5) * divergence % 361},100%,50%)`;
        agLIB.drawCircle(canvasContext,x,y,radius,color);
        n++;
        radius+=0.01
    }
    
}



