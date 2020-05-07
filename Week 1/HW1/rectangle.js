/**
 * Adit Garg
 * Triangles class
 */
"use strict";

class Rectangle extends Shape{
    constructor(width = 10, height = 10){
        super();
        this.width = width;
        this.height = height;
    }

    /*
    * Draws a rectangle
    */
    drawfunc(){
        canvasContext.fillStyle = "rgb(252, 201, 98)"; //rand color
        canvasContext.fillRect(this.xPos, this.yPos, this.width, this.height);
    }  
}