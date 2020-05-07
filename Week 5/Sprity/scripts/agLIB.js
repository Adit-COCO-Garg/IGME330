"use strict";


// lib
(function(){

    function frameAnimator() {
        requestAnimationFrame(frameAnimator); // I dont like how this works and does not break
        draw();
    }

    /*
    * Sets up the canvas variables and defines default variables.
    */
    function canvasSetup(options = {width :500, height : 500, fullScreen : false}){
        if (options.fullScreen){
            canvasContext.canvas.width = window.innerWidth;
            canvasContext.canvas.height = window.innerHeight;
        } else{
            canvasContext.canvas.width = options.width;
            canvasContext.canvas.height = options.height;
        }
        
    }
    function resizeCanvas(setup){
        let oldcanv = document.querySelector('canvas');
        document.removeChild(oldcanv)

        let canv = document.createElement('canvas');
        document.body.appendChild(canv);
        setup();
    }

    function drawCircle(canvasContext,x,y,radius,color){
        canvasContext.save();
        canvasContext.fillStyle = color;
        canvasContext.beginPath();
        canvasContext.arc(x,y,radius,0,Math.PI * 2);
        canvasContext.closePath();
        canvasContext.fill();
        canvasContext.restore();
    }

    /**
     * @summary: Logs a json encoded obj info into console
     * @param {*} obj : object type data
     * 
     */
    function objLog(obj){
        console.log(JSON.parse(JSON.stringify(obj)))
    } 
    // utility
    function dtr(degrees){
        return degrees * (Math.PI/180);
    }
 
    /**
     * Switcher provides functionality for an ON/ off switch. A play/ pause switch for SPACE (" ").
     * 
     */
    function switcher(e){
        let withinX = ((window.innerWidth/2)-80 <= e.pageX)&&(e.pageX <= (window.innerWidth/2)+30)
        let withinY = ((window.innerHeight*.90)-70<= e.pageY)&&(e.pageY <= (window.innerHeight*.95+60))

        if (e.key == " " || (e.type == "click" && (e.which == 1 && (withinX && withinY)))){
            
            agLIB.pause = !agLIB.pause;
            let icon = document.querySelector("i");
            // console.log(agLIB.pause)
            agLIB.pause ? icon.innerHTML = "pause": icon.innerHTML = "play_arrow"
            icon.style.color = "rgba(255, 255, 255, 1)"
            setTimeout(()=>icon.style.color = "rgba(255, 255, 255, 0.3)",200);
        }
    }

    let pause;
    window["agLIB"]={
        objLog,
        dtr,
        drawCircle,
        frameAnimator,
        switcher,
        canvasSetup,
        resizeCanvas,
        pause: false
    }
    
})();