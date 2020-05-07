/**
 * Adit Garg
 * Smiley class
 */
"use strict";

class Smiley {
    constructor(x, y){
        this.xPos = x;
        this.yPos = y;
    }
    /*
    * Draws a triangle
    */
   drawfunc(){
       // Initial head
        canvasContext.fillStyle = "#fcba03"; //rand color
        canvasContext.beginPath();
        canvasContext.arc(this.xPos, this.yPos, 100, 0, 2*Math.PI);
        canvasContext.closePath();
        canvasContext.fill();
        // Face outline
        canvasContext.fillStyle = "#ffc31c"; //rand color
        canvasContext.beginPath();
        canvasContext.arc(this.xPos-3, this.yPos-2, 95, 0, 2*Math.PI);
        canvasContext.closePath();
        canvasContext.fill();
        // mouth
        canvasContext.fillStyle = "#000000"; //rand color
        canvasContext.beginPath();
        canvasContext.arc(this.xPos, this.yPos + 30 , 50, 0, 2*Math.PI);
        canvasContext.closePath();
        canvasContext.fill();
        // mouth illusion - face color arc
        canvasContext.fillStyle = "#ffc31c"; //rand color
        canvasContext.beginPath();
        canvasContext.arc(this.xPos, this.yPos , 50, 0, 2*Math.PI);
        canvasContext.closePath();
        canvasContext.fill();
        // eyes - yes the eyes are supposed to look funny
        canvasContext.fillStyle = "#000000"; //rand color
        canvasContext.beginPath();
        canvasContext.arc(this.xPos - 20, this.yPos - 35 , 10, 0, 2*Math.PI);
        canvasContext.closePath();
        canvasContext.fill();
        canvasContext.fillStyle = "#000000"; //rand color
        canvasContext.beginPath();
        canvasContext.arc(this.xPos + 20, this.yPos - 15 , 10, 0, 2*Math.PI);
        canvasContext.closePath();
        canvasContext.fill();
    }  
    
}