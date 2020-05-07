let input = document.querySelector("#input");
let output = document.querySelector("#output");

input.oninput = doInput; // called whenever the content of the field changes
input.dispatchEvent(new Event("input")); // calls doInput() when the page first loads

function doInput(e) {
    let text = e.target.value;
    text = palindromeChecker(
    text); // matches all whitespace and anything that's not a letter from the english lexicon
    if (text) {
        input.classList.add("palindrome");
        output.classList.add("palindrome");
    } else {
        input.classList.remove("palindrome");
        output.classList.remove("palindrome");
    }
    output.innerHTML = text ? "that's a palindrome alright!" : "nope :/ not a palindrome";
}


function palindromeChecker(text) {
    let stripped = text.replace(/\s+|[^a-z]/gi, "").toLowerCase();
    let reversed = stripped.split("").reverse().join("");
    return reversed == stripped;
}