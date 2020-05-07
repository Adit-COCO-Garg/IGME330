/**
 * Adit Garg
 * Triangles class
 */
"use strict";

class Triangle extends Shape{
    constructor(edge = 10){
        super();
        this.edge = edge;
    }
    /*
    * Draws a triangle
    */
   drawfunc(){
        canvasContext.fillStyle = "rgb(252, 98, 163)"; //rand color
        canvasContext.beginPath();
        let tempX = this.xPos - this.edge/2;
        let tempY = this.yPos - this.edge/2;
        canvasContext.moveTo(tempX, tempY);
        canvasContext.lineTo(tempX + this.edge, tempY);
        canvasContext.lineTo(tempX+this.edge/2, tempY - this.edge);
        canvasContext.lineTo(tempX, tempY);
        canvasContext.closePath();
        canvasContext.fill();
    }  
    
}