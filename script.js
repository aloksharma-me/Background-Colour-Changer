let button = document.querySelector("#btn");
let colourHex = document.querySelector("#colourHex");
let bgColour = document.querySelector(".rightContainer");
let insideBgColour = document.querySelector(".colourInsideContainer");

button.onclick = changeColour;

function changeColour(){    

    let redValue = Math.floor(Math.random()*(255 - 0));
    let greenValue = Math.floor(Math.random()*(255 - 0));
    let blueValue = Math.floor(Math.random()*(255 - 0));

    bgColour.style.backgroundColor = 'rgb(' + redValue + ', ' + greenValue + ', ' + blueValue + ')';
    insideBgColour.style.backgroundColor = 'rgb(' + redValue + ', ' + greenValue + ', ' + blueValue + ')';

    colourHex.innerText = 'rgb(' + redValue + ', ' + greenValue + ', ' + blueValue + ')';
}


// Initial logic which uses a finite set of colours
// const colours = [
//     {name: "deepOrange", hex: "#F52F1D"},
//     {name: "lightBlue", hex: "#4F68F1"},
//     {name: "pink", hex: "#F45191"},
//     {name: "orange", hex: "#FC602B"},
//     {name: "darkRed", hex: "#A51507"},
//     {name: "darkBlue", hex: "#0040AA"},
//     {name: "darkGreen", hex: "#005646"},
//     {name: "purple", hex: "#3F0589"},
//     {name: "deepGold", hex: "#7E6408"},
//     {name: "deepBlue", hex: "#041184"},
// ];

// let button = document.querySelector("#btn");
// let colourHex = document.querySelector("#colourHex");
// let backgroundColour = document.querySelector(".rightContainer");
// let insideBackgroundColour = document.querySelector(".colourInsideContainer");
// const length = colours.length;

// button.onclick = changeColour;

// function changeColour(){
//     let index = Math.ceil(Math.random()*(length - 0));
//     backgroundColour.style.backgroundColor = colours[index].hex;
//     insideBackgroundColour.style.backgroundColor = colours[index].hex;
//     colourHex.innerText = colours[index].hex;
// }