"use strict";
window.addEventListener("load", setup);
window.addEventListener("keydown", agLIB.switcher);

//window.addEventListener("click", agLIB.switcher);

// Global Scope
let canvasContext;
let fps = 900;
let n = 0 ;
let divergence = 1;
let c = 6;
let radius = 2;


function setup(){
    canvasContext = canvas.getContext("2d");
    document.querySelector("#resetBtn").addEventListener("click",canvasReset);
    document.querySelector("#radius").addEventListener("change", valChange);
    canvas.width = window.innerWidth+20;
    canvas.height = window.innerHeight+20;
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
    window.onresize = setup;
    animation();
}

// function changedVal(){
//     n = document.querySelector("#n").value;
//     divergence =  document.querySelector("#c").value;
//     c = document.querySelector("#divergence").value;
//     r = document.querySelector("#radius").value;
// }

function animation(){
    
    setTimeout(animation, 500/fps);

    if (agLIB.pause){
        // changedVal();
        canvasContext.save();
        canvasContext.globalAlpha = 0.005;
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
        radius+=0.01; 
        fps = document.querySelector("#fps").value;
        divergence =  document.querySelector("#divergence").value;
        c = document.querySelector("#c").value;
        radius+=0.01;

    }
        
    
}
function canvasReset(){
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    setup();
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
    fps = 900;
    n = 0 ;
    divergence = 1;
    c = 6;
    radius = 2;
}



function valChange(){
    radius = document.querySelector("#radius").value;
}