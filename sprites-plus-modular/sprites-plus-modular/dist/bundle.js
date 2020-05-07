/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/canvas-utils.js":
/*!*****************************!*\
  !*** ./src/canvas-utils.js ***!
  \*****************************/
/*! exports provided: createLinearGradient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLinearGradient\", function() { return createLinearGradient; });\n\n//\"use strict\";\nfunction createLinearGradient(ctx,startX,startY,endX,endY,colorStops){\n\tlet lg = ctx.createLinearGradient(startX,startY,endX,endY);\n\tfor(let stop of colorStops){\n\t\tlg.addColorStop(stop.percent,stop.color);\n\t}\n\treturn lg;\n}\n\nconst secret = 42;\nfunction amazing(){\n  console.log(\"Doing amazing things here!\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2FudmFzLXV0aWxzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NhbnZhcy11dGlscy5qcz8wNWMwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7Y3JlYXRlTGluZWFyR3JhZGllbnR9O1xuLy9cInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIGNyZWF0ZUxpbmVhckdyYWRpZW50KGN0eCxzdGFydFgsc3RhcnRZLGVuZFgsZW5kWSxjb2xvclN0b3BzKXtcblx0bGV0IGxnID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KHN0YXJ0WCxzdGFydFksZW5kWCxlbmRZKTtcblx0Zm9yKGxldCBzdG9wIG9mIGNvbG9yU3RvcHMpe1xuXHRcdGxnLmFkZENvbG9yU3RvcChzdG9wLnBlcmNlbnQsc3RvcC5jb2xvcik7XG5cdH1cblx0cmV0dXJuIGxnO1xufVxuXG5jb25zdCBzZWNyZXQgPSA0MjtcbmZ1bmN0aW9uIGFtYXppbmcoKXtcbiAgY29uc29sZS5sb2coXCJEb2luZyBhbWF6aW5nIHRoaW5ncyBoZXJlIVwiKTtcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/canvas-utils.js\n");

/***/ }),

/***/ "./src/loader.js":
/*!***********************!*\
  !*** ./src/loader.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./src/main.js\");\n\n// 1) this script a good place to load fonts, images, sounds and other resources\n// 2) start up app\nObject(_main_js__WEBPACK_IMPORTED_MODULE_0__[\"init\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbG9hZGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWRlci5qcz8zZDRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5pdH0gZnJvbSAnLi9tYWluLmpzJztcbi8vIDEpIHRoaXMgc2NyaXB0IGEgZ29vZCBwbGFjZSB0byBsb2FkIGZvbnRzLCBpbWFnZXMsIHNvdW5kcyBhbmQgb3RoZXIgcmVzb3VyY2VzXG4vLyAyKSBzdGFydCB1cCBhcHBcbmluaXQoKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/loader.js\n");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _sprites_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprites.js */ \"./src/sprites.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/* harmony import */ var _canvas_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas-utils.js */ \"./src/canvas-utils.js\");\n\n\n\n\n\n//\"use strict\";\nlet ctx;\nlet canvasWidth;\nlet canvasHeight;\nlet sprites;\nlet gradient;\nlet image;\nlet showTrails,showImage,showBlending,showNoise,showTint = false;\n\n//init();\n\nfunction init(){\n\tctx = document.querySelector(\"canvas\").getContext(\"2d\");\n\tcanvasWidth = mycanvas.width;\n\tcanvasHeight = mycanvas.height;\n\tsprites = []; // an array to hold all of our sprites\n\tgradient = Object(_canvas_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"createLinearGradient\"])(ctx,0,0,0,canvasHeight,[{percent:0,color:\"blue\"},{percent:.25,color:\"green\"},{percent:.5,color:\"yellow\"},{percent:.75,color:\"red\"},{percent:1,color:\"magenta\"}])\n\timage = new Image();\n\t// #3 - stop using an insecure image\n\t//image.src = \"https://vignette.wikia.nocookie.net/yoshi/images/6/68/Yoshi_Happy.png/revision/latest?cb=20150508143229\";\n\timage.src = \"images/Yoshi_Happy.png\";\n\tsprites = createSprites();\n\tsetupUI();\n\tloop();\n}\n\n\nfunction loop(){\n\t// schedule a call to loop() in 1/60th of a second\n\trequestAnimationFrame(loop);\n\n\t// draw background\n\tctx.save();\n\tctx.fillStyle = gradient;\n\t// #1 Show Trails\n\tif (showTrails) ctx.globalAlpha = 0.05;\n\tctx.fillRect(0,0,canvasWidth,canvasHeight);\n\tctx.restore();\n\t\n\t// #2 - Show Image?\n\tif(showImage){\n\t\tctx.save();\n\t\tctx.scale(.5,.5);\n\t\tctx.globalAlpha = 25/255;\n\t\tctx.drawImage(image,-80,-65);\n\t\tctx.restore();\n\t}\n\n\t// loop through sprites, move & draw!\n\tlet counter = 0;\n\tctx.save();\n\tfor (let s of sprites){\n\t\t// move sprites\n\t\ts.move();\n\n\t\t// check sides and bounce\n\t\tif (s.x <= s.span/2 || s.x >= canvasWidth-s.span/2){\n\t\t\ts.reflectX();\n\t\t\ts.move();\n\t\t}\n\t\tif (s.y <= s.span/2 || s.y >= canvasHeight-s.span/2){\n\t\t\ts.reflectY();\n\t\t\ts.move();\n\t\t}\n\t\t\n\t\t// #4 - Show Blending?\n\t\tif (showBlending){\n\t\t\tctx.globalCompositeOperation = counter % 2  ? \"color-dodge\" : \"exclusion\";\n\t\t}\n\t\t\t\t\n\t\t// draw sprites\n\t\ts.draw(ctx);\n\n\t} // end for\n\tctx.restore();\n\t\n\t// BITMAP MANIPULATION\n\tlet imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);\n\tlet data = imageData.data;\n\tlet length = data.length;\n\tlet width = imageData.width; // not using here\n\t// Iterate through each pixel\n\tfor (let i = 0; i < length; i +=4) {\n\t\t// #5 - Show noise\n\t\t// red noise\n\t\tif (showNoise && Math.random() < .07){\n\t\t\tdata[i] = data[i+1] = data[i+2] = 0;\n\t\t\tdata[i] = 255;\n\t\t}\n\t\t\n\t\t// #6 - Show tint\n\t\t// magenta tint\n\t\tif(showTint){\n\t\t\tdata[i] += 50;  \t\t// set red value\n\t\t\t//data[i+1] += 50; \t\t// set green value\n\t\t\tdata[i+2] += 50;\t\t// set blue value\n\t\t\t//data[i+3] -= 128;\t\t// set alpha value\n\t\t}\n\t\t\n\t}\t// end for\n\t\n\t\t// copy data back to canvas\n\t\tctx.putImageData(imageData, 0, 0);\t\n} // end loop()\n\n\n// II. HELPER FUNCTIONS\n\nfunction setupUI(){\n\t\t\tdocument.querySelector('#trailsCB').checked = showTrails;\n\t\t\tdocument.querySelector('#showImageCB').checked = showImage;\n\t\t\tdocument.querySelector('#blendingCB').checked = showBlending;\n\t\t\tdocument.querySelector('#noiseCB').checked = showNoise;\n\t\t\tdocument.querySelector('#tintCB').checked = showTint;\n\t\t\t\n\t\t\tdocument.querySelector('#trailsCB').onchange = e => showTrails = e.target.checked;\n\t\t\tdocument.querySelector('#showImageCB').onchange = e => showImage = e.target.checked;\n\t\t\tdocument.querySelector('#blendingCB').onchange = e => showBlending = e.target.checked;\n\t\t\tdocument.querySelector('#noiseCB').onchange = e => showNoise = e.target.checked;\n\t\t\tdocument.querySelector('#tintCB').onchange = e => showTint = e.target.checked;\n\t\t}\n\nfunction createSprites(num=20){\n\t// create array to hold all of our sprites\n\tlet sprites = [];\n\tfor(let i=0;i<num;i++){\n\t\t// determine random properties and instantiate new RingSprite\n\t\tlet x = Math.random() * (canvasWidth - 100) + 50;\n\t\tlet y = Math.random() * (canvasHeight - 100) + 50;\n\t\tlet span = 15 + Math.random() * 25;\n\t\tlet fwd = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"getRandomUnitVector\"])();\n\t\tlet speed = Math.random() + 2;\n\t\tlet color = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"getRandomColor\"])();\n\t\tlet s = new _sprites_js__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"](x,y,span,fwd,speed,color);\n\t\n\t\t// add to array\n\t\tsprites.push(s);\n\t} // end for\n\n\t// return  array\n\treturn sprites;\n}\n\n// Now I'll just add this local helper method to my code!\n// function getRandomColor(){\n// \treturn `red`;\n// }\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcHJpdGV9IGZyb20gJy4vc3ByaXRlcy5qcyc7XG5pbXBvcnQge2dldFJhbmRvbVVuaXRWZWN0b3IsZ2V0UmFuZG9tLGdldFJhbmRvbUNvbG9yfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7Y3JlYXRlTGluZWFyR3JhZGllbnR9IGZyb20gJy4vY2FudmFzLXV0aWxzLmpzJztcbmV4cG9ydCB7aW5pdH07XG5cbi8vXCJ1c2Ugc3RyaWN0XCI7XG5sZXQgY3R4O1xubGV0IGNhbnZhc1dpZHRoO1xubGV0IGNhbnZhc0hlaWdodDtcbmxldCBzcHJpdGVzO1xubGV0IGdyYWRpZW50O1xubGV0IGltYWdlO1xubGV0IHNob3dUcmFpbHMsc2hvd0ltYWdlLHNob3dCbGVuZGluZyxzaG93Tm9pc2Usc2hvd1RpbnQgPSBmYWxzZTtcblxuLy9pbml0KCk7XG5cbmZ1bmN0aW9uIGluaXQoKXtcblx0Y3R4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNhbnZhc1wiKS5nZXRDb250ZXh0KFwiMmRcIik7XG5cdGNhbnZhc1dpZHRoID0gbXljYW52YXMud2lkdGg7XG5cdGNhbnZhc0hlaWdodCA9IG15Y2FudmFzLmhlaWdodDtcblx0c3ByaXRlcyA9IFtdOyAvLyBhbiBhcnJheSB0byBob2xkIGFsbCBvZiBvdXIgc3ByaXRlc1xuXHRncmFkaWVudCA9IGNyZWF0ZUxpbmVhckdyYWRpZW50KGN0eCwwLDAsMCxjYW52YXNIZWlnaHQsW3twZXJjZW50OjAsY29sb3I6XCJibHVlXCJ9LHtwZXJjZW50Oi4yNSxjb2xvcjpcImdyZWVuXCJ9LHtwZXJjZW50Oi41LGNvbG9yOlwieWVsbG93XCJ9LHtwZXJjZW50Oi43NSxjb2xvcjpcInJlZFwifSx7cGVyY2VudDoxLGNvbG9yOlwibWFnZW50YVwifV0pXG5cdGltYWdlID0gbmV3IEltYWdlKCk7XG5cdC8vICMzIC0gc3RvcCB1c2luZyBhbiBpbnNlY3VyZSBpbWFnZVxuXHQvL2ltYWdlLnNyYyA9IFwiaHR0cHM6Ly92aWduZXR0ZS53aWtpYS5ub2Nvb2tpZS5uZXQveW9zaGkvaW1hZ2VzLzYvNjgvWW9zaGlfSGFwcHkucG5nL3JldmlzaW9uL2xhdGVzdD9jYj0yMDE1MDUwODE0MzIyOVwiO1xuXHRpbWFnZS5zcmMgPSBcImltYWdlcy9Zb3NoaV9IYXBweS5wbmdcIjtcblx0c3ByaXRlcyA9IGNyZWF0ZVNwcml0ZXMoKTtcblx0c2V0dXBVSSgpO1xuXHRsb29wKCk7XG59XG5cblxuZnVuY3Rpb24gbG9vcCgpe1xuXHQvLyBzY2hlZHVsZSBhIGNhbGwgdG8gbG9vcCgpIGluIDEvNjB0aCBvZiBhIHNlY29uZFxuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG5cblx0Ly8gZHJhdyBiYWNrZ3JvdW5kXG5cdGN0eC5zYXZlKCk7XG5cdGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcblx0Ly8gIzEgU2hvdyBUcmFpbHNcblx0aWYgKHNob3dUcmFpbHMpIGN0eC5nbG9iYWxBbHBoYSA9IDAuMDU7XG5cdGN0eC5maWxsUmVjdCgwLDAsY2FudmFzV2lkdGgsY2FudmFzSGVpZ2h0KTtcblx0Y3R4LnJlc3RvcmUoKTtcblx0XG5cdC8vICMyIC0gU2hvdyBJbWFnZT9cblx0aWYoc2hvd0ltYWdlKXtcblx0XHRjdHguc2F2ZSgpO1xuXHRcdGN0eC5zY2FsZSguNSwuNSk7XG5cdFx0Y3R4Lmdsb2JhbEFscGhhID0gMjUvMjU1O1xuXHRcdGN0eC5kcmF3SW1hZ2UoaW1hZ2UsLTgwLC02NSk7XG5cdFx0Y3R4LnJlc3RvcmUoKTtcblx0fVxuXG5cdC8vIGxvb3AgdGhyb3VnaCBzcHJpdGVzLCBtb3ZlICYgZHJhdyFcblx0bGV0IGNvdW50ZXIgPSAwO1xuXHRjdHguc2F2ZSgpO1xuXHRmb3IgKGxldCBzIG9mIHNwcml0ZXMpe1xuXHRcdC8vIG1vdmUgc3ByaXRlc1xuXHRcdHMubW92ZSgpO1xuXG5cdFx0Ly8gY2hlY2sgc2lkZXMgYW5kIGJvdW5jZVxuXHRcdGlmIChzLnggPD0gcy5zcGFuLzIgfHwgcy54ID49IGNhbnZhc1dpZHRoLXMuc3Bhbi8yKXtcblx0XHRcdHMucmVmbGVjdFgoKTtcblx0XHRcdHMubW92ZSgpO1xuXHRcdH1cblx0XHRpZiAocy55IDw9IHMuc3Bhbi8yIHx8IHMueSA+PSBjYW52YXNIZWlnaHQtcy5zcGFuLzIpe1xuXHRcdFx0cy5yZWZsZWN0WSgpO1xuXHRcdFx0cy5tb3ZlKCk7XG5cdFx0fVxuXHRcdFxuXHRcdC8vICM0IC0gU2hvdyBCbGVuZGluZz9cblx0XHRpZiAoc2hvd0JsZW5kaW5nKXtcblx0XHRcdGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBjb3VudGVyICUgMiAgPyBcImNvbG9yLWRvZGdlXCIgOiBcImV4Y2x1c2lvblwiO1xuXHRcdH1cblx0XHRcdFx0XG5cdFx0Ly8gZHJhdyBzcHJpdGVzXG5cdFx0cy5kcmF3KGN0eCk7XG5cblx0fSAvLyBlbmQgZm9yXG5cdGN0eC5yZXN0b3JlKCk7XG5cdFxuXHQvLyBCSVRNQVAgTUFOSVBVTEFUSU9OXG5cdGxldCBpbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xuXHRsZXQgZGF0YSA9IGltYWdlRGF0YS5kYXRhO1xuXHRsZXQgbGVuZ3RoID0gZGF0YS5sZW5ndGg7XG5cdGxldCB3aWR0aCA9IGltYWdlRGF0YS53aWR0aDsgLy8gbm90IHVzaW5nIGhlcmVcblx0Ly8gSXRlcmF0ZSB0aHJvdWdoIGVhY2ggcGl4ZWxcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz00KSB7XG5cdFx0Ly8gIzUgLSBTaG93IG5vaXNlXG5cdFx0Ly8gcmVkIG5vaXNlXG5cdFx0aWYgKHNob3dOb2lzZSAmJiBNYXRoLnJhbmRvbSgpIDwgLjA3KXtcblx0XHRcdGRhdGFbaV0gPSBkYXRhW2krMV0gPSBkYXRhW2krMl0gPSAwO1xuXHRcdFx0ZGF0YVtpXSA9IDI1NTtcblx0XHR9XG5cdFx0XG5cdFx0Ly8gIzYgLSBTaG93IHRpbnRcblx0XHQvLyBtYWdlbnRhIHRpbnRcblx0XHRpZihzaG93VGludCl7XG5cdFx0XHRkYXRhW2ldICs9IDUwOyAgXHRcdC8vIHNldCByZWQgdmFsdWVcblx0XHRcdC8vZGF0YVtpKzFdICs9IDUwOyBcdFx0Ly8gc2V0IGdyZWVuIHZhbHVlXG5cdFx0XHRkYXRhW2krMl0gKz0gNTA7XHRcdC8vIHNldCBibHVlIHZhbHVlXG5cdFx0XHQvL2RhdGFbaSszXSAtPSAxMjg7XHRcdC8vIHNldCBhbHBoYSB2YWx1ZVxuXHRcdH1cblx0XHRcblx0fVx0Ly8gZW5kIGZvclxuXHRcblx0XHQvLyBjb3B5IGRhdGEgYmFjayB0byBjYW52YXNcblx0XHRjdHgucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgMCwgMCk7XHRcbn0gLy8gZW5kIGxvb3AoKVxuXG5cbi8vIElJLiBIRUxQRVIgRlVOQ1RJT05TXG5cbmZ1bmN0aW9uIHNldHVwVUkoKXtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmFpbHNDQicpLmNoZWNrZWQgPSBzaG93VHJhaWxzO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3dJbWFnZUNCJykuY2hlY2tlZCA9IHNob3dJbWFnZTtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibGVuZGluZ0NCJykuY2hlY2tlZCA9IHNob3dCbGVuZGluZztcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub2lzZUNCJykuY2hlY2tlZCA9IHNob3dOb2lzZTtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aW50Q0InKS5jaGVja2VkID0gc2hvd1RpbnQ7XG5cdFx0XHRcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmFpbHNDQicpLm9uY2hhbmdlID0gZSA9PiBzaG93VHJhaWxzID0gZS50YXJnZXQuY2hlY2tlZDtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93SW1hZ2VDQicpLm9uY2hhbmdlID0gZSA9PiBzaG93SW1hZ2UgPSBlLnRhcmdldC5jaGVja2VkO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsZW5kaW5nQ0InKS5vbmNoYW5nZSA9IGUgPT4gc2hvd0JsZW5kaW5nID0gZS50YXJnZXQuY2hlY2tlZDtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub2lzZUNCJykub25jaGFuZ2UgPSBlID0+IHNob3dOb2lzZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGludENCJykub25jaGFuZ2UgPSBlID0+IHNob3dUaW50ID0gZS50YXJnZXQuY2hlY2tlZDtcblx0XHR9XG5cbmZ1bmN0aW9uIGNyZWF0ZVNwcml0ZXMobnVtPTIwKXtcblx0Ly8gY3JlYXRlIGFycmF5IHRvIGhvbGQgYWxsIG9mIG91ciBzcHJpdGVzXG5cdGxldCBzcHJpdGVzID0gW107XG5cdGZvcihsZXQgaT0wO2k8bnVtO2krKyl7XG5cdFx0Ly8gZGV0ZXJtaW5lIHJhbmRvbSBwcm9wZXJ0aWVzIGFuZCBpbnN0YW50aWF0ZSBuZXcgUmluZ1Nwcml0ZVxuXHRcdGxldCB4ID0gTWF0aC5yYW5kb20oKSAqIChjYW52YXNXaWR0aCAtIDEwMCkgKyA1MDtcblx0XHRsZXQgeSA9IE1hdGgucmFuZG9tKCkgKiAoY2FudmFzSGVpZ2h0IC0gMTAwKSArIDUwO1xuXHRcdGxldCBzcGFuID0gMTUgKyBNYXRoLnJhbmRvbSgpICogMjU7XG5cdFx0bGV0IGZ3ZCA9IGdldFJhbmRvbVVuaXRWZWN0b3IoKTtcblx0XHRsZXQgc3BlZWQgPSBNYXRoLnJhbmRvbSgpICsgMjtcblx0XHRsZXQgY29sb3IgPSBnZXRSYW5kb21Db2xvcigpO1xuXHRcdGxldCBzID0gbmV3IFNwcml0ZSh4LHksc3Bhbixmd2Qsc3BlZWQsY29sb3IpO1xuXHRcblx0XHQvLyBhZGQgdG8gYXJyYXlcblx0XHRzcHJpdGVzLnB1c2gocyk7XG5cdH0gLy8gZW5kIGZvclxuXG5cdC8vIHJldHVybiAgYXJyYXlcblx0cmV0dXJuIHNwcml0ZXM7XG59XG5cbi8vIE5vdyBJJ2xsIGp1c3QgYWRkIHRoaXMgbG9jYWwgaGVscGVyIG1ldGhvZCB0byBteSBjb2RlIVxuLy8gZnVuY3Rpb24gZ2V0UmFuZG9tQ29sb3IoKXtcbi8vIFx0cmV0dXJuIGByZWRgO1xuLy8gfVxuXG5cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ }),

/***/ "./src/sprites.js":
/*!************************!*\
  !*** ./src/sprites.js ***!
  \************************/
/*! exports provided: Sprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sprite\", function() { return Sprite; });\n\n//\"use strict\";\n//let sprites = [];\nclass Sprite{\n\tconstructor(x=0,y=0,span=10,fwd={x:1,y:0},speed=0,color=\"black\"){\n\t\tthis.x = x;\n\t\tthis.y = y;\n\t\tthis.span = span;\n\t\tthis.fwd = fwd;\n\t\tthis.speed = speed;\n\t\tthis.color = color;\n\t}\n\n\tdraw(ctx){\n\t\tctx.save();\n\t\tctx.translate(this.x,this.y);\n\t\tctx.beginPath();\n\t\tctx.rect(-this.span/2,-this.span/2,this.span, this.span);\n\t\tctx.closePath();\n\t\tctx.fillStyle = this.color;\n\t\tctx.fill();\n\t\tctx.restore();\n\t}\n\n\tmove(){\n\t\tthis.x += this.fwd.x * this.speed;\n\t\tthis.y += this.fwd.y * this.speed;\n\t}\n\n\treflectX(){\n\t\tthis.fwd.x *= -1;\n\t}\n\n\treflectY(){\n\t\tthis.fwd.y *= -1;\n\t}\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ByaXRlcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zcHJpdGVzLmpzPzU0NTAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHtTcHJpdGV9O1xuLy9cInVzZSBzdHJpY3RcIjtcbi8vbGV0IHNwcml0ZXMgPSBbXTtcbmNsYXNzIFNwcml0ZXtcblx0Y29uc3RydWN0b3IoeD0wLHk9MCxzcGFuPTEwLGZ3ZD17eDoxLHk6MH0sc3BlZWQ9MCxjb2xvcj1cImJsYWNrXCIpe1xuXHRcdHRoaXMueCA9IHg7XG5cdFx0dGhpcy55ID0geTtcblx0XHR0aGlzLnNwYW4gPSBzcGFuO1xuXHRcdHRoaXMuZndkID0gZndkO1xuXHRcdHRoaXMuc3BlZWQgPSBzcGVlZDtcblx0XHR0aGlzLmNvbG9yID0gY29sb3I7XG5cdH1cblxuXHRkcmF3KGN0eCl7XG5cdFx0Y3R4LnNhdmUoKTtcblx0XHRjdHgudHJhbnNsYXRlKHRoaXMueCx0aGlzLnkpO1xuXHRcdGN0eC5iZWdpblBhdGgoKTtcblx0XHRjdHgucmVjdCgtdGhpcy5zcGFuLzIsLXRoaXMuc3Bhbi8yLHRoaXMuc3BhbiwgdGhpcy5zcGFuKTtcblx0XHRjdHguY2xvc2VQYXRoKCk7XG5cdFx0Y3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG5cdFx0Y3R4LmZpbGwoKTtcblx0XHRjdHgucmVzdG9yZSgpO1xuXHR9XG5cblx0bW92ZSgpe1xuXHRcdHRoaXMueCArPSB0aGlzLmZ3ZC54ICogdGhpcy5zcGVlZDtcblx0XHR0aGlzLnkgKz0gdGhpcy5md2QueSAqIHRoaXMuc3BlZWQ7XG5cdH1cblxuXHRyZWZsZWN0WCgpe1xuXHRcdHRoaXMuZndkLnggKj0gLTE7XG5cdH1cblxuXHRyZWZsZWN0WSgpe1xuXHRcdHRoaXMuZndkLnkgKj0gLTE7XG5cdH1cbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sprites.js\n");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getRandomUnitVector, getRandom, getRandomColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomUnitVector\", function() { return getRandomUnitVector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandom\", function() { return getRandom; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomColor\", function() { return getRandomColor; });\n\n//\"use strict\";\nfunction getRandomUnitVector(){\n\tlet x = getRandom(-1,1);\n\tlet y = getRandom(-1,1);\n\tlet length = Math.sqrt(x*x + y*y);\n\tif(length == 0){ // very unlikely\n\t\tx=1; // point right\n\t\ty=0;\n\t\tlength = 1;\n\t} else{\n\t\tx /= length;\n\t\ty /= length;\n\t}\n\n\treturn {x:x, y:y};\n}\n\nfunction getRandom(min, max) {\n\treturn Math.random() * (max - min) + min;\n}\n\nfunction getRandomColor(){\n\tconst getByte = _ => 35 + Math.round(Math.random() * 220);\n\treturn `rgba(${getByte()},${getByte()},${getByte()},1)`;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanM/MDI1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge2dldFJhbmRvbVVuaXRWZWN0b3IsZ2V0UmFuZG9tLGdldFJhbmRvbUNvbG9yfTtcbi8vXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBnZXRSYW5kb21Vbml0VmVjdG9yKCl7XG5cdGxldCB4ID0gZ2V0UmFuZG9tKC0xLDEpO1xuXHRsZXQgeSA9IGdldFJhbmRvbSgtMSwxKTtcblx0bGV0IGxlbmd0aCA9IE1hdGguc3FydCh4KnggKyB5KnkpO1xuXHRpZihsZW5ndGggPT0gMCl7IC8vIHZlcnkgdW5saWtlbHlcblx0XHR4PTE7IC8vIHBvaW50IHJpZ2h0XG5cdFx0eT0wO1xuXHRcdGxlbmd0aCA9IDE7XG5cdH0gZWxzZXtcblx0XHR4IC89IGxlbmd0aDtcblx0XHR5IC89IGxlbmd0aDtcblx0fVxuXG5cdHJldHVybiB7eDp4LCB5Onl9O1xufVxuXG5mdW5jdGlvbiBnZXRSYW5kb20obWluLCBtYXgpIHtcblx0cmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tQ29sb3IoKXtcblx0Y29uc3QgZ2V0Qnl0ZSA9IF8gPT4gMzUgKyBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAyMjApO1xuXHRyZXR1cm4gYHJnYmEoJHtnZXRCeXRlKCl9LCR7Z2V0Qnl0ZSgpfSwke2dldEJ5dGUoKX0sMSlgO1xufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils.js\n");

/***/ }),

/***/ 0:
/*!*************************************************************************************************!*\
  !*** multi ./src/loader.js ./src/main.js ./src/sprites.js ./src/utils.js ./src/canvas-utils.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/loader.js */"./src/loader.js");
__webpack_require__(/*! ./src/main.js */"./src/main.js");
__webpack_require__(/*! ./src/sprites.js */"./src/sprites.js");
__webpack_require__(/*! ./src/utils.js */"./src/utils.js");
module.exports = __webpack_require__(/*! ./src/canvas-utils.js */"./src/canvas-utils.js");


/***/ })

/******/ });