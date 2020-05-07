let input = document.querySelector("textarea");
let output = document.querySelector("#output");
const PennTags = ["n","j","v"]
const invalidPennTags = ["nnps","nnp"]
input.oninput = doInput; // called whenever the content of the field changes
input.onchange = doChange; // called when the field loses focus or when the return key is pressed
input.dispatchEvent(new Event("input")); // calls doInput() when the page first loads

function doInput(e){
	let text = e.target.value;
	if (text.length == 0) return;
	output.innerHTML = madderLib(text);
}

function madderLib(text){
	let story = RiString(text);
	let storyWords = story.words();
	let tempPos= "";
	let maddedLibText= "";
	for (let i = 0; i < storyWords.length; i++) {
		tempPos = story.posAt(i);
		if (PennTags.includes(tempPos[0]) && ! invalidPennTags.includes(tempPos[0])){
			maddedLibText += `${RiTa.randomWord(tempPos)} `;
		} else{
			maddedLibText += `${storyWords[i]} `
		}
	}
	return maddedLibText;
}

function doChange(e){
	output.innerHTML = "The input field no longer has focus!";
}