// #0 - In this course we will always use ECMAScript 5's "strict" mode
// See what 'use strict' does here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode
'use strict';

// #1 call the init function after the pages loads
// this is called an "event handler"
window.onload = init;
window.onresize = init;
let direction = "",
    oldx = 0,
    mousemovemethod = function (e) {
    
        if (e.pageX < oldx) {
            direction = "left"
        } else if (e.pageX > oldx) {
            direction = "right"
        } 
        
        oldx = e.pageX;
        
}

window.addEventListener('mousemove', mousemovemethod);

//global vars
let canvas, canvasContext, x0, y0, x1, y1, gradient, particles;



function init(){
    // #2 Now that the page has loaded, start drawing!
    console.log('init called');
    
    // A - canvas variable points at <canvas> tag
    canvas = document.querySelector("canvas");
    
    // B - the canvasContext variable points at a "2D drawing context"
    canvasContext = canvas.getContext("2d"); 
    canvasSetup();
    
    // C - all fill operations are now in yellow
    canvasContext.fillStyle = "rgb(235, 235, 235)"; 
    
    // D - fill a rectangle with the current fill color
    canvasContext.fillRect(0,0, window.innerWidth, window.innerHeight ); 
    
    
    x0 = window.innerWidth/4 - window.innerWidth/20;
    y0 = window.innerHeight/4 - window.innerHeight/20;
    x1 = window.innerWidth/2 + window.innerWidth/4 + window.innerWidth/20;
    y1 = window.innerHeight/2 + window.innerHeight/4 + window.innerHeight/20;
    gradient = canvasContext.createLinearGradient(x0, y0, x1, y1);
    gradient.addColorStop(0, `rgb(48, 113, 173)`);
    gradient.addColorStop(1, `rgb(4, 240, 255)`);

    particles = new ParticleSystem();
    particles.makeParticles();
    /*
    Make your version different:

    i) Change the yellow rectangle to a different solid color.
    
    ii) Change the text to your name, and change the color of the text to 
    something else. Note: Color can be specified in any legal CSS way, 
    i.e. pre-defined keyword, hex, shorthand hex, RGB value, RGB percentage, RGBA,
        or even HSL
    http://www.w3schools.com/cssref/css_colors_legal.asp


    iii) Change the font of your name to something else. If you know how to embed
        web fonts, find something here and use it: http://www.google.com/fonts

    iv) Add another line of text that reads “IGM”. Make sure that this text
        appears in a different color and font than your name did.

    v) Add two squares to your canvas (50 x 50  or so) using 
    canvasContext.fillRect(x,y,width,height)- and make sure that the square color is the 
    same as the first text you 
    drew (your name).

    */
   
  setup();
  draw();
  }

/*
* Sets up the canvas variables and defines default variables.
*/
function canvasSetup(){
    console.log("oof")
    canvasContext.canvas.width = window.innerWidth;
    canvasContext.canvas.height = window.innerHeight;
}

/** SOURCE: https://stackoverflow.com/a/3368118/8639892
 * Draws a rounded rectangle using the current state of the canvas.
 * If you omit the last three params, it will draw a rectangle
 * outline with a 5 pixel border radius
 * @param {CanvasRenderingContext2D} canvasContext
 * @param {Number} x The top left x coordinate
 * @param {Number} y The top left y coordinate
 * @param {Number} width The width of the rectangle
 * @param {Number} height The height of the rectangle
 * @param {Number} [radius = 5] The corner radius; It can also be an object 
 *                 to specify different radii for corners
 * @param {Number} [radius.tl = 0] Top left
 * @param {Number} [radius.tr = 0] Top right
 * @param {Number} [radius.br = 0] Bottom right
 * @param {Number} [radius.bl = 0] Bottom left
 * @param {Boolean} [fill = false] Whether to fill the rectangle.
 * @param {Boolean} [stroke = true] Whether to stroke the rectangle.
 */
function roundRect(canvasContext, x, y, width, height, radius, fill, stroke) {
    if (typeof stroke === 'undefined') {
      stroke = true;
    }
    if (typeof radius === 'undefined') {
      radius = 5;
    }
    if (typeof radius === 'number') {
      radius = {tl: radius, tr: radius, br: radius, bl: radius};
    } else {
      var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
      for (var side in defaultRadius) {
        radius[side] = radius[side] || defaultRadius[side];
      }
    }
    canvasContext.beginPath();
    canvasContext.moveTo(x + radius.tl, y);
    canvasContext.lineTo(x + width - radius.tr, y);
    canvasContext.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    canvasContext.lineTo(x + width, y + height - radius.br);
    canvasContext.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    canvasContext.lineTo(x + radius.bl, y + height);
    canvasContext.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    canvasContext.lineTo(x, y + radius.tl);
    canvasContext.quadraticCurveTo(x, y, x + radius.tl, y);
    canvasContext.closePath();
    if (fill) {
      canvasContext.fill();
    }
    if (stroke) {
      canvasContext.stroke();
    }
  
  }

  function setup(){

    gradient = canvasContext.createLinearGradient(x0, y0, x1, y1);
    gradient.addColorStop(0, `rgb(48, 113, 173)`);
    gradient.addColorStop(1, `rgb(4, 240, 255)`);
    canvasContext.fillStyle = gradient;
    roundRect(canvasContext, window.innerWidth/4, window.innerHeight/4, window.innerWidth/2, window.innerHeight/2, 30, true, false);
    // E - set the current font
    canvasContext.font = `normal ${(window.innerHeight/24) * 0.7}pt IM Fell Great Primer SC`;
      
    // F - change the current fill color
    canvasContext.fillStyle = "#ffffff";

    // G - draw and fill text using current fill color
    canvasContext.fillText("Shinigami like Apples", window.innerWidth/4 + window.innerWidth/15.3,window.innerHeight/2);
    canvasContext.font = `normal ${(window.innerHeight/24) * 0.5}pt IM Fell Great Primer SC`;

    canvasContext.fillText("Light Yagami", window.innerWidth/4 + window.innerWidth/15.3, window.innerHeight/1.88);
    
  }

  function draw(){
    requestAnimationFrame(draw);// I dont like how this works and does not break
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.moveParticles();
    setup();
  }
  

  