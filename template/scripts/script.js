// ignore this
"use strict";function frameAnimator(){requestAnimationFrame(frameAnimator),draw()}function setup(){console.log("hey"),canvasContext=canvas.getContext("2d"),canvas.width=window.innnerWidth,canvas.height=window.innnerHeight,canvasContext.fillRect(0,0,canvas.Width,canvas.Height),drawSineWave()}function draw(){console.log("hey")}function drawSineWave(){let n=10;for(let t=0;t++;t<100)drawCircle(canvasContext,x,y,2,"white"),x+=n}function canvasSetup(){canvasContext.canvas.width=window.innerWidth,canvasContext.canvas.height=window.innerHeight}function toRadians(n){return n*(Math.PI/180)}function drawCircle(n,t,e,a,i){n.save(),n.fillStyle=i,n.beginPath(),n.arc(t,e,a,0,2*Math.PI),n.closePath(),n.fill(),n.restore()}let canvasContext;window.addEventListener("load",setup);let direction="",oldx=0,mousemovemethod=function(n){n.pageX<oldx?direction="left":n.pageX>oldx&&(direction="right"),oldx=n.pageX};

//global scope

function setup() {
    canvasContext = canvas.getContext("2d");
    canvas.width = window.innnerWidth;
    canvas.height = window.innnerHeight;
    canvasContext.fillRect(0, 0, canvasWidth, canvasHeight);
    drawSineWave()
}


function draw() {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
}