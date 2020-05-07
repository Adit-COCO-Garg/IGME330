window.addEventListener("load", setup);

const stopwords = ["a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "between", "both", "but", "by", "can't", "cannot", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "don't", "down", "during", "each", "few", "for", "from", "further", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself", "him", "himself", "his", "how", "how's", "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "isn't", "it", "it's", "its", "itself", "let's", "me", "more", "most", "mustn't", "my", "myself", "no", "nor", "not", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "ours", "ourselves", "out", "over", "own", "same", "shan't", "she", "she'd", "she'll", "she's", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "to", "too", "under", "until", "up", "very", "was", "wasn't", "we", "we'd", "we'll", "we're", "we've", "were", "weren't", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "who's", "whom", "why", "why's", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves"];
let canvasContext, canvasWidth, canvasHeight;

let fontFam = "Comic Neue";
let rawDataLength = 0;
let sortedData;
let dataDone = false;

function setup() { //called once
    let canvas = document.querySelector("canvas");
    canvasContext = canvas.getContext("2d");
    canvas.ondragenter = onDragenter;
    canvas.ondragover = onDragover;
    canvas.ondrop = onDrop;
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
}

function resizeCanvas() {
    window["agLIB"].canvasSetup({
        width: window.innerWidth * 0.70,
        height: (window.innerWidth * 0.70) * 9 / 16
    });
    canvasContext.save();
    canvasContext.fillStyle = "black";
    canvasContext.fillRect(0, 0, window.innerWidth, window.innerHeight);
    canvasContext.restore();
    canvasWidth = canvasContext.canvas.width;
    canvasHeight = canvasContext.canvas.width;
    visualizer()
}


function onDragenter(e) {
    e.stopPropagation();
    e.preventDefault();
    e.target.classList.add("hover");
}

function onDragover(e) {
    e.stopPropagation();
    e.preventDefault();
}

function onDrop(e) {
    e.stopPropagation();
    e.preventDefault();
    dataDone = false;
    e.target.classList.remove("hover");
    let file = e.dataTransfer.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = dataLoaded;
        reader.readAsText(file);
    }
}

function dataLoaded(e) {
    let s = e.target.result;
    // console.log(s)
    textAnalyzer(s);
}

function textAnalyzer(s) {
    let words = s.split(/\W+/);
    let dictonary = {};
    for (let word of words) {
        word = word.toLowerCase();
        if (stopwords.includes(word) || /\d+/.test(word) || word.length < 2) continue
        if (typeof dictonary[word] == "undefined") { // instead of the word in dict. Which would be a linear search this is O(1)
            dictonary[word] = 1;
            rawDataLength+=1;
        } else {
            dictonary[word] += 1;
            rawDataLength+=1;
        }
    }
    sortedData = mergeSort(Object.entries(dictonary));
    dataDone = true;
    visualizer()
}

// adapted from : https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060
// adapted from : https://www.cs.rit.edu/~csci141/Lectures/08/FastSorts-stu.pdf
function mergeSort(unsorted) {
    if (unsorted.length <= 1) {
        return unsorted;
    }
    const [left, right] = splitter(unsorted)
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [],
        leftIndex = 0,
        rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex][1] > right[rightIndex][1] ){
            result.push(left[leftIndex]);
            leftIndex++; // move left  cursor
        } else {
            result.push(right[rightIndex]);
            rightIndex++; // move right  cursor
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function visualizer(){
    if (dataDone){
        let sum = 0;
        for (let i = 0; i < sortedData.length && i < 10; i++) {
            sum += sortedData[i][1]
        }
        for (let i = 0; i < sortedData.length && i < 10; i++) {
            canvasContext.save();
            canvasContext.font = `${20+(sortedData[i][1]/sum)*200}px serif`;
            canvasContext.fillStyle = `hsla(${360*(Math.random()*360)},100%,64%,1)`
            let posX = canvasWidth*0.15 + (canvasWidth*0.50 * Math.random());
            let posY = canvasHeight*0.1 +(canvasHeight*0.4 * Math.random());
            canvasContext.fillText(sortedData[i][0], posX,posY);
            canvasContext.restore();
        }
    }
}

function splitter(unsorted){
    left = [];
    right = [];
    for (let i=0; i<unsorted.length; i++){
        if (i%2==0){
            left.push(unsorted[i])
        } else{
            right.push(unsorted[i])
        } 
    }
    return [left,right]
}