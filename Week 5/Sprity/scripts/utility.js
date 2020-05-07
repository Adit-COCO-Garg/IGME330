// #4 - UTILITY CODE
		// Here's more code that should probably be in a separate file
		// Maybe in abcLIB.js (if you are working on Project 1) or utils.js (if you are working on Project 2)
		// Also check out `createLinearGradient()`, it's new and handy

function getRandomUnitVector(){
	let x = getRandom(-1,1);
	let y = getRandom(-1,1);
	let length = Math.sqrt(x*x + y*y);
	if(length == 0){ // very unlikely
		x=1; // point right
		y=0;
		length = 1;
	} else{
		x /= length;
		y /= length;
	}
	return {x:x, y:y};
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

function getRandomColor(){
	const getByte = _ => 35 + Math.round(Math.random() * 220);
	return `rgba(${getByte()},${getByte()},${getByte()},1)`;
}

function createLinearGradient(ctx,startX,startY,endX,endY,colorStops){
	let lg = ctx.createLinearGradient(startX,startY,endX,endY);
	for(let stop of colorStops){
		lg.addColorStop(stop.percent,stop.color);
	}
	return lg;
}

// simple pre-loader that loads 1 image
// Hey - why don't you rewrite this to handle an *array* of images! :-)
// preloadImage(imageURL,callbackFunc);
function preloadImage(url,callback){
	let img = new Image();
	img.src = url;
	img.onload = _=>{
		callback(img)
	};
	img.onerror = _=>{
		console.log(`Image at url "${url}" wouldn't load! Check your URL!`);
	};
}