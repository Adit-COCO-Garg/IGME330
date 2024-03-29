"use strict";
window.addEventListener("load", setup);
// window.addEventListener("load", window.onresize(agLIB.resizeCanvas(setup)));




// Global Scope
let canvasContext, gradient, sprites = [], canvas,spriteImage;


function setup(){
    canvas = document.querySelector("canvas");
    canvasContext = canvas.getContext("2d");
    agLIB.canvasSetup({width:600,height:400});
    gradient = createLinearGradient(canvasContext,0,0,0,canvasContext.canvas.height,[{percent:0,color:"blue"},{percent:.25,color:"green"},{percent:.5,color:"yellow"},{percent:.75,color:"red"},{percent:1,color:"magenta"}])
		
    // #5 - make 2 different kinds of sprites and use `array.concat()` to append them to 
    // the `sprites` array
    sprites = sprites.concat(sprites,createSprites(10,Sprite));
    sprites = sprites.concat(sprites,createSprites(20,RingSprite));
    sprites = sprites.concat(sprites,createSprites(10,ImageSprite));
    // But cool kids use the spread operator instead of `array.concat()`
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    // sprites =  [...createSprites(10,Sprite), ...createSprites(20,RingSprite)];
    
    // hook up event handlers
    setupUI();
    preloadImage("/assets/cat.jpg",function(image){spriteImage = image; loop();});
}



function loop(){
    // schedule a call to loop() in 1/60th of a second
    requestAnimationFrame(loop);

    // draw background
    canvasContext.save();
    canvasContext.fillStyle = gradient;
    canvasContext.fillRect(0,0,canvasContext.canvas.width,canvasContext.canvas.height);
    canvasContext.restore();
    
    // move and draw sprites
    moveAndDrawSprites(canvasContext);
}
	
function setupUI(){
    // #6 - note the attribute selector we are using here
    let radioButtons = document.querySelectorAll("input[type=radio][name=speed]");
    for (let r of radioButtons){
        r.onchange = function(e){
            // #7 - form values are returned as Strings, so we have to convert them to a Number
            let speed = Number(e.target.value);
            for (let s of sprites){
                s.speed = Math.random() + speed;
            }
        }
    }
}

// #8 - Note that here we take a Class as a function to an argument
// That means that in JS, classes (as well as functions) are "first class" types like
// String, Number etc in that they can be passed as arguments to functions, and also
// returned from functions.
function createSprites(num=5,classRef=Sprite){
    // create array to hold all of our sprites
    let array = [];
    
    // make some sprites
    for(let i=0;i<num;i++){
        // determine random properties and instantiate new sprite
        let x = Math.random() * (canvasContext.canvas.width - 100) + 50;
        let y = Math.random() * (canvasContext.canvas.height - 100) + 50;
        let span = 15 + Math.random() * 25;
        let fwd = getRandomUnitVector();
        let speed = Math.random() + 2;
        let color = getRandomColor();
        let s = new classRef(x,y,span,fwd,speed,color);

        // add to end of array
        array.push(s);
    } // end for
    
    return array;
}

// #9 - standard "move and check world boundaries" code
function moveAndDrawSprites(canvasContext){
    canvasContext.save();
    for (let s of sprites){
        // move sprite
        s.move();

        // check sides and bounce
        if (s.x <= s.span/2 || s.x >= canvasContext.canvas.width-s.span/2){
            s.reflectX();
            s.move();
        }
        if (s.y <= s.span/2 || s.y >= canvasContext.canvas.height-s.span/2){
            s.reflectY();
            s.move();
        }
            
        // draw sprite
        s.draw(canvasContext);

    } // end for
    canvasContext.restore();
}

function loop(){
    // schedule a call to loop() in 1/60th of a second
    requestAnimationFrame(loop);

    // draw background
    canvasContext.save();
    canvasContext.fillStyle = gradient;
    canvasContext.fillRect(0,0,canvasContext.canvas.width,canvasContext.canvas.height);
    canvasContext.restore();
    
    // move and draw sprites
    moveAndDrawSprites(canvasContext);
}

function setupUI(){
    // #6 - note the attribute selector we are using here
    let radioButtons = document.querySelectorAll("input[type=radio][name=speed]");
    for (let r of radioButtons){
        r.onchange = function(e){
            // #7 - form values are returned as Strings, so we have to convert them to a Number
            let speed = Number(e.target.value);
            for (let s of sprites){
                s.speed = Math.random() + speed;
            }
        }
    }
}

// #8 - Note that here we take a Class as a function to an argument
// That means that in JS, classes (as well as functions) are "first class" types like
// String, Number etc in that they can be passed as arguments to functions, and also
// returned from functions.
function createSprites(num=5,classRef=Sprite){
    // create array to hold all of our sprites
    let array = [];
    
    // make some sprites
    for(let i=0;i<num;i++){
        // determine random properties and instantiate new sprite
        let x = Math.random() * (canvasContext.canvas.width - 100) + 50;
        let y = Math.random() * (canvasContext.canvas.height - 100) + 50;
        let span = 15 + Math.random() * 25;
        let fwd = getRandomUnitVector();
        let speed = Math.random() + 2;
        let color = getRandomColor();
        let s = new classRef(x,y,span,fwd,speed,color);

        // add to end of array
        array.push(s);
    } // end for
    
    return array;
}

// #9 - standard "move and check world boundaries" code
function moveAndDrawSprites(canvasContext){
    canvasContext.save();
    for (let s of sprites){
        // move sprite
        s.move();

        // check sides and bounce
        if (s.x <= s.span/2 || s.x >= canvasContext.canvas.width-s.span/2){
            s.reflectX();
            s.move();
        }
        if (s.y <= s.span/2 || s.y >= canvasContext.canvas.height-s.span/2){
            s.reflectY();
            s.move();
        }
            
        // draw sprite
        s.draw(canvasContext);

    } // end for
    canvasContext.restore();
}

