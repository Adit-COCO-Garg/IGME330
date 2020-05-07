/*
	main.js is primarily responsible for hooking up the UI to the rest of the application 
	and setting up the main event loop
*/

// We will write the functions in this file in the traditional ES5 way
// In this instance, we feel the code is more readable if written this way
// If you want to re-write these as ES6 arrow functions, to be consistent with the other files, go ahead!
import * as canvas from './canvas.js';
import * as audio from "./audio.js";
import * as utils from './utils.js';

// 1 - here we are faking an enumeration
const DEFAULTS = Object.freeze({
	sound1  :  "media/New Adventure Theme.mp3"
});

const drawParams = {
    showGradient: true,
    showBars: true,
    showCircles: true,
    showNoise : false,
    showEmboss: false,
    showInvert: false
}

function init(){
    audio.setupWebaudio(DEFAULTS.sound1);
	// console.log("init called");
	// console.log(`Testing utils.getRandomColor() import: ${utils.getRandomColor()}`);
	let canvasElement = document.querySelector("canvas"); // hookup <canvas> element
    setupUI(canvasElement);
    canvas.setupCanvas(canvasElement,audio.analyserNode);
    loop();
}

function setupUI(canvasElement){
  // A - hookup fullscreen button
  const fsButton = document.querySelector("#fsButton");
	
  // add .onclick event to button
  fsButton.onclick = e => {
    // console.log("init called");
    utils.goFullscreen(canvasElement);
  };

  playButton.onclick = e => {
    //   console.log(`audioCtx.state before = ${audio.audioCtx.state}`);

      if (audio.audioCtx.state == "suspended"){
          audio.audioCtx.resume();
      }

    //   console.log(`audioCtx.state after - ${audio.audioCtx.state}`);
      if (e.target.dataset.playing == "no"){
          audio.playCurrentSound();
          e.target.dataset.playing = "yes";
      }else{
          audio.pauseCurrentSound();
          e.target.dataset.playing = "no";
      }
      // vol slider and label
      let volumeSlider = document.querySelector("#volumeSlider");
      let volumelabel = document.querySelector("#volumeLabel");
        // oninput event on slider
      volumeSlider.oninput = e =>{
          //set gain
          audio.setVolume(e.target.value);
          // slider value = label value
          volumelabel.innerHTML = Math.round(e.target.value/2 *100);

      };
      //set label = init value slider 
      volumeSlider.dispatchEvent(new Event("input"));

      // track select event
      let trackSelect = document.querySelector("#trackSelect");
      //add on change event
      trackSelect.onChange = e =>{
          audio.loadSoundFile(e.target.value);
          // pause current track if it's playing
          if (playbutton.dataset.playing = "yes"){
              playbutton.dispatchEvent(new MouseEvent("click"));
          }

      }
  }
	
} // end setupUI

function loop(){
    /* NOTE: This is temporary testing code that we will delete in Part II */
        requestAnimationFrame(loop);
        canvas.draw(drawParams);
        // 1) create a byte array (values of 0-255) to hold the audio data
        // normally, we do this once when the program starts up, NOT every frame
        let audioData = new Uint8Array(audio.analyserNode.fftSize/2);
        
        // 2) populate the array of audio data *by reference* (i.e. by its address)
        audio.analyserNode.getByteFrequencyData(audioData);
        
        // 3) log out the array and the average loudness (amplitude) of all of the frequency bins
            // console.log(audioData);
            
            // console.log("-----Audio Stats-----");
            let totalLoudness =  audioData.reduce((total,num) => total + num);
            let averageLoudness =  totalLoudness/(audio.analyserNode.fftSize/2);
            let minLoudness =  Math.min(...audioData); // ooh - the ES6 spread operator is handy!
            let maxLoudness =  Math.max(...audioData); // ditto!
            // Now look at loudness in a specific bin
            // 22050 kHz divided by 128 bins = 172.23 kHz per bin
            // the 12th element in array represents loudness at 2.067 kHz
            let loudnessAt2K = audioData[11]; 
            // console.log(`averageLoudness = ${averageLoudness}`);
            // console.log(`minLoudness = ${minLoudness}`);
            // console.log(`maxLoudness = ${maxLoudness}`);
            // console.log(`loudnessAt2K = ${loudnessAt2K}`);
            // console.log("---------------------");
    }

    // document.querySelectorAll("input").forEach(e=>e.addEventListener("change",checkedEvent))

    function checkedEvent(e){
        if (e.target.id == "gradientCB") drawParams.showGradient = e.target.value;
        if (e.target.id == "circlesCB") drawParams.showCircles = e.target.value;
        if (e.target.id == "barsCB") drawParams.showBars = e.target.value;
        if (e.target.id == "noiseCB") drawParams.showNoise = e.target.value;
        if (e.target.id == "embossCB") drawParams.showEmboss = e.target.value;
        if (e.target.id == "invertCB") drawParams.showInvert = e.target.value;
    }

export {init};