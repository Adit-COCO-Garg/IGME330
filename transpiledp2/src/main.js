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
import * as files from './directory-lister.php';

// 1 - here we are faking an enumeration
let slider, movingSlider = false, uiTimeStamp1, uiTimeStamp2;

const drawParams = {
    showGradient: true,
    showBars: true,
    showCircles: false,
    showNoise: false,
    showEmboss: false,
    showInvert: false,
    showImage:false,
    showQuad:false
}

function init() {
    trackOptionMaker();
    lofibuttons();
    let selectedAudio = document.querySelector("#trackSelect").value;
    let canvasElement = document.querySelector("canvas");
    slider = document.querySelector("#progressBar");
    uiTimeStamp1 = document.querySelector("#uiTimeStamp1");
    uiTimeStamp2 = document.querySelector("#uiTimeStamp2");
    window["agLIB"].dataType = "frequency";
    audio.setupWebaudio(selectedAudio);
    setupUI(canvasElement);
    canvas.setupCanvas(canvasElement, audio.analyserNode);
    window.oninput = checkedEvent;
    slider.addEventListener("change", ()=>{
        if (movingSlider) window["agLIB"].track.currentTime =100;
        movingSlider=false;
        
    });
    slider.addEventListener("mousedown", ()=>{
        movingSlider=true;
    });
    window["agLIB"].track.addEventListener("loadedmetadata",()=>{
        slider.min = 0;
        slider.max = Math.floor(window["agLIB"].track.duration);
        uiTimeStamp2.innerHTML= window["agLIB"].timeStamp(window["agLIB"].track.duration);
    })
    loop();
}

function setupUI(canvasElement) {
    let fsButton = document.querySelector("#fsButton");
    let volumeSlider = document.querySelector("#volumeSlider");
    let volumelabel = document.querySelector("#volumeLabel");
    let convolverLabel = document.querySelector("#convolverLabel");
    let convolverSlider = document.querySelector("#convolverValue");
    
    convolverSlider.addEventListener("change",()=>{
        audio.getIRfile(window["agLIB"].IRfileName);
        convolverLabel.innerHTML = Math.trunc(convolverSlider.value);
    });
    fsButton.addEventListener("click",()=>utils.goFullscreen(canvasElement));
    playButton.addEventListener("click", playButtonEvent);
    // playButton.addEventListener("click", window["agLIB"].switcher);
    volumeSlider.addEventListener("input", e => {
        audio.setVolume(e.target.value);
        volumelabel.innerHTML = Math.round(e.target.value / 2 * 100);
    });
    volumeSlider.dispatchEvent(new Event("input"));
}

function loop() {
    requestAnimationFrame(loop);
    // 1) create a byte array (values of 0-255) to hold the audio data
    // normally, we do this once when the program starts up, NOT every frame
    let audioData = new Uint8Array(audio.analyserNode.fftSize / 2);
    // // 2) populate the array of audio data *by reference* (i.e. by its address)
    audio.analyserNode.getByteFrequencyData(audioData);
    canvas.draw(drawParams);
    // // console.log("-----Audio Stats-----");
    // let totalLoudness = audioData.reduce((total, num) => total + num);
    // let averageLoudness = totalLoudness / (audio.analyserNode.fftSize / 2);
    // let minLoudness = Math.min(...audioData); // ooh - the ES6 spread operator is handy!
    // let maxLoudness = Math.max(...audioData); // ditto!
    // // Now look at loudness in a specific bin
    // // 22050 kHz divided by 128 bins = 172.23 kHz per bin
    // // the 12th element in array represents loudness at 2.067 kHz
    // let loudnessAt2K = audioData[11];
    // // console.log(`averageLoudness = ${averageLoudness}`);
    // // console.log(`minLoudness = ${minLoudness}`);
    // // console.log(`maxLoudness = ${maxLoudness}`);
    // // console.log(`loudnessAt2K = ${loudnessAt2K}`);
    // // console.log("---------------------");
    if (!movingSlider){
        progressBar();
    }
}

function progressBar(){
    slider.value = Math.floor(window["agLIB"].track.currentTime);
    uiTimeStamp1.innerHTML= window["agLIB"].timeStamp(window["agLIB"].track.currentTime);
}

function checkedEvent(e) {
    if (e.target.name == "dataType") {
        window["agLIB"].dataType = e.target.id;
    }
    if (e.target.name == "lofiEffect") {
        window["agLIB"].IRfileName = e.target.id;
        audio.getIRfile(window["agLIB"].IRfileName);
    }
    if (e.target.id == "trackSelect") {
        audio.loadSoundFile(e.target.value);
        uiTimeStamp2.innerHTML= window["agLIB"].timeStamp(window["agLIB"].track.currentTime);
        audioElementAutoResetFix()
    }
    if (e.target.id == "gradientCB") drawParams.showGradient = e.target.checked;
    if (e.target.id == "circlesCB") drawParams.showCircles = e.target.checked;
    if (e.target.id == "barsCB") drawParams.showBars = e.target.checked;
    if (e.target.id == "noiseCB") drawParams.showNoise = e.target.checked;
    if (e.target.id == "embossCB") drawParams.showEmboss = e.target.checked;
    if (e.target.id == "invertCB") drawParams.showInvert = e.target.checked;
    if (e.target.id == "imageCB") drawParams.showImage = e.target.checked;
    if (e.target.id == "quadCB") drawParams.showQuad = e.target.checked;
}

function playButtonEvent(e){
    window["agLIB"].switcher(e);
    if (window["agLIB"].pause){
        audio.pauseCurrentSound();
    } else {
        audio.playCurrentSound();
    }
}

function audioElementAutoResetFix(){
    window["agLIB"].pause = true;
    let icon = document.querySelector("i");
    icon.innerHTML = "play_arrow";
    icon.style.color = "rgba(255, 255, 255, 1)";
    setTimeout(()=>icon.style.color = "rgba(255, 255, 255, 0.3)",200);
}


function trackOptionMaker(){
    let option;
    let selectorElement = document.querySelector("#trackSelect");
    window["agLIB"].fileNames.forEach(fileName => {
        option = document.createElement("option");
        option.value = `src/media/${fileName}`;
        option.innerHTML = fileName.slice(0,fileName.lastIndexOf("."));
        selectorElement.appendChild(option);
    });
}

function lofibuttons(){
    let option;
    let span;
    let firstExec = true;
    let optionLabel;
    let lofiSelector = document.querySelector("#lofiOptions");
    window["agLIB"].IRfileNames.forEach(fileName => {
        option = document.createElement("input");
        if (firstExec) option.checked = true;
        firstExec = false;
        option.type = "radio";
        option.name = "lofiEffect"
        option.value = `ir_lofi/${fileName}`;
        if (fileName=="You are at a party and stuck in the bathroom.wav") option.checked = true;
        option.id = fileName;
        optionLabel = document.createElement("label");
        optionLabel.htmlfor = fileName;
        optionLabel.innerHTML  = fileName.slice(0,fileName.lastIndexOf("."));
        span = document.createElement("span");
        span.appendChild(option);
        span.appendChild(optionLabel);
        lofiSelector.appendChild(span);
    });
}

export {
    init
};