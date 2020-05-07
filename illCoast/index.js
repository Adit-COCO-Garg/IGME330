let darkGrammar = { // NEW
    "<start>": ["The <adj1> <noun>"],

    "<adj1>": ["dead", "fatal", "reeking", "unfortunate", "perilous", "stinking", "empty", "treacherous",
        "malodorous", "barren", "menacing", "fetid", "arid", "savage", "rancid", "deserted", "vicious", "mephitic", "desolate"
    ],
    "<noun>": ["coast", "foreshore", "bracks", "shore", "tidewater", "bluffs", "shores", "seaside", "scarps", "strand", "shoreside", "glint", "bank"]
};

let output = document.querySelector("#output");
let grammar = new RiGrammar(darkGrammar); // NEW
let button = document.querySelector("button");
button.onclick = doClick;
button.dispatchEvent(new Event("click"));


function doClick() {
    let story = "<ul>";
    for (let i = 0; i < 10; i++) {
        story += `<li>${grammar.expand()}</li>`     
    }
    story += "</ul>";
    console.log(story)
    output.innerHTML = story;
}