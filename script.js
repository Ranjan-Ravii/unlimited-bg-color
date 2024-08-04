// this is optimized verrion.

const body = document.querySelector('body')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

let changeBG;

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

const startChanging = function () {
    if (changeBG) {
        clearInterval(changeBG)
    }
    changeBG = setInterval(function () {
        body.style.backgroundColor = randomColor();
    }, 1000)
    start.disabled = true;
}

const stopChanging = function () {
    clearInterval(changeBG)
    changeBG = null
    start.disabled = false 
}

start.addEventListener('click', startChanging)
stop.addEventListener('click', stopChanging)