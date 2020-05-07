let canvasContext;

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

window.addEventListener("load", setup);

// lib
function frameAnimator() {
    requestAnimationFrame(frameAnimator); // I dont like how this works and does not break
    draw();
}