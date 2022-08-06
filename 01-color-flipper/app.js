const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "yellow", "#2f8b468f", "aqua", "blue",
            "rgba(160, 73, 73, 0.425)", "#035049e8", "crimson", "tomato", "violet", "snow", "purple", "peru"];
let clickButton = document.getElementById("btn");
let myPage = document.body.style;
let colorTextDisplay = document.querySelector(".color");
let colorText;

clickButton.addEventListener("click", colorOnScreen);

myPage.backgroundColor = "#f1f5f8";

// colors.forEach(colors=>console.log(randomBackgroundColor()));
//function to pick a color between index 0 and colors.length
function randomBackgroundColor(){
    // let currentBackgroundColor = colors.length;
    let randomColor = Math.floor((Math.random() * colors.length));
    let BackgroundColor = colors[randomColor];
        colorText = BackgroundColor;

    return BackgroundColor;
}

//function to input my random color as background color
function pageColor(){
    myPage.backgroundColor = randomBackgroundColor();
}

console.log(randomBackgroundColor());

//function to change the color text as it displays
//this change will happen because I declared colorText outside of the function before calling it to store the color inside the function

function displayColorText(){
    colorTextDisplay.innerHTML = colorText;
}

//final event when the button is clicked

function colorOnScreen(){
    pageColor();
    displayColorText();
}
