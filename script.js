const colours = [
    {name: "deepOrange", hex: "#F52F1D"},
    {name: "lightBlue", hex: "#4F68F1"},
    {name: "pink", hex: "#F45191"},
    {name: "orange", hex: "#FC602B"},
    {name: "darkRed", hex: "#A51507"},
    {name: "darkBlue", hex: "#0040AA"},
    {name: "darkGreen", hex: "#005646"},
    {name: "purple", hex: "#3F0589"},
    {name: "deepGold", hex: "#7E6408"},
    {name: "deepBlue", hex: "#041184"},
];

let button = document.querySelector("#btn");
let colourHex = document.querySelector("#colourHex");
let backgroundColour = document.querySelector(".rightContainer");
let insideBackgroundColour = document.querySelector(".colourInsideContainer");
const length = colours.length;

button.onclick = changeColour;

function changeColour(){
    let index = Math.ceil(Math.random()*(length - 0));
    backgroundColour.style.backgroundColor = colours[index].hex;
    insideBackgroundColour.style.backgroundColor = colours[index].hex;
    colourHex.innerText = colours[index].hex;
}

//  freeCodeCamp version of the JavaScript code
//  const darkColorsArr = [
//     "#2C3E50",
//     "#34495E",
//     "#2C2C2C",
//     "#616A6B",
//     "#4A235A",
//     "#2F4F4F",
//     "#0E4B5A",
//     "#36454F",
//     "#2C3E50",
//     "#800020",
//   ];
  
//   function getRandomIndex() {
//     const randomIndex = Math.floor(darkColorsArr.length * Math.random());
//     return randomIndex;
//   }
  
//   const body = document.querySelector("body");
//   const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");
  
//   function changeBackgroundColor() {
//     const color = darkColorsArr[getRandomIndex()];
  
//     bgHexCodeSpanElement.innerText = color;
//     body.style.backgroundColor = color;
//   }
//   const btn = document.querySelector("#btn");
  
//   btn.onclick = changeBackgroundColor();