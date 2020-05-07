"use strict";
// global variables :-p
var ctx = undefined;
var gLineCap = "butt";
var gLineJoin = "bevel";
var gLineDash = [];
var gStrokeStyle;

// #1 - wait for page to load
window.onload = init; 

function init(){
    console.log("init() called");
    // #2 - get pointer to <canvas> element on page
    var canvas = document.querySelector('canvas');
    
    // #3 - get pointer to "drawing context" and drawing API
    ctx = canvas.getContext('2d');
    
    
    document.querySelector('#lineCapChooser').onchange = function(e){
        gLineCap = e.target.value;
        drawLines();
    };
    
    document.querySelector('#lineJoinChooser').onchange = function(e){
        gLineJoin = e.target.value;
        drawLines();
    };
    
    document.querySelector('#lineDashChooser').onchange = function(e){
        if(e.target.value == "dashed"){
            gLineDash = [16,5]; // 16-pixel line followed by 5-pixel space
        } else{
            gLineDash = []; // no dashes
        }
        drawLines();
    };
    document.querySelector('#strokeStyleChooser').onchange = function(e){
        if (e.target.value == "gradient"){ 
         // make a gradient here
        // more gradient code here  
            gStrokeStyle = grad;
        }else{  
            gStrokeStyle = e.target.value; 
        } 
        drawLines(); 
    };

    
    
    drawLines();
}

function drawLines(){
    /* #4 - start drawing! */
    // clear screen
    ctx.clearRect(0,0,300,300);
    
    ctx.beginPath();
    ctx.moveTo(50,50);
    ctx.lineTo(50,250);

    ctx.moveTo(100,250);
    ctx.lineTo(100,50);
    ctx.lineTo(250,50);

    ctx.moveTo(150,250);
    ctx.lineTo(200,100);
    ctx.lineTo(250,250);

    ctx.strokeStyle = "black";
    ctx.lineCap = gLineCap;
    ctx.lineJoin = gLineJoin;
    ctx.setLineDash(gLineDash);
    ctx.lineWidth = 16;
    ctx.stroke();
}



