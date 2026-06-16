const hamburger =
document.querySelector(".hamburger");

const navMenu =
document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

});

const logos = [

    "images/arcion-logo11.png",
    "images/arcion-logo12.png",
    "images/arcion-logo13.png",
    "images/arcion-logo14.png",
    "images/arcion-logo15.png"

];

let currentLogo = 0;

const logoImage =
document.getElementById("logoAnimation");

setInterval(() => {

    currentLogo++;

    if(currentLogo >= logos.length){

        currentLogo = 0;
    }

    logoImage.src =
    logos[currentLogo];

}, 250);

const powerStored =
document.getElementById("powerStored");

const futureReady =
document.getElementById("futureReady");

let toggleColor = true;

setInterval(() => {

    if(toggleColor){

        powerStored.style.color =
        "#1f8fff";

        futureReady.style.color =
        "#ffffff";

    } else {

        powerStored.style.color =
        "#ffffff";

        futureReady.style.color =
        "#1f8fff";
    }

    toggleColor = !toggleColor;

}, 2000);

const productsTitle =
document.getElementById("productsTitle");

const productColors = [
    "#9dff00",
    "#ff9800",
    "#00c8ff",
    "#d946ef"
];

let colorIndex = 0;

setInterval(() => {

    const color =
    productColors[colorIndex];

    productsTitle.style.color =
    color;

    productsTitle.style.textShadow =
    `0 0 1px ${color}`;

    colorIndex =
    (colorIndex + 1) %
    productColors.length;

}, 1200);