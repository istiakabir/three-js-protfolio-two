const bar = document.querySelector(".loading-bar-inner");
const counter =document.querySelector(".loading-counter-number");

let c=0;

let barInterval = setInterval(() => {
    bar.style.width = c + "%";
    counter.innerText = c+ "%";
    c++;

    if(c===101){
        clearInterval(barInterval)
    }
}, 20);