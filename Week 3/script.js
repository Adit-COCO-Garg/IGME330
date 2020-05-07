let walker = {
x:320,
y:240,
color: "black",
width: 5,
move(){
    if(flipWeightedCoin()){
        this.x += flipWeightedCoin() ? -this.width : this.width;
    }else{
        this.y += flipWeightedCoin() ? -this.width : this.width;
    }
}
};


// #0 - in this class we will always use ECMAScript 5's "strict" mode
// See what 'use strict' does here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode
'use strict';
let canvasContext;
// #1 call the init function after the pages loads
window.onload = function(){
    console.log("page loaded!");
    // #2 Now that the page has loaded, start drawing!
    
    // A - canvas variable points at <canvas> tag
    let canvas = document.querySelector('canvas');
    
    // B - the canvasContext variable points at a "2D drawing context"
    canvasContext = canvas.getContext('2d');
    canvasSetup();
    
    
    // C - all fill operations are now in red
    canvasContext.fillStyle = 'red'; 
    
    // D - fill a rectangle with the current fill color
    canvasContext.fillRect(0,0,canvas.innerWidth, canvas.innerHeight); 
    setInterval(drawWalker,1000/1000);

}


function drawWalker(){
    canvasContext.fillStyle =  getRandomColor();
    canvasContext.fillRect(walker.x-walker.width/6,walker.y-walker.width/6,walker.width,walker.width);
    walker.move();
}

// UTILS
function getRandomColor(){
    function getByte(){
        return 55 + Math.round(Math.random() * 200);
    }
    return "rgba(" + getByte() + "," + getByte() + "," + getByte() + ",.8)";
}

function cls(){
    canvasContext.clearRect(0,0,640,480);
}

function flipWeightedCoin(weight = 0.5){
    return Math.random() < weight;
}

/*
* Sets up the canvas variables and defines default variables.
*/
function canvasSetup(){
    canvasContext.canvas.width = window.innerWidth;
    canvasContext.canvas.height = window.innerHeight;
}