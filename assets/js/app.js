import gsap from "gsap";
const bar = document.querySelector(".loading-bar-inner");
const counter =document.querySelector(".loading-counter-number");

let c=0;

let barInterval = setInterval(() => {
    bar.style.width = c + "%";
    counter.innerText = c+ "%";
    c++;

    if(c===101){
        clearInterval(barInterval)
   
gsap.to(".loading-bar", {
    duration: 5,
    rotate: "90deg",
    left: "1000%",
});

gsap.to(".loading-text,.loading-counter", {
    duration: 0.5,
    opacity:0, 

});
gsap.to(".loading-box", {
    duration: 1,
    height:"500px",
    borderRadius: "50%" 

});
gsap.to(".svg-logo", {
    duration: 10,
    opacity: 1,

});
gsap.to(".loading-box", {
    delay: 2,
    border: "none",

});
gsap.to(".loading", {
    delay: 2,
    duration: 2,
    // zIndex: 1,
    background: "transparent",
    opacity: 0.5,
});

}
}, 20);
