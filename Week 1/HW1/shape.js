/**
 * Adit Garg
 * Shapes class
 */
"use strict";

class Shape{
    constructor(){
        this.xPos = Math.floor(Math.random()*window.innerWidth); //  x - position
        this.yPos = Math.floor(Math.random()*window.innerHeight); //  y - position
        this.speed = Math.random()*1 ;
        this.xSpeed = 0;
    }

    /*
    * Implemented in sub classes
    */
    drawfunc(){
        console.log("Ran into an error!")
        return null;
    }
    /*
    * Updates the shape
    */
    updateFunc(){
        //this.xPos += 1;//rand wiggle dependent on mouse?
        if (this.speed > 1) this.speed =Math.random()*1;
        this.yPos += this.speed;
        this.xPos += direction == "left" ? -1 : 1;
        
        if (window.innerHeight < this.yPos){
            this.yPos = 0;
            this.xPos = Math.floor(Math.random()* window.innerWidth);
        }
        else if (0 > this.xPos){
            this.yPos = Math.floor(Math.random()* window.innerHeight);
            this.xPos = window.innerWidth;
        } else if(window.innerWidth < this.xPos){
            this.yPos = Math.floor(Math.random()* window.innerHeight);
            this.xPos = 0;
        }
        this.drawfunc();
    } 
}