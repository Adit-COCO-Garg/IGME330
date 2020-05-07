const search = document.getElementById('searchterm')
const tip = document.getElementById('tip')
let i = 0;
let message = 'Baby yoda';
let speed = 60;

function typeWriter() {
    if (i < message.length) {
        msg = search.getAttribute('placeholder') + message.charAt(i);
        search.setAttribute('placeholder', msg)
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();


search.addEventListener('keydown', () => {
    tip.style.visibility = 'visible';
    tip.style.opacity = '1';
})