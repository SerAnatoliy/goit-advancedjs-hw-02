const buttons = {
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]'),
    body: document.body,
}
let color
buttons.start.addEventListener('click', onStart)
buttons.stop.addEventListener('click', onStop)
buttons.start.disabled = false
buttons.stop.disabled = true

function onStart() {
    color = setInterval(() => {
        buttons.body.style.backgroundColor = getRandomHexColor()
    }, 1000)
    buttons.start.disabled = true
    buttons.stop.disabled = false
}

function onStop() {
    clearInterval(color)
    buttons.start.disabled = false
    buttons.stop.disabled = true
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
