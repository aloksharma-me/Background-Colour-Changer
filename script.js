const colours = [
    {
        name: "deepOrange",
        hex: "#F52F1D"
    },

    {
        name: "lightBlue",
        hex: "#4F68F1"
    },

    {
        name: "pink",
        hex: "#F45191"
    },

    {
        name: "orange",
        hex: "#FC602B"
    },

    {
        name: "darkRed",
        hex: "#A51507"
    },

    {
        name: "darkBlue",
        hex: "#0040AA"
    },

    {
        name: "darkGreen",
        hex: "#005646"
    },

    {
        name: "purple",
        hex: "#3F0589"
    },

    {
        name: "deepGold",
        hex: "#7E6408"
    },

    {
        name: "deepBlue",
        hex: "#041184"
    },
];

let changeColourButton = document.querySelector("button");

function changeColour(){
    console.log("Changed Colour!!!");
}

changeColourButton.onclick = changeColour();